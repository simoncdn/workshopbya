import react, { useState, useEffect, createContext } from "react";

type CursorContextType = {
  clientX: number;
  clientY: number;
};

export const CursorContext = createContext<CursorContextType | null>(null);

interface cursorPosProps {
  clientX: number;
  clientY: number;
}
export default function cursorProvider({ children }: any) {
  const [cursorPos, setCursorPos] = react.useState<cursorPosProps>({
    clientX: 0,
    clientY: 0,
  });

  react.useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      console.log(e);
    });
  }, []);

  return (
    <CursorContext.Provider value={cursorPos}>
      {children}
    </CursorContext.Provider>
  );
}
