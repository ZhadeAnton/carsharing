import { useAppSelector } from '../../hooks/usePreTypedHook';

export default function usePageContainer() {
  const state = useAppSelector((state) => state)

  const orderNumber = state.order.orderNumber
  const isOrderConfirmed = state.order.isOrderConfirmed

  return {
    orderNumber,
    isOrderConfirmed
  }
}
