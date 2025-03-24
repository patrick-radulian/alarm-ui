import { Command, CommandEmpty, CommandGroup, CommandItem, CommandList } from "@/components/ui/command";
import { Input } from "@/components/ui/input";
import { Popover, PopoverAnchor, PopoverContent } from "@/components/ui/popover";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { Command as CommandPrimitive } from "cmdk";
import { Check, ChevronDownIcon } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { v4 as uuid4 } from "uuid";

type Props<T extends string> = {
    selectedValue: T;
    onSelectedValueChange: (value: T) => void;
    searchValue: string;
    onSearchValueChange: (value: string) => void;
    items: { value: T; label: string }[];
    isLoading?: boolean;
    emptyMessage?: string;
    placeholder?: string;
    arrow?: boolean;
    id?: string;
};

export function AutoComplete<T extends string>({
    onSelectedValueChange,
    searchValue,
    onSearchValueChange,
    items,
    isLoading,
    emptyMessage = "No items.",
    placeholder = "Search...",
    arrow,
    id,
}: Props<T>) {
    const [open, setOpen] = useState(false);
    const uuid = useRef<string>(id ?? "");

    const labels = useMemo(
        () =>
            items.reduce((acc, item) => {
                acc[item.value] = item.label;
                return acc;
            }, {} as Record<string, string>),
        [items]
    );

    const onSelectItem = (inputValue: string) => {
        onSelectedValueChange(inputValue as T);
        onSearchValueChange(labels[inputValue] ?? "");
        setOpen(false);
    };

    const onOpenChange = (open: boolean) => {
        if (open) {
            if (items.find(item => item.label === searchValue)) {
                onSelectedValueChange(searchValue as T);
            }
        }
        setOpen(open);
    };

    useEffect(() => {
        if (uuid.current) return;
        uuid.current = `AC-${uuid4()}`;
    }, []);

    return (
        <div className="flex items-center md:w-full" id={uuid.current}>
            <Popover open={open} onOpenChange={onOpenChange}>
                <Command shouldFilter={false}>
                    <PopoverAnchor asChild className="md:text-xl md:px-6 md:py-4 md:h-auto">
                        <CommandPrimitive.Input
                            asChild
                            value={searchValue}
                            onValueChange={onSearchValueChange}
                            onKeyDown={e => onOpenChange(e.key === "ArrowDown" || e.key === "ArrowUp")}
                        >
                            <Input
                                placeholder={placeholder}
                                onMouseDown={() => onOpenChange(!!searchValue || !open)}
                                onFocus={() => onOpenChange(true)}
                                arrow
                            />
                        </CommandPrimitive.Input>
                    </PopoverAnchor>
                    {!open && <CommandList aria-hidden="true" className="hidden" />}
                    <PopoverContent
                        asChild
                        onOpenAutoFocus={e => e.preventDefault()}
                        onInteractOutside={e => {
                            if ((e.target as HTMLElement).closest(`#${uuid.current}`) !== null) {
                                e.preventDefault();
                            }
                        }}
                        className="md:w-full p-0"
                    >
                        <CommandList>
                            {isLoading && (
                                <CommandPrimitive.Loading>
                                    <div className="p-1">
                                        <Skeleton className="h-6 w-full" />
                                    </div>
                                </CommandPrimitive.Loading>
                            )}
                            {items.length > 0 && !isLoading ? (
                                <CommandGroup>
                                    {items.map(option => (
                                        <CommandItem
                                            key={option.value}
                                            value={option.value}
                                            onMouseDown={e => e.preventDefault()}
                                            onSelect={onSelectItem}
                                            className="md:text-xl"
                                        >
                                            <Check
                                                className={cn("mr-2 h-4 w-4", searchValue === option.label ? "opacity-100" : "opacity-0")}
                                            />
                                            {option.label}
                                        </CommandItem>
                                    ))}
                                </CommandGroup>
                            ) : null}
                            {!isLoading ? <CommandEmpty>{emptyMessage ?? "No items."}</CommandEmpty> : null}
                        </CommandList>
                    </PopoverContent>
                </Command>
            </Popover>
        </div>
    );
}
