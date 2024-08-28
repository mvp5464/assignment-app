import { CategoryContextProvider } from "@/context/CategoryContextProvider";
import { ReactNode } from "react";

export const Providers = ({ children }: { children: ReactNode }) => {
  return <CategoryContextProvider>{children}</CategoryContextProvider>;
};
