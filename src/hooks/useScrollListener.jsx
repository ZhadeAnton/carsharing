import { useCallback, useRef, useEffect } from 'react'

const useScrollListener = (element, handleScroll, throttle = 300) => {
  const scrollingTimer = useRef()

  const listenToScroll = useCallback((e) => {
    element.current?.removeEventListener('scroll', listenToScroll)
    clearTimeout(scrollingTimer.current)
    scrollingTimer.current = setTimeout(
        () => element.current?.addEventListener('scroll', listenToScroll),
        throttle
    )
    handleScroll(e)
  }, [throttle, element, handleScroll])

  useEffect(() => {
    const currentElement = element.current;
    if (currentElement) {
      currentElement.addEventListener('scroll', listenToScroll)
    }

    return () => {
      currentElement?.removeEventListener('scroll', listenToScroll)
      clearTimeout(scrollingTimer.current)
    }
  }, [listenToScroll, element])
}

export default useScrollListener
