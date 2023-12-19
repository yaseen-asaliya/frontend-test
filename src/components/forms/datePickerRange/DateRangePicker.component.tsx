import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { FormHelperText, InputLabel } from '@mui/material';
import { DatePicker } from 'antd';
import style from '../Form.module.css'
import '../rangePicker.css'
import localization from "../../../../localizationConfig";
import { IField } from '../../../interfaces/fields/IField.interface';

const { RangePicker } = DatePicker;

export default function DatePickerRange({ field, showError }: { field: IField, showError: boolean }) {
    const { id, required, label } = field;
    const [dateValue, setDateValue] = useState<[dayjs.Dayjs | null, dayjs.Dayjs | null]>([null, null]);
    const [formattedDate, setFormattedDate] = useState<string>('');
    const [validationMessage, setValidationMessage] = useState('');

    const handleDateChange = (value: any) => {
        let formattedDateRange = value[0] && value[1]
            ? `${dayjs(value[0]).format("MMM DD, YYYY")} - ${dayjs(value[1]).format("MMM DD, YYYY")}`
            : '';
        setFormattedDate(formattedDateRange)
        setDateValue(value);
    };

    useEffect(() => {
        if (showError) {
            checkValidation()
        }
    }, [showError]);

    function checkValidation() {
        setValidationMessage('');
        if (required && formattedDate === '') {
            setValidationMessage(localization.mustFilledTheField);
        }
    }

    function onKeyDown(e: React.KeyboardEvent) {
        if (e.key === "Enter") {
            checkValidation();
        }
    }

    return (
        <>
            <InputLabel className='mb-2' id={`date-range-label-${id}`}>
                {required ? <span className="error">*</span> : ''} {label}
            </InputLabel>
            <RangePicker
                placeholder={["من", "إِلى"]}
                className={`range-picker ${style.field} ${style.fieldHeight}`}
                onChange={(val) => handleDateChange(val)}
                value={dateValue}
                onKeyDown={onKeyDown}
                onBlur={checkValidation}
            />
            <FormHelperText className="error">{validationMessage}</FormHelperText>
        </>
    );
}
