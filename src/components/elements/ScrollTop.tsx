import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ScrollTop = () => {
  const id = useParams<{ id: string }>();

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [id]);

  return null;
};

export default ScrollTop;
