// Spotlight.tsx
import React from "react";

export const Spotlight = ({ className, fill }: { className: string, fill: string }) => {
  return (
    <div className={`spotlight ${className}`} style={{ backgroundColor: fill }} />
  );
};
