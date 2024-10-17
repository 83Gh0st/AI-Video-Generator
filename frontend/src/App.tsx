// App.tsx
import React from 'react';
import HomePage from './Homepage'; // Adjust path if necessary

const App: React.FC = () => {
  const handleButtonClick = () => {
    alert('Video creation process started!'); // Replace this with your video conversion logic
  };

  return (
    <div>
      <HomePage onClick={handleButtonClick} />
    </div>
  );
};

export default App;
