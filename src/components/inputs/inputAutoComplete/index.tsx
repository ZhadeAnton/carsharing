import React, { useState, useRef, useEffect, MutableRefObject } from 'react'

import './styles.scss'
import { ReactComponent as Close } from '../../../assets/SVG/close.svg'
import { ITown, IPickUp } from '../../../interfaces/mapInterfaces'
import { useAppDispatch } from '../../../hooks/usePreTypedHook'
import { clearPickUp, clearTown } from '../../../redux/location/locationActionCreators'
import { isAddressIncludesValue } from '../../../utils/mapUtils'
import useSearchLocation from '../../../hooks/useSearchLocation'

interface Props {
  array: Array<ITown | IPickUp>,
  value: string,
  placeholder: string,
  isDisable?: boolean,
  type: 'town' | 'pickUp',
  onItemClick: (item: ITown |IPickUp) => void,
  onChange: (value: string) => void
}

export default function InputAutoComplete(props: Props) {
  const listRef: MutableRefObject<HTMLDivElement | null> = useRef(null)
  const dispatch = useAppDispatch()
  const useSetLocation = useSearchLocation()
  const [isInputFocused, setIsInputFocused] = useState(false)
  const [isOpenList, setIsOpenList] = useState(false)

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)

    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [listRef])

  function handleClickOutside(event: any) {
    if (listRef.current && !listRef.current.contains(event.target as HTMLElement)) {
      setIsOpenList(false)
    }
  }

  const handleClickByTown = (item: ITown) => {
    useSetLocation(item.name)
    props.onItemClick(item)
  }

  const handleClickByPickUp = (item: IPickUp) => {
    props.onItemClick(item)
  }

  const handleClickByItem = (item: ITown | IPickUp) => {
    props.type === 'town' ? handleClickByTown(item) : handleClickByPickUp(item as IPickUp)
    setIsOpenList(false)
    setIsInputFocused(false)
  }

  const handleChangeInputValue = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLTextAreaElement
    props.onChange(target.value)
    setIsOpenList(true)
  }

  const handleClear = () => {
    props.type === 'pickUp' ? dispatch(clearPickUp()) : dispatch(clearTown())
    setIsOpenList(false)
    setIsInputFocused(false)
  }

  const handleFilterArray = (item: ITown | IPickUp) => {
    const townItem = item as ITown
    const pickUpItem = item as IPickUp

    return props.type === 'town'
    ? isAddressIncludesValue(townItem.name, props.value ?? '')
    : isAddressIncludesValue(pickUpItem.address, props.value ?? '')
  }

  return (
    <div
      className='input-primary'
      onClick={() => setIsOpenList(true)}
    >
      <input
        className={ `input-autocomplete__input${!props.isDisable ? '' : '-disable'}`}
        value={props.value}
        placeholder={props.placeholder}
        disabled={props.isDisable}
        onFocus={() => setIsInputFocused(true)}
        onChange={(e) => handleChangeInputValue(e)}
      />

      <span
        className='input-primary__close-btn'
        onClick={handleClear}
      >
        { props.value && <Close /> }
      </span>

      <div
        ref={listRef}
        className='input-autocomplete__wrapper'
      >
        {
          isOpenList && !props.isDisable && isInputFocused &&
          <ul className='input-autocomplete__suggetion-list'>
            {
              props.array
                  .filter((item: IPickUp | ITown) => handleFilterArray(item))
                  .map((item: IPickUp | ITown, index: number) => {
                    const townItem = item as ITown
                    const pickUpItem = item as IPickUp

                    return (
                      <li
                        key={index}
                        className='input-autocomplete__suggetion-list--item'
                        onClick={() => handleClickByItem(item)}
                      >
                        {
                          <span>
                            { props.type === 'town' ? townItem.name : pickUpItem.address }
                          </span>
                        }
                      </li>
                    )
                  })
            }
          </ul>
        }
      </div>
    </div>
  )
}
