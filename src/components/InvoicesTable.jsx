"use client";

import React from "react";
import { useContext } from "react";
import { InvoicesDataContext } from "@/app/InvoicesDataProvider";
import { redirect } from "next/navigation";
export default function InvoicesTable() {
  const { invoicesData, setInvoicesData } = useContext(InvoicesDataContext);
  console.log(invoicesData);

  const filterInvoices = invoicesData.filter((_, index) => {
    if (index < 6) {
      return true;
    } else {
      return false;
    }
  });

  return (
    <table className="flex-1">
      <thead>
        <tr className="bg-[#FFFFFF]">
          <th className="table-ba43979f-a7f1-4aef-8c36-e7dd93247afd-column-120 px-4 py-3 text-left text-[#1C160C] w-[400px] text-sm font-medium leading-normal">
            Customer
          </th>
          <th className="table-ba43979f-a7f1-4aef-8c36-e7dd93247afd-column-240 px-4 py-3 text-left text-[#1C160C] w-[400px] text-sm font-medium leading-normal">
            Email
          </th>
          <th className="table-ba43979f-a7f1-4aef-8c36-e7dd93247afd-column-360 px-4 py-3 text-left text-[#1C160C] w-[400px] text-sm font-medium leading-normal">
            Amount
          </th>
          <th className="table-ba43979f-a7f1-4aef-8c36-e7dd93247afd-column-480 px-4 py-3 text-left text-[#1C160C] w-[400px] text-sm font-medium leading-normal">
            Date
          </th>
          <th className="table-ba43979f-a7f1-4aef-8c36-e7dd93247afd-column-600 px-4 py-3 text-left text-[#1C160C] w-60 text-sm font-medium leading-normal">
            Status
          </th>
          <th className="table-ba43979f-a7f1-4aef-8c36-e7dd93247afd-column-720 px-4 py-3 text-left w-60 text-[#A18249] text-sm font-medium leading-normal">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        {filterInvoices.map(
          ({ id, customer, email, amount, date, status }, index) => (
            <tr key={index} className="border-t border-t-[#E9DFCE]">
              <td className="table-ba43979f-a7f1-4aef-8c36-e7dd93247afd-column-120 h-[72px] px-4 py-2 w-[400px] text-[#1C160C] text-sm font-normal leading-normal">
                {customer}
              </td>
              <td className="table-ba43979f-a7f1-4aef-8c36-e7dd93247afd-column-240 h-[72px] px-4 py-2 w-[400px] text-[#A18249] text-sm font-normal leading-normal">
                {email}
              </td>
              <td className="table-ba43979f-a7f1-4aef-8c36-e7dd93247afd-column-360 h-[72px] px-4 py-2 w-[400px] text-[#A18249] text-sm font-normal leading-normal">
                ${amount}
              </td>
              <td className="table-ba43979f-a7f1-4aef-8c36-e7dd93247afd-column-480 h-[72px] px-4 py-2 w-[400px] text-[#A18249] text-sm font-normal leading-normal">
                {date}
              </td>
              <td className="table-ba43979f-a7f1-4aef-8c36-e7dd93247afd-column-600 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#F4EFE6] text-[#1C160C] text-sm font-medium leading-normal w-full">
                  <span className="truncate">{status}</span>
                </button>
              </td>
              <td className="table-ba43979f-a7f1-4aef-8c36-e7dd93247afd-column-720 h-[72px] px-4 py-2 w-60 text-[#A18249] text-sm font-bold leading-normal tracking-[0.015em]">
                <div className="flex items-center gap-2">
                  <button
                    className="cursor-pointer"
                    onClick={() => redirect("/invoices/new-invoice")}
                  >
                    Edit
                  </button>
                  <button className="cursor-pointer" onClick={() => {
                    setInvoicesData(invoicesData.filter((invoice, index) => invoice.id !== id));
                  }}>
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
}
