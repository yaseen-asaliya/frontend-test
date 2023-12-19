import { useEffect, useState } from "react";
import { Checkbox, FormControlLabel, FormGroup, FormHelperText, InputLabel } from "@mui/material";
import style from '../Form.module.css'
import localization from "../../../../localizationConfig";
import { IField } from "../../../interfaces/fields/IField.interface.ts";

export default function CheckBox({ field, showError }: { field: IField, showError: boolean }) {
  const { id, required, options, label } = field;
  const [checkedOptions, setCheckedOptions] = useState<string[]>([]);
  const [validationMessage, setValidationMessage] = useState('');

  const handleCheckboxChange = (optionValue: string) => {
    const updatedCheckedOptions = checkedOptions.includes(optionValue)
      ? checkedOptions.filter((option) => option !== optionValue)
      : [...checkedOptions, optionValue];
      
      updatedCheckedOptions.length === 0 ? setValidationMessage(localization.mustFilledTheField) : setValidationMessage('');

    setCheckedOptions(updatedCheckedOptions);
  };

  useEffect(() => {
    if (showError) {
      checkValidation()
    }
  }, [showError]);

  function checkValidation() {
    setValidationMessage('');
    if (required && checkedOptions.length === 0) {
      setValidationMessage(localization.mustFilledTheField);
    }
  }

  return (
    <>
      <FormGroup>
        <InputLabel id={`checkbox-label-${id}`}>
          {required ? <span className="error">*</span> : ''} {label}
        </InputLabel>
        {options?.map((option: string, index: number) => (
          <FormControlLabel
            aria-labelledby={`checkbox-label-${id}`}
            className={style.options}
            key={index}
            label={option}
            onChange={() => handleCheckboxChange(option)}
            checked={checkedOptions.includes(option)}
            control={<Checkbox  />}
          />
        ))}
      </FormGroup>
      <FormHelperText className="error">{validationMessage}</FormHelperText>
    </>
  );
}
