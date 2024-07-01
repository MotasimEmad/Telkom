import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiEndpoints from "./apiEndpoints";

export const getSettings = createAsyncThunk('setting/getSettings', async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        const response = await fetch(apiEndpoints.getSettings);
        const data = await response.json();
        return data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

const settingSlice = createSlice({
    name: "setting",
    initialState: { setting: {}, isLoading: false, error: null },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getSettings.pending, (state, action) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getSettings.fulfilled, (state, action) => {
                state.isLoading = false;
                state.setting = action.payload.data;
            })
            .addCase(getSettings.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    }
});

export default settingSlice.reducer;
