import React from "react";
import { OptionsType } from "../utils/types";

type SelectAndUnSelectOptionProps = {
    selectedOptions: OptionsType[];
    filteredOptions: OptionsType[];
    textSelectUnselect: string;
    handleSelectAll: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const SelectAndUnSelectOption: React.FC<SelectAndUnSelectOptionProps> = ({ selectedOptions, filteredOptions, handleSelectAll, textSelectUnselect }) => {
    return (
        <li className="option" key="textSelectUnselect">
            <label className="list-label">
                <input
                    type="checkbox"
                    checked={selectedOptions.length === filteredOptions.length}
                    onChange={handleSelectAll}
                />
                <div className="label-option">{textSelectUnselect}</div>
            </label>
        </li>
    );
};

export default SelectAndUnSelectOption;
