// src/components/Sidebar.tsx
import React from 'react';
import logo from '../../logo.svg';

interface LogoProps {
  visible: boolean;
}

const Logo: React.FC<LogoProps> = ({ visible }) => {
  if (!visible) return null;

  return (
    <div className="logo">
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
};

export default Logo;
