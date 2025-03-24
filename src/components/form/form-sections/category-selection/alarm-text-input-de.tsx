import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const AlarmTextInputDE = () => {
    return (
        <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="alarm-text-it" className="text-xs md:text-md">
                Alarmierungstext (DE)*
            </Label>
            <Input
                id="alarm-text-it"
                defaultValue="Rauchentwicklung aufgrund Brand"
                className="col-span-1 md:text-xl md:px-6 md:py-4 md:h-auto"
            />
        </div>
    );
};
