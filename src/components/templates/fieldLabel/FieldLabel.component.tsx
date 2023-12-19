import { TextField } from '@mui/material'
import { ChangeEvent } from 'react'
import { useDispatch } from 'react-redux';
import { IField } from '../../../interfaces/fields/IField.interface';
import localization from '../../../../localizationConfig';
import { updateFieldLabel } from '../../../redux/reducers/FieldReducer';
import style from './FieldLabel.module.css'

export default function FieldLabel({ field }: { field: IField }) {
    const dispatch = useDispatch();

    const handleLabelChange = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(updateFieldLabel({ fieldId: field.id, newLabel: event.target.value }));
    }

    return (
        <TextField
            placeholder={localization.labelText}
            type="text"
            variant="outlined"
            className={`${style.field} ms-4 mb-3`}
            value={field.label}
            onChange={handleLabelChange}
        />
    )
}
