import React from "react";
import { ICheck } from "../types";

type Props = {
  getCheck: ICheck;
};

const Balance: React.FC<Props> = ({ getCheck }) => {
  return (
    <div className="balance-container">
      <div className="balance-display">
        <span>
          <b>YOUR BALANCE</b>
        </span>
        <span>
          <b>&#36;</b>
          {getCheck.total}
        </span>
      </div>
      <div className="balance-details">
        <div className="balance-details-item">
          <span>
            <b>INCOME</b>
          </span>
          <span style={{ color: "green" }}>{getCheck.income}</span>
        </div>
        <div className="balance-details-item">
          <span>
            <b>EXPENSE</b>
          </span>
          <span style={{ color: "red" }}>{getCheck.expanse}</span>
        </div>
      </div>
    </div>
  );
};

export default Balance;
