import { AutoComplete } from "@/components/ui/autocomplete";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export const RolesSelection = () => {
    const [searchValue, setSearchValue] = useState<string>("Rolle 1");
    const [selectedValue, setSelectedValue] = useState<string>("item1");

    const items = [
        { value: "item1", label: "Rolle 1" },
        { value: "item2", label: "Rolle 2" },
        { value: "item3", label: "Rolle 3" },
        { value: "item4", label: "Rolle 4" },
        { value: "item5", label: "Rolle 5" },
    ];

    return (
        <div className="grid md:w-[200px] items-center gap-1.5">
            <Label htmlFor="roles-selection">Rollen:</Label>
            <AutoComplete
                selectedValue={selectedValue}
                onSelectedValueChange={setSelectedValue}
                searchValue={searchValue}
                onSearchValueChange={setSearchValue}
                items={items}
                emptyMessage="No items found."
                placeholder="Search items..."
                id="roles-selection"
                arrow
            />
        </div>
    );
};
