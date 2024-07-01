import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiEndpoints from "./apiEndpoints";

export const getServices = createAsyncThunk('service/getServices', async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        const response = await fetch(apiEndpoints.getServices);
        const data = await response.json();
        return data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

export const getTopServices = createAsyncThunk('service/getTopServices', async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        const response = await fetch(apiEndpoints.getTopServices);
        const data = await response.json();
        return data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

const servicesSlice = createSlice({
    name: "service",
    initialState: { top_services: [], services: [], isLoading: false, error: null },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getServices.pending, (state, action) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getServices.fulfilled, (state, action) => {
                state.isLoading = false;
                state.services = action.payload.data;
            })
            .addCase(getServices.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })

            .addCase(getTopServices.pending, (state, action) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getTopServices.fulfilled, (state, action) => {
                state.isLoading = false;
                state.top_services = action.payload.data;
            })
            .addCase(getTopServices.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    }
});

export default servicesSlice.reducer;
