import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { loadListSlice } from "./load-list-slice";
import rootSaga from "./rootSaga";

let sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    loadList: loadListSlice.reducer,
  },
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: false,
      thunk: false,
    }),
    sagaMiddleware,
  ],
  devTools: process.env.NODE_ENV !== 'production',
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


