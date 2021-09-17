import Geocode from 'react-geocode'
import { IMark } from '../interfaces/mapInterfaces'
import { setPickUp } from '../redux/location/locationActionCreators'
import { useAppDispatch } from './usePreTypedHook'

export default function useSearchByLatLng() {
  const dispatch = useAppDispatch()
  Geocode.setApiKey(process.env.REACT_APP_MAP_KEY!)
  Geocode.setLanguage('ru')
  Geocode.setRegion('ru')

  const handleSearch = async (latLng: IMark) => {
    Geocode.fromLatLng(`${latLng.lat}`, `${latLng.lng}`).then(
        (response) => {
          const street = response.results[0].address_components[1].short_name
          const number = response.results[0].address_components[0].short_name
          const address = street + ',' + ' ' + number
          dispatch(setPickUp(address))
        },
        (error) => {
          console.error(error)
        }
    )
  }

  return handleSearch
}
