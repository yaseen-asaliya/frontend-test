import React, { useEffect, useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import style from '../Form.module.css';
import { FormHelperText, InputLabel } from '@mui/material';
import { IField } from '../../../interfaces/fields/IField.interface.ts';
import localization from "../../../../localizationConfig";

export default function DropDown({ field, showError }: { field: IField, showError: boolean }) {
  const { id, required, label, options } = field;
  const [value, setValue] = React.useState('');
  const [validationMessage, setValidationMessage] = useState('');

  useEffect(() => {
    if (showError) {
      checkValidation()
    }
  }, [showError]);

  function checkValidation() {
    setValidationMessage('');
    if (required && value === '') {
      setValidationMessage(localization.mustFilledTheField);
    }
  }
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setValue(event.target.value as string);
    setValidationMessage('');
  };

  const listItems = options?.map((option: string, index: number) => (
    <MenuItem className="justify-content-end" key={index} value={option}>
      {option}
    </MenuItem>
  ));

  return (
    <>
      <InputLabel className='mb-2' id={`date-picker-label-${id}`}>
        {required ? <span className="error">*</span> : ''} {label}
      </InputLabel>
      <TextField
        id="outlined-select-gender"
        select
        label={value === '' ? label : ''}
        className={`${style.textField} ${style.field}`}
        value={value}
        onChange={handleChange}
        onBlur={checkValidation}
        InputLabelProps={{
          shrink: false,
        }}
        variant="outlined"
      >
        {listItems}
      </TextField>
      <FormHelperText className="error">{validationMessage}</FormHelperText>

    </>

  );
}
