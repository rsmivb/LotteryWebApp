import React from "react";
import { Badge, Card } from "react-bootstrap";
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
            <tr className="lotteryTableRow" key={lotteryName + "_tr_" + 1}>
              <td key={lotteryName + "_td_01"}>
                <Badge pill bg="secondary" >
                  {"01"}
                </Badge>
              </td>
              <td key={lotteryName + "_td_02"}>
                <Badge pill bg="secondary">
                  {"02"}
                </Badge>
              </td>
              <td key={lotteryName + "_td_03"}>
                <Badge pill bg="secondary">
                  {"03"}
                </Badge>
              </td>
              <td key={lotteryName + "_td_04"}>
                <Badge pill bg="secondary">
                  {"04"}
                </Badge>
              </td>
              <td key={lotteryName + "_td_05"}>
                <Badge pill bg="secondary">
                  {"05"}
                </Badge>
              </td>
              <td key={lotteryName + "_td_06"}>
                <Badge pill bg="secondary">
                  {"06"}
                </Badge>
              </td>
              <td key={lotteryName + "_td_07"}>
                <Badge pill bg="secondary">
                  {"07"}
                </Badge>
              </td>
              <td key={lotteryName + "_td_08"}>
                <Badge pill bg="secondary">
                  {"08"}
                </Badge>
              </td>
              <td key={lotteryName + "_td_09"}>
                <Badge pill bg="secondary">
                  {"09"}
                </Badge>
              </td>
              <td key={lotteryName + "_td_10"}>
                <Badge pill bg="secondary">
                  {"10"}
                </Badge>
              </td>
            </tr>
            <tr className="lotteryTableRow" key={lotteryName + "_tr_" + 1}>
              <td key={lotteryName + "_td_11"}>
                <Badge pill bg="secondary" >
                  {11}
                </Badge>
              </td>
              <td key={lotteryName + "_td_12"}>
                <Badge pill bg="secondary" >
                  {12}
                </Badge>
              </td>
              <td key={lotteryName + "_td_13"}>
                <Badge pill bg="secondary" >
                  {13}
                </Badge>
              </td>
              <td key={lotteryName + "_td_14"}>
                <Badge pill bg="secondary" >
                  {14}
                </Badge>
              </td>
              <td key={lotteryName + "_td_15"}>
                <Badge pill bg="secondary">
                  {15}
                </Badge>
              </td>
              <td key={lotteryName + "_td_16"}>
                <Badge pill bg="secondary">
                  {16}
                </Badge>
              </td>
              <td key={lotteryName + "_td_17"}>
                <Badge pill bg="secondary">
                  {17}
                </Badge>
              </td>
              <td key={lotteryName + "_td_18"}>
                <Badge pill bg="secondary">
                  {18}
                </Badge>
              </td>
              <td key={lotteryName + "_td_19"}>
                <Badge pill bg="secondary">
                  {19}
                </Badge>
              </td>
              <td key={lotteryName + "_td_20"}>
                <Badge pill bg="secondary">
                  {20}
                </Badge>
              </td>
            </tr>
            <tr className="lotteryTableRow" key={lotteryName + "_tr_" + 1}>
              <td key={lotteryName + "_td_21"}>
                <Badge pill bg="secondary" >
                  {21}
                </Badge>
              </td>
              <td key={lotteryName + "_td_22"}>
                <Badge pill bg="secondary" >
                  {22}
                </Badge>
              </td>
              <td key={lotteryName + "_td_23"}>
                <Badge pill bg="secondary" >
                  {23}
                </Badge>
              </td>
              <td key={lotteryName + "_td_24"}>
                <Badge pill bg="secondary" >
                  {24}
                </Badge>
              </td>
              <td key={lotteryName + "_td_25"}>
                <Badge pill bg="secondary">
                  {25}
                </Badge>
              </td>
              <td key={lotteryName + "_td_26"}>
                <Badge pill bg="secondary">
                  {26}
                </Badge>
              </td>
              <td key={lotteryName + "_td_27"}>
                <Badge pill bg="secondary">
                  {27}
                </Badge>
              </td>
              <td key={lotteryName + "_td_28"}>
                <Badge pill bg="secondary">
                  {28}
                </Badge>
              </td>
              <td key={lotteryName + "_td_29"}>
                <Badge pill bg="secondary">
                  {29}
                </Badge>
              </td>
              <td key={lotteryName + "_td_30"}>
                <Badge pill bg="secondary">
                  {30}
                </Badge>
              </td>
            </tr>
            <tr className="lotteryTableRow" key={lotteryName + "_tr_" + 1}>
              <td key={lotteryName + "_td_31"}>
                <Badge pill bg="secondary" >
                  {31}
                </Badge>
              </td>
              <td key={lotteryName + "_td_32"}>
                <Badge pill bg="secondary" >
                  {32}
                </Badge>
              </td>
              <td key={lotteryName + "_td_33"}>
                <Badge pill bg="secondary" >
                  {33}
                </Badge>
              </td>
              <td key={lotteryName + "_td_34"}>
                <Badge pill bg="secondary" >
                  {34}
                </Badge>
              </td>
              <td key={lotteryName + "_td_35"}>
                <Badge pill bg="secondary">
                  {35}
                </Badge>
              </td>
              <td key={lotteryName + "_td_36"}>
                <Badge pill bg="secondary">
                  {36}
                </Badge>
              </td>
              <td key={lotteryName + "_td_37"}>
                <Badge pill bg="secondary">
                  {37}
                </Badge>
              </td>
              <td key={lotteryName + "_td_38"}>
                <Badge pill bg="secondary">
                  {38}
                </Badge>
              </td>
              <td key={lotteryName + "_td_39"}>
                <Badge pill bg="secondary">
                  {39}
                </Badge>
              </td>
              <td key={lotteryName + "_td_40"}>
                <Badge pill bg="secondary">
                  {40}
                </Badge>
              </td>
            </tr>
            <tr className="lotteryTableRow" key={lotteryName + "_tr_" + 1}>
              <td key={lotteryName + "_td_41"}>
                <Badge pill bg="secondary" >
                  {41}
                </Badge>
              </td>
              <td key={lotteryName + "_td_42"}>
                <Badge pill bg="secondary" >
                  {42}
                </Badge>
              </td>
              <td key={lotteryName + "_td_43"}>
                <Badge pill bg="secondary" >
                  {43}
                </Badge>
              </td>
              <td key={lotteryName + "_td_44"}>
                <Badge pill bg="secondary" >
                  {44}
                </Badge>
              </td>
              <td key={lotteryName + "_td_45"}>
                <Badge pill bg="secondary">
                  {45}
                </Badge>
              </td>
              <td key={lotteryName + "_td_46"}>
                <Badge pill bg="secondary">
                  {46}
                </Badge>
              </td>
              <td key={lotteryName + "_td_47"}>
                <Badge pill bg="secondary">
                  {47}
                </Badge>
              </td>
              <td key={lotteryName + "_td_48"}>
                <Badge pill bg="secondary">
                  {48}
                </Badge>
              </td>
              <td key={lotteryName + "_td_49"}>
                <Badge pill bg="secondary">
                  {49}
                </Badge>
              </td>
              <td key={lotteryName + "_td_50"}>
                <Badge pill bg="secondary">
                  {50}
                </Badge>
              </td>
            </tr>
            <tr className="lotteryTableRow" key={lotteryName + "_tr_" + 1}>
              <td key={lotteryName + "_td_51"}>
                <Badge pill bg="secondary">
                  {51}
                </Badge>
              </td>
              <td key={lotteryName + "_td_52"}>
                <Badge pill bg="secondary">
                  {52}
                </Badge>
              </td>
              <td key={lotteryName + "_td_53"}>
                <Badge pill bg="secondary">
                  {53}
                </Badge>
              </td>
              <td key={lotteryName + "_td_54"}>
                <Badge pill bg="secondary">
                  {54}
                </Badge>
              </td>
              <td key={lotteryName + "_td_55"}>
                <Badge pill bg="secondary" >
                  55
                </Badge>
              </td>
              <td key={lotteryName + "_td_56"}>
                <Badge pill bg="secondary">
                  {56}
                </Badge>
              </td>
              <td key={lotteryName + "_td_57"}>
                <Badge pill bg="secondary">
                  {57}
                </Badge>
              </td>
              <td key={lotteryName + "_td_58"}>
                <Badge pill bg="secondary">
                  {58}
                </Badge>
              </td>
              <td key={lotteryName + "_td_59"}>
                <Badge pill bg="secondary">
                  {59}
                </Badge>
              </td>
              <td key={lotteryName + "_td_60"}>
                <Badge pill bg="secondary">
                  {60}
                </Badge>
              </td>
            </tr>

          </tbody>
        </table>
      </Card.Body>
    </Card>
  </>;
};

export default LotteryTable;