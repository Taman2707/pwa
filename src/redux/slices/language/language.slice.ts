import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface LanguageState {
  value: string;
}

const initialState: LanguageState = {
  value: "english",
};

export const languageSlice = createSlice({
  name: "selectedLanguage",
  initialState,
  reducers: {
    changeSelectedLanguage: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { changeSelectedLanguage } = languageSlice.actions;

export default languageSlice.reducer;
