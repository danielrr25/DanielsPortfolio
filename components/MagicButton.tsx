// MagicButton.tsx
import React from "react";

const MagicButton = ({ title, icon, position }: { title: string, icon: React.ReactNode, position: string }) => {
  return (
    <button className={`magic-button ${position}`}>
      {title} {icon}
    </button>
  );
};

export default MagicButton;
