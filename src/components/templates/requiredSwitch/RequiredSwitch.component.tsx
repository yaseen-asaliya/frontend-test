import { Switch } from '@mui/material'
import { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { IField } from '../../../interfaces/fields/IField.interface';
import localization from '../../../../localizationConfig';
import { updateFieldRequired } from '../../../redux/reducers/FieldReducer';

export default function RequiredSwitch({ field }: { field: IField }) {
    const dispatch = useDispatch();

    const handleRequiredChange = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(updateFieldRequired({ fieldId: field.id, newRequired: event.target.checked }));
    }

    return (
        <div className="ms-3 d-flex justify-content-end align-items-center">
            <span className='label'>{localization.necessary}</span>
            <Switch
                checked={field.required}
                onChange={handleRequiredChange}
            />
        </div>
    )
}
