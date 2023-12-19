import { useState } from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Dayjs } from 'dayjs';
import { FormHelperText, InputLabel } from '@mui/material';
import style from '../Form.module.css'
import localization from "../../../../localizationConfig";
import { IField } from '../../../interfaces/fields/IField.interface';

export default function DatePickerField({ field, showError }: { field: IField, showError: boolean }) {
  const { id, required, label } = field;
  const [dateValue, setDateValue] = useState<Dayjs | null>(null);
  const [formatedDateValue, setFormatedDateValue] = useState<string>('');

  const handleDateChange = (newValue: Dayjs | null) => {
    setDateValue(newValue);
    const parsedDate = newValue ? newValue.format("DD-MM-YYYY") : '';
    setFormatedDateValue(parsedDate);
  };

  let FieldRequired = showError && formatedDateValue === '';

  return (
    <>
      <InputLabel className='mb-2' id={`date-picker-label-${id}`}>
        {required ? <span className="error">*</span> : ''} {label}
      </InputLabel>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          className={style.field}
          value={dateValue}
          onChange={(newValue) => handleDateChange(newValue)}
        />
      </LocalizationProvider>
      <FormHelperText className='error'>{FieldRequired ? localization.mustFilledTheField : ''}</FormHelperText>
    </>
  );
}

