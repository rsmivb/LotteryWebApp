import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ILottery } from "../api/lottery";

export interface IOperation<T> {
  isWorking: boolean,
  errorMessage?: string,
  data?: T,
}

export interface ILotteryState {
  lottery: IOperation<ILottery>,
}

const initialState: ILotteryState = {
  lottery: {
    isWorking: false,
  }
}

export const loadListSlice = createSlice({
  name: 'load-list',
  initialState,
  reducers: {
    loadList: (state, _: PayloadAction<string | undefined>) => {
      //could call working to change state;
    },
    finishLoadList: (state, action: PayloadAction<IOperation<ILottery>>) => {
      console.log("finishLoadList");

      state.lottery.data = action.payload.data;
    },
  }
});

export const {
  loadList,
  finishLoadList,
} = loadListSlice.actions;