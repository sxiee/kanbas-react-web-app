import { configureStore } from "@reduxjs/toolkit";
<<<<<<< Updated upstream
import modulesReducer from "../Modules/modulesReducer";

const store = configureStore({
  reducer: {
    modulesReducer,
  },
});

export default store;
=======
import modulesReducer from "../Courses/Modules/moduleReducer";
const store = configureStore({
reducer: {
modulesReducer
}
});
export default store;
>>>>>>> Stashed changes
