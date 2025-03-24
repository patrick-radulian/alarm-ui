"use client";

import { createContext, useContext, useState } from "react";

type CategoryType = "fire" | "collapse" | "flood";

type Category = {
    alarmText: {
        de: string;
        it: string;
    };
    actionText: {
        de: string;
        it: string;
    };
};

type FormContextType = {
    perimeter: "GBT" | "CBT" | null;
    setPerimeter: (perimeter: "GBT" | "CBT" | null) => void;
    category: CategoryType | null;
    setCategory: (value: FormContextType["category"]) => void;
    categoryTexts: {
        fire: Category;
        collapse: Category;
        flood: Category;
    };
};

const initialState: FormContextType = {
    perimeter: null,
    setPerimeter: () => {},
    category: null,
    setCategory: () => {},
    categoryTexts: {
        fire: {
            alarmText: { de: "Rauchentwicklung aufgrund Brand", it: "Sviluppo di fumo a causa di uno incendio" },
            actionText: {
                de: "Selbstrettung mit Atemschutzgerät; Räumung des Arbeitsbereichs",
                it: "Autosalvataggio con autorespiratore; Sgombero area lavoro",
            },
        },
        collapse: {
            alarmText: { de: "Einsturz", it: "Crollo" },
            actionText: {
                de: "Schnellstmögliches Verlassen des Arbeitsbereichs",
                it: "Uscita rapida dall'area di lavoro",
            },
        },
        flood: {
            alarmText: { de: "Wassereinbruch", it: "Infiltrazione d'acqua" },
            actionText: {
                de: "Schwimmreifen auspacken",
                it: "Tirare fuori il salvagente",
            },
        },
    },
};

const FormContext = createContext<FormContextType>(initialState);

export const FormContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [perimeter, setPerimeter] = useState<"GBT" | "CBT" | null>(null);
    const [category, setCategory] = useState<FormContextType["category"]>(null);

    const value = {
        perimeter,
        setPerimeter,
        category,
        setCategory,
        categoryTexts: initialState.categoryTexts,
    };

    return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

export const useFormContext = () => useContext(FormContext);
