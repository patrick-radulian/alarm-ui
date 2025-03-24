"use client";

import { createContext, useContext, useState } from "react";

type FormContextType = {
    perimeter: "GBT" | "CBT" | null;
    setPerimeter: (perimeter: "GBT" | "CBT") => void;
    category: "fire" | "collapse" | "flood" | null;
    setCategory: (category: "fire" | "collapse" | "flood") => void;
};

const initialState: FormContextType = {
    perimeter: null,
    setPerimeter: () => {},
    category: null,
    setCategory: () => {},
};

const FormContext = createContext<FormContextType>(initialState);

export const FormContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [perimeter, setPerimeter] = useState<"GBT" | "CBT" | null>(null);
    const [category, setCategory] = useState<"fire" | "collapse" | "flood" | null>(null);

    const value = {
        perimeter,
        setPerimeter,
        category,
        setCategory,
    };

    return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

export const useFormContext = () => useContext(FormContext);
