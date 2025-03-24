import { useFormContext } from "@/components/form/form-context";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const ActionInputIT = () => {
    const { category, categoryTexts } = useFormContext();

    return (
        <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="action-input-it" className="text-xs md:text-md">
                Handlungsanweisung (IT)*
            </Label>
            <Input
                id="action-input-it"
                defaultValue={categoryTexts[category!].actionText.it}
                key={category}
                className="col-span-1 md:text-xl md:px-6 md:py-4 md:h-auto"
            />
        </div>
    );
};
