import React, { useState, useEffect, useRef } from "react";
import { selectText, textSelectUnselect } from '../utils/const';
import { OptionsType } from '../utils/types';
import { convertArrayToString } from "../utils/helper";
import SelectOptions from './SelectOptions';
import SelectAndUnSelectOption from "./SelectAndUnSelectOption";

type SelectWithFilterProps = {
    isMulti?: boolean
    options: OptionsType[];
    handleChange: (data: string) => void;
    placeholderSearch: string
};

const SelectWithFilter = ({ options, handleChange, placeholderSearch, isMulti = false }: SelectWithFilterProps) => {
    const [selectedOptions, setSelectedOptions] = useState<OptionsType[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        if (selectedOptions.length > 0) {
            handleChange(convertArrayToString(selectedOptions))
        }
        else {
            handleChange('')
        }
    }, [selectedOptions])

    const handleToggle = () => setIsOpen(!isOpen);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !(dropdownRef.current.contains(event.target as Node))) {
            setIsOpen(false);
        }
    };

    const filteredOptions = options.filter(option =>
        option.label.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleChangeOption = (option: OptionsType) => {
        setSelectedOptions((prevSelected: OptionsType[]) => {
            const returnValue = isMulti ? [...prevSelected, option] : [option]
            return prevSelected.includes(option)
                ? prevSelected.filter(item => item !== option)
                : returnValue
        });
    };

    const handleSelectAll = () => {
        const allSelected = selectedOptions.length === filteredOptions.length;
        if (allSelected) {
            setSelectedOptions([]);
        } else {
            setSelectedOptions(filteredOptions.slice());
        }
    };

    const selectedTextDisplay = () => {
        if (selectedOptions && selectedOptions.length > 0) {
            return convertArrayToString(selectedOptions)
        }
        return selectText
    }

    return (
        <div ref={dropdownRef} key="dropdown">
            <div className="dropdown">
                <div className="dropdown-header" onClick={handleToggle}>
                    {selectedTextDisplay()}
                    <span className="arrow">{isOpen ? "▲" : "▼"}</span>
                </div>
                {isOpen && (
                    <div className="dropdown-menu">
                        <input
                            type="text"
                            placeholder={placeholderSearch}
                            value={searchTerm}
                            onChange={handleSearchChange}
                            className="search-input"
                        />
                        <ul className="options">
                            {isMulti && filteredOptions.length > 0 && <SelectAndUnSelectOption
                                selectedOptions={selectedOptions}
                                filteredOptions={filteredOptions}
                                textSelectUnselect={textSelectUnselect}
                                handleSelectAll={handleSelectAll}
                            />}
                            {filteredOptions.map(option => {
                                return <SelectOptions
                                    option={option}
                                    selectedOptions={selectedOptions}
                                    textSelectUnselect={textSelectUnselect}
                                    isMulti={isMulti}
                                    handleChangeOption={handleChangeOption}
                                />
                            })}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SelectWithFilter;
