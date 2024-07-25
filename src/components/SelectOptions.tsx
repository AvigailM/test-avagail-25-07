import React from "react";
import { OptionsType } from "../utils/types";

type SelectOptionsProps = {
    option: OptionsType;
    selectedOptions: OptionsType[];
    textSelectUnselect: string;
    isMulti: boolean
    handleChangeOption: (option: OptionsType) => void;
};

const SelectOptions: React.FC<SelectOptionsProps> = ({ option, selectedOptions, handleChangeOption, isMulti }) => {
    return isMulti ?
        (<li
            key={option.id}
            className={`option ${selectedOptions.includes(option) ? "selected" : ""}`}
        >
            <label className="list-label">
                <input
                    type="checkbox"
                    checked={selectedOptions.includes(option)}
                    onChange={() => handleChangeOption(option)}
                />
                <div className="label-option">{option.label}</div>
            </label>
        </li>)
        :
        (<li
            key={option.id}
            className={`option ${selectedOptions.includes(option) ? "selected" : ""}`}
            onClick={() => handleChangeOption(option)}
        >
            <label className="list-label">
                <div className="label-option">{option.label}</div>
            </label>
        </li>)
};

export default SelectOptions;
