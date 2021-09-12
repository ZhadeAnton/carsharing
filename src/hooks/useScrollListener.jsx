import { useCallback, useRef, useEffect } from 'react'

const useScrollListener = (element, handleScroll, throttle = 200) => {
  const scrollingTimer = useRef();

  const listenToScroll = useCallback((e) => {
    clearTimeout(scrollingTimer.current);
    scrollingTimer.current = setTimeout(
        () =>
          requestAnimationFrame(() => {
            handleScroll(e);
          }),
        throttle
    );
  }, [scrollingTimer, throttle]);

  const removeScrollListener = useCallback(() => {
    if (element.current) {
      clearTimeout(scrollingTimer.current);
      element.current?.removeEventListener('scroll', listenToScroll);
    }
  }, [scrollingTimer, listenToScroll, element]);

  useEffect(() => {
    element.current.addEventListener('scroll', listenToScroll);

    return () => {
      removeScrollListener();
    };
  });
};

export default useScrollListener;
