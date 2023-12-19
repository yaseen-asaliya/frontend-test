import React, { useState } from 'react';
import { MenuItem, FormControl, Select, InputLabel } from '@mui/material';
import style from './FieldTypesDropdown.module.css';
import { IField } from '../../../interfaces/fields/IField.interface';
import { useDispatch } from 'react-redux';
import { groupTypes } from '../../../utils/fields/FieldsUtlis';
import { IFieldGroupType } from '../../../interfaces/fields/IFieldGroupType.interface';
import localization from '../../../../localizationConfig';
import { updateFieldType } from '../../../redux/reducers/FieldReducer';

export default function FieldOptionsTypesDropdown({ field }: { field: IField }) {
    const [value, setValue] = useState('');
    const [openMenu, setopenMenu] = useState<boolean>(false);
    const [categories, setCategories] = useState<IFieldGroupType[]>(groupTypes);
    const dispatch = useDispatch();
    const CATEGORY = "category";

    const handleClick = (selectedValue: string) => {
        setValue(selectedValue);
        dispatch(updateFieldType({ fieldId: field.id, newType: selectedValue }));
    };

    const handleExpandToggle = (index: number) => {
        setCategories((prevCategories) => {
            const newCategories = [...prevCategories];
            newCategories[index] = {
                ...newCategories[index],
                expand: !newCategories[index].expand,
            };

            return newCategories;
        });
        setopenMenu(false);
    };

    const handleClose = (event: React.MouseEvent<HTMLElement>) => {
        if ((event.target as HTMLElement).getAttribute('itemType') === CATEGORY) {
            setopenMenu(true);
            return;
        }
        setopenMenu(!openMenu);
    };

    const listItems = categories.flatMap((option: any, index: number) => ([
        <MenuItem itemType={CATEGORY} key={index} className={`${style.dropDownOptions} py-3 justify-content-end position-related label`} onClick={() => handleExpandToggle(index)}>
            <i itemType={CATEGORY} className={`position-absolute ${style.icon} fa-solid ${option.expand ? 'fa-chevron-up' : 'fa-chevron-down'}`} />
            {option.name}
        </MenuItem>,
        option.options.map((opt: string, i: number) => (
            <MenuItem
                key={`${index}-${i}`}
                className={`justify-content-end label py-3 ${style.dropDownOptions} ${!option.expand ? 'visually-hidden' : ''}`}
                value={opt}
                onClick={() => handleClick(opt)}
            >
                {opt}
            </MenuItem>
        ))
    ]));

    return (
        <>
            <FormControl className={style.typeDropdown}>
            {value === '' && (<InputLabel className={style.label} shrink={false}>{localization.element}</InputLabel>)}
            <Select
                open={openMenu}
                className={`${style.dropDown} label`}
                onClick={handleClose}
                value={value}
            >
                {listItems}
            </Select>
        </FormControl>
        </>

    );
}
