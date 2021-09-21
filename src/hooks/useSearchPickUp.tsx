import { getGeocode, getLatLng } from 'use-places-autocomplete'
import { setCurrentMarker } from '../redux/location/locationActionCreators'
import { useAppDispatch } from './usePreTypedHook'

export default function useSearchPickUp() {
  const dispatch = useAppDispatch()

  const handleSearch = async (address: string) => {
    try {
      const results = await getGeocode({ address })
      const pickUp = await getLatLng(results[0])
      dispatch(setCurrentMarker(pickUp))
    } catch (error) {
      console.error(error)
    }
  }

  return handleSearch
}
