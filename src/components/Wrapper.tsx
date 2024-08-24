"use client";
import { ReactNode } from "react";
import Animations from "./Animations";

const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <Animations className="bg-white p-4 rounded-lg w-full h-full transition 0.2s ease-linear hover:shadow-lg">
      {children}
    </Animations>
  );
};

export default Wrapper;
