import { useEffect, useState } from 'react';
import { FormControlLabel, FormHelperText, InputLabel, Radio, RadioGroup } from '@mui/material';
import { FormControl } from '@mui/base';
import style from '../Form.module.css';
import localization from "../../../../localizationConfig";
import { IField } from '../../../interfaces/fields/IField.interface';

export default function RadioButtons({ field, showError }: { field: IField, showError: boolean }) {
  const { id, required, label, options } = field;
  const [radioValue, setRadioValue] = useState('');
  const [validationMessage, setValidationMessage] = useState('');

  useEffect(() => {
    if (showError) {
      checkValidation()
    }
  }, [showError]);

  function checkValidation() {
    setValidationMessage('');
    if (required && radioValue === "") {
      setValidationMessage(localization.mustFilledTheField);
    }
  }

  function handleClick(newValue: string) {
    if (newValue === radioValue) {
      setRadioValue("");
      if (required) {
        setValidationMessage(localization.mustFilledTheField)
      }
    } else {
      setRadioValue(newValue);
      setValidationMessage('');
    }
  }

  const radioOptions = options?.map((option: string, index: number) => (
    <FormControlLabel
      className={style.options}
      key={index}
      value={option}
      control={<Radio />}
      label={option}
      onClick={() => handleClick(option)}
    />
  ));

  return (
    <>
      <FormControl>
        <InputLabel id={`radio-button-label-${id}`}>
          {required ? <span className="error">*</span> : ''} {label}
        </InputLabel>
        <RadioGroup
          name={`buttons-group-${id}`}
          aria-labelledby={`radio-button-label-${id}`}
          value={radioValue}
        >
          {radioOptions}
        </RadioGroup>
        <FormHelperText className='error'>{validationMessage}</FormHelperText>
      </FormControl>
    </>
  );
}
