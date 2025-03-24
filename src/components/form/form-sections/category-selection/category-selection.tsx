import Fire_red from "public/Fire_red.svg";
import Fire_white from "public/Fire_white.svg";
import Collapse_red from "public/Collapse_red.svg";
import Collapse_white from "public/Collapse_white.svg";
import Flood_red from "public/Flood_red.svg";
import Flood_white from "public/Flood_white.svg";
import { useFormContext } from "@/components/form/form-context";
import { CategoryButton } from "@/components/form/category-button";
import { AlarmTextInputDE } from "@/components/form/form-sections/category-selection/alarm-text-input-de";
import { AlarmTextInputIT } from "@/components/form/form-sections/category-selection/alarm-text-input.it";
import { ActionInputDE } from "@/components/form/form-sections/category-selection/action-input-de";
import { ActionInputIT } from "@/components/form/form-sections/category-selection/action-input.it";

export const CategorySelection = () => {
    const { category } = useFormContext();

    return (
        <div
            id="category-selection"
            className="grid grid-cols-1 justify-center animate-in [--tw-enter-translate-y:10%] duration-250 fade-in-0"
        >
            <h1 className="text-zinc-800 px-2 dark:text-zinc-300 text-center mt-8 mb-2 md:mb-6 text-2xl font-bold">2. Kategorie wählen:</h1>

            <div className="flex px-[6dvw] py-2 mb-2 max-w-dvw space-x-[5dvw] overflow-auto md:overflow-visible md:px-[25px] md:gap-[50px] md:mb-6 md:py-3 md:space-x-0 md:justify-center">
                <CategoryButton
                    activationValue="fire"
                    imgSrcActive={Fire_red}
                    imgSrcInactive={Fire_white}
                    imgAltActive="Feuer / Rauchentwicklung"
                    imgAltInactive="Feuer / Rauchentwicklung"
                >
                    Rauchentwicklung
                </CategoryButton>
                <CategoryButton
                    activationValue="collapse"
                    imgSrcActive={Collapse_red}
                    imgSrcInactive={Collapse_white}
                    imgAltActive="Einsturz"
                    imgAltInactive="Einsturz"
                >
                    Einsturz
                </CategoryButton>
                <CategoryButton
                    activationValue="flood"
                    imgSrcActive={Flood_red}
                    imgSrcInactive={Flood_white}
                    imgAltActive="Wassereinbruch"
                    imgAltInactive="Wassereinbruch"
                >
                    Wassereinbruch
                </CategoryButton>
            </div>

            {category ? (
                <div className="animate-in [--tw-enter-translate-y:10%] duration-250 fade-in-0">
                    <h3 className="text-zinc-800 px-2 dark:text-zinc-300 text-center mb-2 md:mb-4 text-md font-semibold">
                        Optional ändern:
                    </h3>
                    <div className="relative px-[6dvw] py-2 space-y-4 md:px-[50px] md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-[25px] md:gap-y-[12px] md:items-center md:justify-center md:space-x-0">
                        <AlarmTextInputDE />
                        <AlarmTextInputIT />
                        <ActionInputDE />
                        <ActionInputIT />
                    </div>
                </div>
            ) : null}
        </div>
    );
};
