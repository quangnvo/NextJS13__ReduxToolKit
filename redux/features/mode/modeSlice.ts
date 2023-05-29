import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ModeState = {
    isDark: boolean;
};

const initialState = {
    isDark: true,
} as ModeState;

export const mode = createSlice({
    name: "mode",
    initialState,
    reducers: {
        changeMode: (state) => {
            if (localStorage.getItem("theme") === "light") {
                localStorage.setItem("theme", "dark")
                state.isDark = true
            } else {
                localStorage.setItem("theme", "light")
                state.isDark = false
            }
        }
    },
});

export const {
    changeMode
} = mode.actions;

export default mode.reducer;
