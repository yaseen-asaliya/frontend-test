import dayjs from 'dayjs';
import { TimePicker } from 'antd';
import { useEffect, useState } from 'react';
import { FormHelperText, InputLabel } from '@mui/material';
import style from '../Form.module.css';
import '../rangePicker.css';
import localization from "../../../../localizationConfig";
import { IField } from '../../../interfaces/fields/IField.interface';

export default function TimePickerRange({ field, showError }: { field: IField, showError: boolean }) {
    const { id, required, label } = field;
    const [valus, setValues] = useState<[dayjs.Dayjs, dayjs.Dayjs] | [null, null]>([null, null]);
    const [formattedTime, setFormattedTime] = useState<string>('');
    const [validationMessage, setValidationMessage] = useState('');

    const handleTimeChange = (value: any) => {
        let formattedTimeRange = `${dayjs(value[0]).format("hh:mm A")} - ${dayjs(value[1]).format("hh:mm A")}`;
        setFormattedTime(formattedTimeRange);
        setValues(value);
    };

    useEffect(() => {
        if (showError) {
            checkValidation()
        }
    }, [showError]);

    function onKeyDown(e: React.KeyboardEvent) {
        if (e.key === "Enter") {
            checkValidation();
        }
    }

    function checkValidation() {
        setValidationMessage('');
        if (required && formattedTime === '') {
            setValidationMessage(localization.mustFilledTheField);
        }
    }
    
    return (
        <>
            <InputLabel className='mb-2' id={`time-range-label-${id}`}>
                {required ? <span className="error">*</span> : ''} {label}
            </InputLabel>
            <TimePicker.RangePicker
                placeholder={[localization.from, localization.to]}
                className={`range-picker ${style.field} ${style.fieldHeight}`}
                format="hh:mm A"
                onChange={(val) => handleTimeChange(val)}
                value={valus}
                onKeyDown={onKeyDown}
                onBlur={checkValidation}
            />
            <FormHelperText className="error">{validationMessage}</FormHelperText>

        </>
    );
}
