import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Demos from '@/pages/Demos';
import ThemeToggle from '@/components/UI/themetoggle/themetoggle';

const App: React.FC = () => {
  return (
    <div className="App">
      <ThemeToggle />

      <Routes>
        <Route path="/react_UI" element={<Demos />} />
      </Routes>
    </div>
  );
};

export default App;
