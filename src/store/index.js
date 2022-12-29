import { configureStore } from "@reduxjs/toolkit";
import countReduser from "../slice/count"

export default configureStore({
    reducer: countReduser
})
