"use client";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

export interface CategoryType {
  _id?: string;
  categoryName: string;
  description?: string;
}

interface CategoryContextType {
  category: CategoryType;
  setCategory: Dispatch<SetStateAction<CategoryType>>;
}

export const CategoryContext = createContext<CategoryContextType>({
  category: {
    categoryName: "",
    description: "",
  },
  setCategory: () => {},
});

export const CategoryContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [category, setCategory] = useState<CategoryType>({
    categoryName: "",
    description: "",
  });
  return (
    <CategoryContext.Provider value={{ category, setCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};
