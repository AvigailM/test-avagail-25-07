import { OptionsType } from "./types"

export const convertArrayToString = (arrayList: OptionsType[]) => {
    return arrayList.map(( option : OptionsType) => option.label).join(", ")
}