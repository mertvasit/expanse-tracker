import http from "./axios";
import { ITransaction } from "../types";
import { AxiosResponse } from "axios";

const getAll = async (): Promise<AxiosResponse<Array<ITransaction>>> => {
  return await http.get<Array<ITransaction>>("/transactions");
};

const TransactionServices = {
  getAll,
};

export default TransactionServices;
