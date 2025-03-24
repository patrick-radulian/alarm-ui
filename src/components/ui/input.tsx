import * as React from "react";

import { cn } from "@/lib/utils";
import { ChevronDownIcon } from "lucide-react";

type InputProps = React.ComponentProps<"input"> & {
    arrow?: boolean;
};

function Input({ id, className, type, onMouseDown, onFocus, ref, arrow, ...props }: InputProps) {
    return (
        <div
            className={cn(
                "relative flex items-center justify-between dark:bg-input/30 border-input rounded-md border focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] bg-white px-4 py-1 md:px-2 md:py-0 shadow-xs transition-[color,box-shadow]",
                className,
                arrow && "pr-2 md:pr-4"
            )}
            onMouseDown={onMouseDown}
            onFocus={onFocus}
            ref={ref}
        >
            <input
                id={id}
                type={type}
                data-slot="input"
                className={cn(
                    "file:text-foreground placeholder:text-muted-foreground selection:bg-primary p-0 md:p-0! selection:text-primary-foreground flex h-9 w-full min-w-0 text-base outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-xl text-ellipsis",
                    "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
                )}
                {...props}
            />
            {arrow ? <ChevronDownIcon className="shrink-0" /> : null}
        </div>
    );
}

export { Input };
