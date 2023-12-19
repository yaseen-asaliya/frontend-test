import FieldTypesDropdown from '../fieldTypesDropDown/FieldTypesDropdown.component';
import Options from '../options/Options.component';
import style from './Field.module.css';
import DeleteField from '../deleteField/DeleteField.component';
import RequiredSwitch from '../requiredSwitch/RequiredSwitch.component';
import { IField } from '../../../interfaces/fields/IField.interface'
import FieldLabel from '../fieldLabel/FieldLabel.component';
import { useDispatch, useSelector } from 'react-redux';
import localization from '../../../../localizationConfig';
import { updateFields } from '../../../redux/reducers/FieldReducer';
import { EMPTY_FEILD } from '@/utils/fields/FieldsUtlis';

export default function Field({ field }: { field: IField }) {
    const dispatch = useDispatch();
    const fields = useSelector((state: { fields: { fields: IField[] } }) => state.fields.fields);

    const deleteFields = () => {
        let updatedFields = fields.filter((f: IField) => f.id !== field.id);
        if (updatedFields.length === 0) {
            updatedFields = [EMPTY_FEILD]
        }
        dispatch(updateFields(updatedFields));
    };

    return (
        <div className={`${style.fieldBg} p-4`}>
            <div className='d-flex flex-row-reverse '>
                <FieldLabel field={field} />
                <FieldTypesDropdown field={field} />
                <DeleteField onClick={deleteFields} />
            </div>

            <RequiredSwitch field={field} />

            {(field.type === localization.MultipleSelectionMultiSelect
                || field.type === localization.MultipleSelectionSingleSelect
                || field.type === localization.dropDownList) && (
                    <Options fieldId={field.id} options={field.options} />
                )}
        </div>
    );
}

