import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const AlarmTextInputIT = () => {
    return (
        <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="alarm-text-it" className="text-xs md:text-md">
                Alarmierungstext (IT)*
            </Label>
            <Input
                id="alarm-text-it"
                defaultValue="Sviluppo di fumo a causa di uno incendio"
                className="col-span-1 md:text-xl md:px-6 md:py-4 md:h-auto"
            />
        </div>
    );
};
