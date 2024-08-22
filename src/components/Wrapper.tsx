"use client";
import { ReactNode } from "react";

const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-white p-4 rounded-lg w-full h-full">{children}</div>
  );
};

export default Wrapper;
