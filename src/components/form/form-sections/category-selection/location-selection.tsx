import { AutoComplete } from "@/components/ui/autocomplete";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export const LocationSelection = () => {
    const [searchValue, setSearchValue] = useState<string>("Arbeitsstelle 1");
    const [selectedValue, setSelectedValue] = useState<string>("item1");

    const items = [
        { value: "item1", label: "Arbeitsstelle 1" },
        { value: "item2", label: "Arbeitsstelle 2" },
        { value: "item3", label: "Arbeitsstelle 3" },
        { value: "item4", label: "Arbeitsstelle 4" },
        { value: "item5", label: "Arbeitsstelle 5" },
    ];

    return (
        <div className="grid md:w-[200px] items-center gap-1.5">
            <Label htmlFor="location-selection">Arbeitsstellen:</Label>
            <AutoComplete
                selectedValue={selectedValue}
                onSelectedValueChange={setSelectedValue}
                searchValue={searchValue}
                onSearchValueChange={setSearchValue}
                items={items}
                emptyMessage="No items found."
                placeholder="Search items..."
                id="location-selection"
                arrow
            />
        </div>
    );
};
