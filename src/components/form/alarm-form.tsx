"use client";

import { useFormContext } from "@/components/form/form-context";
import { CategorySelection } from "@/components/form/form-sections/category-selection/category-selection";
import { PerimeterSelection } from "@/components/form/form-sections/perimeter-selection/perimeter-selection";
import { ResetButton } from "@/components/form/reset-button";
import { SubmitButton } from "@/components/form/submit-button";
import { Button } from "@/components/ui/button";
import { MoonStarIcon, SunIcon } from "lucide-react";
import { useEffect, useState } from "react";

export const AlarmForm = () => {
    const { perimeter, category } = useFormContext();
    const [theme, setTheme] = useState("");

    const toggleTheme = () => {
        const currentTheme = document.documentElement.getAttribute("data-theme");
        const newTheme = currentTheme === "light" ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", newTheme);
        window.localStorage.setItem("theme", newTheme);
        setTheme(newTheme);
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedTheme = window.localStorage.getItem("theme");
            if (storedTheme) {
                document.documentElement.setAttribute("data-theme", storedTheme);
                setTheme(storedTheme);
            } else {
                document.documentElement.setAttribute("data-theme", "light");
            }
        }
    }, []);

    return (
        <div className="bg-zinc-100 dark:bg-zinc-900/50 min-h-dvh pb-12">
            <div className="flex items-center justify-between min-w-0 gap-4">
                <div className="flex flex-nowrap min-w-0">
                    <Button variant="ghost" className="relative h-10 rounded-none uppercase opacity-50 grow shrink overflow-hidden basis-0">
                        <span className="overflow-hidden text-ellipsis">Kein aktiver Alarm</span>
                    </Button>
                    <Button
                        variant="ghost"
                        className="group relative h-10 uppercase rounded-none grow shrink overflow-hidden basis-0 outline-0 text-red-600 hover:text-red-700 ring-0 focus-visible:ring-0"
                    >
                        <span className="overflow-hidden text-ellipsis">Alarm erstellen</span>
                        <div className="absolute bottom-0 w-full h-0.5 bg-red-600 origin-bottom transition-[scale] group-hover:scale-y-400 group-focus-visible:scale-y-400 " />
                    </Button>
                </div>
                <Button
                    variant="ghost"
                    size="icon"
                    className="p-0 bg-transparent outline-2 rounded-none ring-0 focus-visible:ring-0 text-red-600 hover:text-red-700 focus-visible:text-red-700 outline-red-700/0 hover:outline-red-700 focus-visible:outline-red-700"
                    onClick={toggleTheme}
                >
                    {theme === "light" ? (
                        <MoonStarIcon size={24} className="w-auto! h-auto!" />
                    ) : (
                        <SunIcon size={24} className="w-auto! h-auto!" />
                    )}
                </Button>
            </div>

            <PerimeterSelection />
            {perimeter ? <CategorySelection /> : null}
            {category ? <SubmitButton /> : null}
            {category ? <ResetButton /> : null}
        </div>
    );
};
