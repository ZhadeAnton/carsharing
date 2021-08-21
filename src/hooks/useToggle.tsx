import { useState, useCallback } from 'react';

export default function useToggle(initialValue = false) {
  const [value, setValue] = useState<any>(initialValue);

  const toggle = useCallback(() => {
    setValue((v: any) => !v);
  }, []);

  return [value, toggle];
}
