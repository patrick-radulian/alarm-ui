import { Button } from "@/components/ui/button";
import { intlFormat } from "date-fns";
import { toast } from "@/components/ui/toast";
import { useFormContext } from "@/components/form/form-context";

export const ResetButton = () => {
    const { setPerimeter, setCategory } = useFormContext();

    const onClick = () => {
        setPerimeter(null);
        setCategory(null);
    };

    return (
        <div id="submit-button" className="grid justify-center animate-in [--tw-enter-translate-y:10%] duration-250 fade-in-0 mt-8">
            <Button
                className="uppercase outline-offset-4 md:outline-offset-8 outline-4 text-zinc-50 text-lg rounded-md w-[85dvw] md:w-auto py-2 h-auto px-8 bg-zinc-600 hover:bg-zinc-700 focus-visible:bg-zinc-700 active:bg-zinc-800 ring-0 focus-visible:ring-0 outline-red-700/0 hover:outline-zinc-700 focus-visible:outline-zinc-700 active:outline-zinc-800"
                onClick={onClick}
            >
                Reset
            </Button>
        </div>
    );
};
