import React, { useEffect, useState } from "react";
import { FormHelperText, InputLabel } from "@mui/material";
import { MuiTelInput } from "mui-tel-input";
import parsePhoneNumber from "libphonenumber-js";
import style from '../Form.module.css';
import localization from "../../../../localizationConfig";
import { IField } from "../../../interfaces/fields/IField.interface";

export default function PhoneNumber({ field, showError }: { field: IField, showError: boolean }) {
    console.log(localization);
    const { id, required, label } = field;
    const [phone, setPhone] = useState('');
    const [validationMessage, setValidationMessage] = useState('');

    const handleChange = (newValue: string) => {
        setPhone(newValue);
        setValidationMessage('');
    };

    function onKeyDown(e: React.KeyboardEvent) {
        if (e.key === "Enter") {
            checkValidation();
        }
    }

    function checkValidation() {
        setValidationMessage('');
        try {
            const phoneNumberObj = parsePhoneNumber(phone);
            if (required && (/^\+(\d{1,3})$/.test(phone) || phone === "" )) {
                setValidationMessage(localization.mustFilledTheField);
                return false;
            } else if (!phoneNumberObj?.isValid()) {
                setValidationMessage(localization.incorrectPhoneNumber);
                return false;
            }
        } catch (error) {
            setValidationMessage(localization.incorrectPhoneNumber);
        }
    }

    useEffect(() => {
        if (showError) {
            checkValidation();
        }
    }, [showError]);

    return (
        <>
            <InputLabel className='mb-2' id={`date-picker-label-${id}`}>
                {required ? <span className="error">*</span> : ''} {label}
            </InputLabel>
            <MuiTelInput
                className={`${style.field} ${style.phone}`}
                value={phone}
                onChange={handleChange}
                defaultCountry="PS"
                onKeyDown={onKeyDown}
                onBlur={checkValidation}
            />
            <FormHelperText className="error">{validationMessage}</FormHelperText>
        </>
    );
}
