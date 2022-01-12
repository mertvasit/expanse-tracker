import * as React from "react";
import "./App.css";

//Components
import Balance from "./components/Balance";
import History from "./components/History";
import TransactionAdder from "./components/TransactionAdder";

import TransactionServices from "./services";

import { ICheck, ITransaction } from "./types";

function App() {
  const [transactions, setTransactions] = React.useState<ITransaction[]>([]);
  const [check, setCheck] = React.useState<ICheck>({
    income: 0,
    expanse: 0,
    total: 0,
  });

  React.useEffect(() => {
    TransactionServices.getAll().then((res) => setTransactions(res.data));
  }, []);

  function handleCheckCalculations(transactions: ITransaction[]): ICheck {
    const result: ICheck = { income: 0, expanse: 0, total: 0 };
    transactions.forEach((transaction) => {
      if (transaction.amount < 0) {
        result.expanse = +result.expanse + +transaction.amount;
      } else {
        result.income = +result.income + +transaction.amount;
      }
      result.total = result.income + result.expanse;
    });
    return result;
  }

  React.useEffect(() => {
    let finalCheck: ICheck = handleCheckCalculations(transactions);
    setCheck(finalCheck);
  }, [transactions]);

  function handleAddingTransaction(transaction: ITransaction): void {
    setTransactions((prevState) => [...prevState, transaction]);
  }

  function handleDeleteTransaction(transactionId: number): void {
    let transactionsCopy = [...transactions];
    let deleteItemIndex = transactions.findIndex(
      (item) => item.id === transactionId
    );
    transactionsCopy.splice(deleteItemIndex, 1);
    setTransactions(transactionsCopy);
  }

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <Balance getCheck={check} />
      <History
        transactionHistory={transactions}
        deleteTransaction={handleDeleteTransaction}
      />
      <TransactionAdder addTransaction={handleAddingTransaction} />
    </div>
  );
}

export default App;
