import React, { useEffect, useState } from "react";
import TextField from '@mui/material/TextField/TextField';
import { FormHelperText, InputLabel } from "@mui/material";
import style from '../Form.module.css';
import localization from "../../../../localizationConfig";
import { IField } from "../../../interfaces/fields/IField.interface";

export default function TextInputField({ field, showError, multiline, rows, email }: { field: IField, showError: boolean, multiline?: boolean, rows?: number, email?: boolean }) {
  const { id, required, label } = field;
  const [textValue, setTextValue] = useState('');
  const [validationMessage, setValidationMessage] = useState('');

  useEffect(() => {
    if (showError) {
      checkValidation();
    }
  }, [showError]);

  function handleUpdate(e: React.ChangeEvent<HTMLInputElement>) {
    setTextValue(e.target.value);
    setValidationMessage('');
  }

  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter") {
      checkValidation();
    }
  }

  function checkValidation() {
    setValidationMessage('');
    if (required && textValue === '') {
      setValidationMessage(localization.mustFilledTheField);
    } else if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(textValue)) {
      setValidationMessage(localization.incorrectEmail)
    }
  }

  return (
    <>
      <InputLabel className="mb-2" id={`text-field-label-${id}`}>
        {required ? <span className="error">*</span> : ''} {label}
      </InputLabel>
      <TextField
        className={style.field}
        multiline={multiline}
        rows={multiline ? rows : 1}
        placeholder={label}
        variant="outlined"
        value={textValue}
        onChange={handleUpdate}
        onKeyDown={(e) => onKeyDown(e)}
        onBlur={checkValidation}
      />
      <FormHelperText className="error" >{validationMessage}</FormHelperText>
    </>
  );
}
