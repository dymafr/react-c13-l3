import { useEffect, useState } from 'react';

export function useTrackMouse() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function update(e) {
      setPosition({ x: e.pageX, y: e.pageY });
    }
    window.addEventListener('mousemove', update);
    return () => window.removeEventListener('mousemove', update);
  }, []);

  return position;
}
