import { AutoComplete } from "@/components/ui/autocomplete";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export const OperationSelection = () => {
    const [searchValue, setSearchValue] = useState<string>("Regelintervall");
    const [selectedValue, setSelectedValue] = useState<string>("item1");

    const items = [
        { value: "item1", label: "Regelintervall" },
        { value: "item2", label: "Tagesintervall" },
        { value: "item3", label: "Wochenintervall" },
        { value: "item4", label: "Monatsintervall" },
        { value: "item5", label: "Jahresintervall" },
    ];

    return (
        <div className="md:w-[200px] grid items-center gap-1.5">
            <Label htmlFor="operation-selection">Alarmierungsperimeter*:</Label>
            <AutoComplete
                selectedValue={selectedValue}
                onSelectedValueChange={setSelectedValue}
                searchValue={searchValue}
                onSearchValueChange={setSearchValue}
                items={items}
                emptyMessage="No items found."
                placeholder="Search items..."
                id="operation-selection"
                arrow
            />
        </div>
    );
};
