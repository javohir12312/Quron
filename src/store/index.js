import { configureStore } from "@reduxjs/toolkit";
import getOptin from "../slice/select"

export default configureStore({
    reducer: getOptin,
})