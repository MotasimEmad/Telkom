import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiEndpoints from "./apiEndpoints";

export const getServiceById = createAsyncThunk('serviceDetails/getServiceById', async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        const response = await fetch(`${apiEndpoints.getServiceById}${id}`);
        const data = await response.json();
        return data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

const serviceDetailsSlice = createSlice({
    name: "serviceDetails",
    initialState: { service: {}, isLoading: false, error: null },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getServiceById.pending, (state, action) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getServiceById.fulfilled, (state, action) => {
                state.isLoading = false;
                state.service = action.payload.data;
            })
            .addCase(getServiceById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    }
});

export default serviceDetailsSlice.reducer;
