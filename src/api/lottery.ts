
export interface Data {
  num: number,
  count: number,
}

export interface ILottery {
  lotteryName: string,
  values: Data[]
}

class LotteryApi {

  public async getValues(lotteryName: string): Promise<ILottery> {
    const data = {
      lotteryName: "Lottery",
      values: [
        {
          num: 1,
          count: 10
        },
        {
          num: 2,
          count: 11
        },
        {
          num: 3,
          count: 9
        },
        {
          num: 4,
          count: 8
        },
        {
          num: 5,
          count: 12
        },
      ],
    };
    return await data;
  }
}

export default new LotteryApi();