import { useFormContext } from "@/components/form/form-context";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import Image from "next/image";

type FormButtonProps = {
    activationValue: "GBT" | "CBT";
    imgSrcActive: string;
    imgSrcInactive: string;
    imgAltActive: string;
    imgAltInactive: string;
    children: React.ReactNode;
    className?: string;
};

export const PerimeterButton = ({
    activationValue,
    imgSrcActive,
    imgSrcInactive,
    imgAltActive,
    imgAltInactive,
    children,
    className,
    ...props
}: FormButtonProps) => {
    const { perimeter, setPerimeter } = useFormContext();

    return (
        <Button
            variant="ghost"
            className={cn(
                "group relative h-[200px] w-[200px] p-0 grid grid-cols-1 grid-rows-[1fr_auto] bg-zinc-300 dark:bg-zinc-800 hover:bg-zinc-400 focus-visible:bg-zinc-400 dark:hover:bg-zinc-700 dark:focus-visible:bg-zinc-700 outline-zinc-400/0 dark:outline-zinc-700/0 outline-offset-8 outline-4 hover:outline-zinc-400 focus-visible:outline-zinc-400 dark:hover:outline-zinc-700 dark:focus-visible:outline-zinc-700 ring-0 focus-visible:ring-0",
                className,
                perimeter === activationValue &&
                    "bg-red-600 dark:bg-red-600 outline-red-600 dark:outline-red-600 hover:bg-red-700 dark:hover:bg-red-700 hover:outline-red-700 dark:hover:outline-red-700"
            )}
            onClick={() => setPerimeter(activationValue)}
            {...props}
        >
            {perimeter === activationValue ? (
                <Image src={imgSrcInactive} alt={imgAltInactive} className="row-[1/2] object-contain p-4" priority fill />
            ) : (
                <Image
                    src={imgSrcActive}
                    alt={imgSrcInactive}
                    className="row-[1/2] object-contain p-4 group-hover:grayscale-100 group-hover:brightness-0 group-hover:invert group-focus-visible:grayscale-100 group-focus-visible:brightness-0 group-focus-visible:invert"
                    priority
                    fill
                />
            )}

            <span
                className={cn(
                    "row-[2/3] text-center uppercase font-bold text-xl px-4 pb-4 text-wrap",
                    perimeter === activationValue && "text-zinc-100"
                )}
            >
                {children}
            </span>
        </Button>
    );
};
