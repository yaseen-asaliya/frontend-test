import { useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { FormHelperText, InputLabel } from '@mui/material';
import { Dayjs } from 'dayjs';
import style from '../Form.module.css'
import localization from "../../../../localizationConfig";
import { IField } from '../../../interfaces/fields/IField.interface';

export default function TimePickerField({ field, showError }: { field: IField, showError: boolean }) {
  const { id, required, label } = field;
  const [timeValue, setTimeValue] = useState<Dayjs | null>(null);
  const [formattedTimeValue, setFormattedTimeValue] = useState<string>('');


  const handleDateChange = (newValue: Dayjs | null) => {
    setTimeValue(newValue);
    const parsedTime = newValue ? newValue.format('hh:mm A') : '';
    setFormattedTimeValue(parsedTime);
  };

  let FieldRequired = showError && formattedTimeValue === '';

  return (
    <>
      <InputLabel className='mb-2' id={`time-picker-label-${id}`}>
        {required ? <span className="error">*</span> : ''} {label}
      </InputLabel>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <TimePicker
          className={style.field}
          value={timeValue}
          onChange={(newValue) => handleDateChange(newValue)}
        />
      </LocalizationProvider>
      <FormHelperText className='error'>{FieldRequired ? localization.mustFilledTheField : ''}</FormHelperText>

    </>
  );
}

