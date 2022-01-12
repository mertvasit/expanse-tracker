import * as React from "react";
import { ITransaction } from "../types";

type Props = {
  addTransaction: (transaction: ITransaction) => void;
};

const initalizedTransaction: ITransaction = {
  id: Math.floor(Math.random() * 1000),
  text: "",
  amount: 0,
};

const TransactionAdder: React.FC<Props> = (props) => {
  const [transactionInput, setTransactionInput] = React.useState<ITransaction>(
    initalizedTransaction
  );

  const handleInputChange = (
    event: React.FormEvent<HTMLInputElement>
  ): void => {
    const { name, value } = event.currentTarget;
    setTransactionInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmitForm = (event: React.SyntheticEvent) => {
    event.preventDefault();
    setTransactionInput(initalizedTransaction);
    props.addTransaction(transactionInput);
  };

  return (
    <div className="transaction-container">
      <p className="transaction-title">
        <b>Add new transaction</b>
      </p>
      <form className="transaction-form" onSubmit={handleSubmitForm}>
        <span>Text</span>
        <input
          className="transaction-form-input"
          name="text"
          type="text"
          value={transactionInput.text}
          placeholder="Transaction"
          onChange={handleInputChange}
        />
        <span>Amount</span>
        <input
          className="transaction-form-input"
          name="amount"
          type="number"
          placeholder="0"
          value={transactionInput.amount}
          onChange={handleInputChange}
        />
        <button className="transaction-form-button">Add Transaction</button>
      </form>
    </div>
  );
};

export default TransactionAdder;
