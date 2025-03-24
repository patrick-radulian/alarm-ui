import { useFormContext } from "@/components/form/form-context";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const AlarmTextInputIT = () => {
    const { category, categoryTexts } = useFormContext();

    return (
        <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="alarm-text-it" className="text-xs md:text-md">
                Alarmierungstext (IT)*
            </Label>
            <Input
                id="alarm-text-it"
                defaultValue={categoryTexts[category!].alarmText.it}
                key={category}
                className="col-span-1 md:text-xl md:px-6 md:py-4 md:h-auto"
            />
        </div>
    );
};
