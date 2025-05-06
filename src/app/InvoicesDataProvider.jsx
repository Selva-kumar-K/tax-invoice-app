"use client";

import { createContext, useState } from "react";
import InitialInvoicesData from "./../libs/data.json";

export const InvoicesDataContext = createContext();
export const InvoicesDataProvider = ({ children }) => {
  const [invoicesData, setInvoicesData] = useState(InitialInvoicesData);
  return (
    <InvoicesDataContext value={{ invoicesData, setInvoicesData }}>
      {children}
    </InvoicesDataContext>
  );
};
