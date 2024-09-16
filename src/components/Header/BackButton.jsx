import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();
  const [prevPath, setPrevPath] = useState(null);

  const handleBack = () => {
    if (prevPath) {
      navigate(prevPath, { replace: true });
    } else {
      navigate(-1);
    }
  };

  return (
    <button onClick={handleBack}>
      Back
    </button>
  );
};

export default BackButton;