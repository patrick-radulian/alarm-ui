import { Button } from "@/components/ui/button";
import { intlFormat } from "date-fns";
import { toast } from "@/components/ui/toast";

export const SubmitButton = () => {
    const onClick = () => {
        const now = intlFormat(
            new Date(),
            {
                day: "2-digit",
                month: "long",
                year: "numeric",
                weekday: "long",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
            },
            {
                locale: "de",
            }
        );

        toast.success({
            title: "Alarm erfolgreich abgeschickt!",
            description: `${now} Uhr`,
            duration: 500000,
            button: {
                label: "Okay",
                onClick: () => void 0,
            },
        });
    };

    return (
        <div
            id="submit-button"
            className="grid justify-center animate-in [--tw-enter-translate-y:10%] duration-250 fade-in-0 mt-14 md:mt-20"
        >
            <Button
                className="uppercase outline-offset-4 md:outline-offset-8 outline-4 text-zinc-50 text-2xl md:text-3xl rounded-md w-[85dvw] md:w-auto py-4 h-auto px-8 bg-red-600 hover:bg-red-700 focus-visible:bg-red-700 active:bg-red-800 ring-0 focus-visible:ring-0 outline-red-700/0 hover:outline-red-700 focus-visible:outline-red-700 active:outline-red-800"
                onClick={onClick}
            >
                Alarm abschicken
            </Button>
        </div>
    );
};
