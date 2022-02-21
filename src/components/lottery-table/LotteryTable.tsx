import React from "react";
import { Card } from "react-bootstrap";
import './LotteryTable.scoped.scss';

export interface ITableItem {
  value: number,
  quantity: number,
}


interface ILotteryTable {
  lotteryName: string,
  columnByRow: number,
  isDisabled: boolean,
  items: ITableItem[],
}

const LotteryTable: React.FC<ILotteryTable> = ({
  lotteryName,
  columnByRow,
  isDisabled,
  items,
}) => {
  const totalRows = items.length / columnByRow;

  return <>
    <Card>
      <Card.Title>{lotteryName}</Card.Title>
      <Card.Body>
        <table className="lotteryTable">
          <tbody>
            <tr className="lotteryTableRow" key={lotteryName + "_tr_" + 1}><td className="lotteryTableColumn" key={lotteryName + "_td_" + 1}>{items.at(0)?.value}</td><td className="lotteryTableColumn" key={lotteryName + "_td_" + 12}>{12}</td></tr>
            <tr key={lotteryName + "_tr_" + 2}><td key={lotteryName + "_td_" + 2}>{items.at(1)?.value}</td></tr>
            <tr key={lotteryName + "_tr_" + 3}><td key={lotteryName + "_td_" + 3}>{items.at(2)?.value}</td></tr>
            <tr key={lotteryName + "_tr_" + 4}><td key={lotteryName + "_td_" + 4}>{items.at(3)?.value}</td></tr>
            <tr key={lotteryName + "_tr_" + 5}><td key={lotteryName + "_td_" + 5}>{items.at(4)?.value}</td></tr>
            <tr key={lotteryName + "_tr_" + 6}><td key={lotteryName + "_td_" + 6}>{items.at(5)?.value}</td></tr>

          </tbody>
        </table>
      </Card.Body>
    </Card>
  </>;
};

export default LotteryTable;