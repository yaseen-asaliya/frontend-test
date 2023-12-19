import { Button, TextField } from "@mui/material";
import style from './Options.module.css';
import DeleteOption from "../deleteOption/DeleteOption.component";
import { useDispatch } from "react-redux";
import localization from "../../../../localizationConfig";
import { updateFieldOptions } from "../../../redux/reducers/FieldReducer";

export default function Options({ fieldId, options }: { fieldId: number, options: string[] }) {
  const dispatch = useDispatch();

  const handleOptionChange = (index: number, value: string) => {
    const updatedOptions = [...options];
    updatedOptions[index] = value;
    dispatch(updateFieldOptions({fieldId: fieldId, newOptions: updatedOptions}));
  };

  const deleteOption = (indexToRemove: number) => {
    let updatedOptions = options.filter((_: string, index: number) => index !== indexToRemove);
    if (updatedOptions.length === 0) {
      updatedOptions = [""];
    }
    dispatch(updateFieldOptions({fieldId: fieldId, newOptions: updatedOptions}));
  };

  const addOption = () => {
    const updatedOptions = [...options, ''];
    dispatch(updateFieldOptions({fieldId: fieldId, newOptions: updatedOptions}));
  };

  return (
    <>
      {options.map((option: string, index: number) => (
        <div className="d-flex flex-row-reverse align-items-center me-4 mt-3" key={index}>
          <TextField
            className={`${style.optionField} ms-4`}
            placeholder={` ${index + 1} ${localization.element}`}
            type="text"
            variant="outlined"
            value={option}
            onChange={(e) => handleOptionChange(index, e.target.value)}
          />

          {index === options.length - 1 && (
            <Button className={`${style.addOption} ms-4`} variant='contained' onClick={addOption}>
              {localization.addElement}
            </Button>
          )}

          <DeleteOption onClick={() => deleteOption(index)} />
        </div>
      ))}
    </>
  );
}
