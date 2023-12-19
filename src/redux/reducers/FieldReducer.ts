import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IField } from "../../interfaces/fields/IField.interface";

interface FieldsState {
  fields: IField[];
}

const initialState: FieldsState = {
  fields: [],
};

const fieldsSlice = createSlice({
  name: "fields",
  initialState,
  reducers: {
    addField: (state, action: PayloadAction<IField>) => {
      state.fields.push(action.payload);
    },
    
    updateFieldLabel: (state, action: PayloadAction<{ fieldId: number, newLabel: string }>) => {
      state.fields = state.fields.map((field: IField) =>
        field.id === action.payload.fieldId
          ? { ...field, label: action.payload.newLabel }
          : field
      );
    },

    updateFieldRequired: (state, action: PayloadAction<{ fieldId: number, newRequired: boolean }>) => {
      state.fields = state.fields.map((field: IField) =>
        field.id === action.payload.fieldId
          ? { ...field, required: action.payload.newRequired }
          : field
      );
    },

    updateFieldType: (state, action: PayloadAction<{ fieldId: number, newType: string }>) => {
      const { fieldId, newType } = action.payload;
      state.fields = state.fields.map((field: IField) =>
        field.id === fieldId
          ? { ...field, type: newType }
          : field
      );
    },

    updateFieldOptions: (state, action: PayloadAction<{ fieldId: number, newOptions: string[] }>) => {
      state.fields = state.fields.map((field: IField) =>
        field.id === action.payload.fieldId
          ? { ...field, options: action.payload.newOptions }
          : field
      );
    },

    updateFields: (state, action: PayloadAction<IField[]>) => {
      state.fields = action.payload;
    },
  },
});

export const {
  addField,
  updateFieldLabel,
  updateFieldRequired,
  updateFieldType,
  updateFieldOptions,
  updateFields,
} = fieldsSlice.actions;

export default fieldsSlice.reducer;
