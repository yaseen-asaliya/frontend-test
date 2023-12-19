import { IField } from "@/interfaces/fields/IField.interface";
import localization from "../../../localizationConfig";
import { IFieldGroupType } from "../../interfaces/fields/IFieldGroupType.interface";

export const groupTypes : IFieldGroupType[] = [
    { name: localization.texts, expand: false, options: [localization.shortText, localization.LongText, localization.phoneNumber, localization.email] },
    { name: localization.listsAndChoices, expand: false, options: [localization.MultipleSelectionMultiSelect, localization.MultipleSelectionSingleSelect, localization.dropDownList] },
    { name: localization.dataAndTime, expand: false, options: [localization.date, localization.time, localization.DateTimeRangeDates, localization.DateTimeRangeHours] },
    { name: localization.fields, expand: false, options: [localization.fields] }
]

export const EMPTY_FEILD: IField = {
    id: 1,
    type: "",
    required: false,
    label: "",
    options: [""]
}