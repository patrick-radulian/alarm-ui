import GBT_red from "public/GBT_red.svg";
import GBT_white from "public/GBT_white.svg";
import CBT_red from "public/CBT_red.svg";
import CBT_white from "public/CBT_white.svg";
import { useFormContext } from "@/components/form/form-context";
import { PerimeterButton } from "@/components/form/perimeter-button";

export const PerimeterSelection = () => {
    const { perimeter, setPerimeter } = useFormContext();

    return (
        <div
            id="perimeter-selection"
            className="grid grid-cols-1 justify-center animate-in [--tw-enter-translate-y:10%] duration-250 fade-in-0"
        >
            <h1 className="text-zinc-800 px-2 dark:text-zinc-300 text-center mt-8 mb-2 md:mb-8 text-2xl font-semibold">
                1. Alarmierungsperimeter wählen:
            </h1>

            <div className="flex md:gap-12 items-center px-[6dvw] py-2 space-x-[6dvw] justify-center">
                <PerimeterButton
                    activationValue="GBT"
                    imgSrcActive={GBT_red}
                    imgSrcInactive={GBT_white}
                    imgAltActive="Gotthard Basis Tunnel"
                    imgAltInactive="Gotthard Basis Tunnel"
                >
                    Gotthard
                    <br />
                    Basis Tunnel
                </PerimeterButton>
                <PerimeterButton
                    activationValue="CBT"
                    imgSrcActive={CBT_red}
                    imgSrcInactive={CBT_white}
                    imgAltActive="Ceneri Basis Tunnel"
                    imgAltInactive="Ceneri Basis Tunnel"
                >
                    Ceneri
                    <br />
                    Basis Tunnel
                </PerimeterButton>
            </div>
        </div>
    );
};
