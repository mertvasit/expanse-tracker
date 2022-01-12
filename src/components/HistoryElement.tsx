import * as React from "react";
import { ITransaction } from "../types";
type Props = {
  transactionElement: ITransaction;
  deleteTransaction: (transactionId: number) => void;
};

const HistoryElement: React.FC<Props> = (props) => {
  const { id, text, amount } = props.transactionElement;
  let classname = "history-transaction-element";
  classname += amount > 0 ? " income" : " expanse";
  return (
    <React.Fragment>
      <div className={classname}>
        <span>{text}</span>
        <span>&#36;{amount}</span>
        <div
          className="history-transaction-element-delete"
          onClick={() => props.deleteTransaction(id)}
        >
          <i className="fa fa-trash" aria-hidden="true"></i>{" "}
        </div>
      </div>
    </React.Fragment>
  );
};

export default HistoryElement;
