import { useFormContext } from "@/components/form/form-context";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import Image from "next/image";

type FormButtonProps = {
    activationValue: "fire" | "collapse" | "flood";
    imgSrcActive: string;
    imgSrcInactive: string;
    imgAltActive: string;
    imgAltInactive: string;
    children: React.ReactNode;
    className?: string;
};

export const CategoryButton = ({
    activationValue,
    imgSrcActive,
    imgSrcInactive,
    imgAltActive,
    imgAltInactive,
    children,
    className,
    ...props
}: FormButtonProps) => {
    const { category, setCategory } = useFormContext();

    const onClick = () => {
        setCategory(activationValue);

        if (category) return;

        window.requestAnimationFrame(() => {
            const categorySelection = document.querySelector("#submit-button");

            categorySelection?.scrollIntoView({
                behavior: "smooth",
                block: "center",
            });
        });
    };

    return (
        <Button
            variant="ghost"
            className={cn(
                "group relative w-[38.75dvw] h-auto aspect-square md:w-[200px] p-0 grid grid-cols-1 grid-rows-[1fr_auto] bg-zinc-300 dark:bg-zinc-800 hover:bg-zinc-400 focus-visible:bg-zinc-400 dark:hover:bg-zinc-700 dark:focus-visible:bg-zinc-700 outline-zinc-400/0 dark:outline-zinc-700/0 outline-offset-4 md:outline-offset-8 outline-4 hover:outline-zinc-400 focus-visible:outline-zinc-400 dark:hover:outline-zinc-700 dark:focus-visible:outline-zinc-700 ring-0 focus-visible:ring-0",
                className,
                category === activationValue &&
                    "bg-red-600 dark:bg-red-600 outline-red-600 dark:outline-red-600 hover:bg-red-700 dark:hover:bg-red-700 hover:outline-red-700 dark:hover:outline-red-700"
            )}
            onClick={onClick}
            {...props}
        >
            {category === activationValue ? (
                <Image src={imgSrcInactive} alt={imgAltInactive} className="row-[1/2] object-contain p-2 md:p-4" priority fill />
            ) : (
                <Image
                    src={imgSrcActive}
                    alt={imgSrcInactive}
                    className="row-[1/2] object-contain p-2 md:p-4 group-hover:grayscale-100 group-hover:brightness-0 group-hover:invert group-focus-visible:grayscale-100 group-focus-visible:brightness-0 group-focus-visible:invert"
                    priority
                    fill
                />
            )}

            <span
                className={cn(
                    "row-[2/3] text-center uppercase font-bold md:text-xl px-4 p-2 md:p-4 text-wrap",
                    category === activationValue && "text-zinc-100"
                )}
            >
                {children}
            </span>
        </Button>
    );
};
