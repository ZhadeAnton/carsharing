import { getGeocode, getLatLng } from 'use-places-autocomplete'
import { IPickUp } from '../interfaces/mapInterfaces'
import { setMarkersByCurrentLocation } from '../redux/location/locationActionCreators'
import { useAppDispatch } from './usePreTypedHook'

export default function useSearchMarkers() {
  const dispatch = useAppDispatch()

  const handleSearch = async (pickUps: Array<IPickUp>) => {
    try {
      const arrayOfPickUps = pickUps.map(async (item) => {
        const address = item.cityId.name + item.address
        const results = await getGeocode({ address })
        return await getLatLng(results[0])
      })

      const allPickUps: any = await Promise.all(arrayOfPickUps)
      dispatch(setMarkersByCurrentLocation(allPickUps))
    } catch (error) {
      console.error(error)
    }
  }

  return handleSearch
}
