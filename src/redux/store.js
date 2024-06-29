import { configureStore } from "@reduxjs/toolkit";
import servicesSlice from "./servicesSlice";
import serviceDetailsSlice from "./serviceDetailsSlice";
import settingSlice from "./settingSlice";


export const store = configureStore({
    reducer: {
        service: servicesSlice,
        serviceDetails: serviceDetailsSlice,
        setting: settingSlice,
    }
});