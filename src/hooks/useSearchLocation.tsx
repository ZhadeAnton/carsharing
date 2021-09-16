import { getGeocode, getLatLng } from 'use-places-autocomplete'
import { setCurrentLocation } from '../redux/location/locationActionCreators'
import { useAppDispatch } from './usePreTypedHook'

export default function useSearchLocation() {
  const dispatch = useAppDispatch()

  const handleSearch = async (address: string) => {
    try {
      const results = await getGeocode({ address })
      const { lat, lng } = await getLatLng(results[0])
      dispatch(setCurrentLocation({ lat, lng }))
    } catch (error) {
      console.error(error)
    }
  }

  return handleSearch
}
