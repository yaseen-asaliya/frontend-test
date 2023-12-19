import { TextField, IconButton, InputLabel, FormHelperText } from '@mui/material';
import style from './PasswordFiels.module.css'
import { useState } from 'react';
import localization from '../../../../localizationConfig';

export default function PasswordField({ label, setPassword, password }: { label: string, setPassword: React.Dispatch<React.SetStateAction<string>>, password: string }) {
    const [showPassword, setShowPassword] = useState(false);
    const [validationMessage, setValidationMessage] = useState('');

    function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === "Enter") {
            checkValidation();
        }
    }

    function checkValidation() {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
        setValidationMessage('');
        if (password === '') {
            setValidationMessage(localization.mustFilledTheField);
        } else if (!passwordRegex.test(password)) {
            setValidationMessage(localization.incorrectPassword);
        }
    }

    function handleUpdate(e: React.ChangeEvent<HTMLInputElement>) {
        setPassword(e.target.value);
        setValidationMessage('');
    }

    return (
        <>
            <InputLabel htmlFor="password-input" className="mb-3 label" id="password-label">{label}</InputLabel>
            <TextField
                id='password-input'
                className={`${style.password}`}
                placeholder={label}
                onChange={handleUpdate}
                value={password}
                onKeyDown={onKeyDown}
                onBlur={checkValidation}
                type={showPassword ? 'text' : 'password'}
                InputProps={{
                    className: "label",
                    startAdornment: (
                        <IconButton
                            className={`${style.icon} ms-0`}
                            onClick={() => setShowPassword((show) => !show)}
                            onMouseDown={(event) => event.preventDefault()}
                            edge="start"
                        >
                            <i className={`fa-regular ${showPassword ? "fa-eye" : "fa-eye-slash"}`}></i>
                        </IconButton>
                    ),
                }}
            />
            <FormHelperText className="error mt-2">{validationMessage}</FormHelperText>
        </>
    );
}
