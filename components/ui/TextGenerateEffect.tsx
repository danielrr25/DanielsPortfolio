// TextGenerateEffect.tsx
import React from "react";

export const TextGenerateEffect = ({ words, className }: { words: string, className: string }) => {
  return (
    <div className={className}>
      {words}
    </div>
  );
};
