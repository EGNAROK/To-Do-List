import { useEffect } from 'react';

function useCSSVariables(colorObj, prefix = '') {
  useEffect(() => {
    function setVariables(obj, pre = '') {
      Object.entries(obj).forEach(([key, value]) => {
        if (typeof value === 'string') {
          document.documentElement.style.setProperty(`--${pre}${key}`, value);
        } else {
          setVariables(value, `${pre}${key}-`);
        }
      });
    }
    setVariables(colorObj, prefix);
  }, [colorObj, prefix]);
}

export default useCSSVariables;
