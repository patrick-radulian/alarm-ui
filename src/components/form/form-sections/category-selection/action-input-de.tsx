import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const ActionInputDE = () => {
    return (
        <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="action-input-de" className="text-xs md:text-md">
                Handlungsanweisung (DE)*
            </Label>
            <Input
                id="action-input-de"
                defaultValue="Selbstrettung mit Atemschutzgerät; Räumung des Arbeitsbereichs"
                className="col-span-1 md:text-xl md:px-6 md:py-4 md:h-auto"
            />
        </div>
    );
};
