import { getGeocode, getLatLng } from 'use-places-autocomplete'
import { setCurrentLocation } from '../redux/location/locationActionCreators'
import { useAppDispatch } from './usePreTypedHook'

export default function useSearchLocation() {
  const dispatch = useAppDispatch()

  const handleSearch = async (address: string) => {
    try {
      const results = await getGeocode({ address })
      dispatch(setCurrentLocation(await getLatLng(results[0])))
    } catch (error) {
      console.error(error)
    }
  }

  return handleSearch
}
