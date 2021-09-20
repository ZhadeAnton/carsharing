import React, { useState } from 'react'

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
  onItemClick: (value: any) => void,
  onChange: (value: string) => void
}

export default function InputAutoComplete(props: Props) {
  const dispatch = useAppDispatch()
  const useSetLocation = useSearchLocation()
  const [isInputFocused, setIsInputFocused] = useState(false)
  const [isOpenList, setIsOpenList] = useState(false)

  const handleClickByTown = (item: ITown) => {
    useSetLocation(item.name)
    props.onItemClick(item)
  }

  const handleClickByPickUp = (item: IPickUp) => {
    props.onItemClick(item)
  }

  const handleClickByItem = (item: any) => {
    props.type === 'town' ? handleClickByTown(item) : handleClickByPickUp(item)
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

  const handleFilterArray = (item: any) => {
    return props.type === 'town'
    ? isAddressIncludesValue(item.name, props.value ?? '')
    : isAddressIncludesValue(item.address, props.value ?? '')
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
        onBlur={() => setTimeout(() => setIsInputFocused(false), 120)}
        onChange={(e) => handleChangeInputValue(e)}
      />

      <span
        className='input-primary__close-btn'
        onClick={handleClear}
      >
        { props.value && <Close /> }
      </span>

      <div className='input-autocomplete__wrapper'>
        {
          isOpenList && !props.isDisable && isInputFocused &&
          <ul className='input-autocomplete__suggetion-list'>
            {
              props.array
                  .filter((item: any) => handleFilterArray(item))
                  .map((item: any, index: number) => (
                    <li
                      key={index}
                      className='input-autocomplete__suggetion-list--item'
                      onClick={() => handleClickByItem(item)}
                    >
                      {
                        <span>
                          { props.type === 'town' ? item.name : item.address }
                        </span>
                      }
                    </li>
                  ))
            }
          </ul>
        }
      </div>
    </div>
  )
}
