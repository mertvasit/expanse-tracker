import * as React from "react";
import { ITransaction } from "../types";

import HistoryElement from "./HistoryElement";

type Props = {
  transactionHistory: ITransaction[];
  deleteTransaction: (transactionId: number) => void;
};

const History: React.FC<Props> = ({
  transactionHistory,
  deleteTransaction,
}) => {
  return (
    <div className="history-container">
      <p className="history-title">
        <b>History</b>
      </p>
      <div className="history-table">
        {transactionHistory.map((transaction, index) => {
          return (
            <HistoryElement
              key={index}
              transactionElement={transaction}
              deleteTransaction={deleteTransaction}
            />
          );
        })}
      </div>
    </div>
  );
};

export default History;
