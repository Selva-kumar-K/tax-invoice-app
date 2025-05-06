"use client";
import { useContext } from "react";
import { InvoicesDataContext } from "@/app/InvoicesDataProvider";
import InvoicesTable from "./../../../components/InvoicesTable";

// export const metadata = {
//   title: "Invoices - Invoices App",
// };
export default function page() {
  // const { invoicesData } = useContext(InvoicesDataContext);
  return (
    <>
      <div className="flex flex-wrap justify-between gap-3 p-4">
        <p className="text-[#1C160C] tracking-light text-[32px] font-bold leading-tight min-w-72">
          Invoices
        </p>
      </div>
      <div className="px-4 py-3">
        <label className="flex flex-col min-w-40 h-12 w-full">
          <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
            <div
              className="text-[#A18249] flex border-none bg-[#F4EFE6] items-center justify-center pl-4 rounded-l-xl border-r-0"
              data-icon="MagnifyingGlass"
              data-size="24px"
              data-weight="regular"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
              </svg>
            </div>
            <input
              placeholder="Search invoices..."
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#1C160C] focus:outline-0 focus:ring-0 border-none bg-[#F4EFE6] focus:border-none h-full placeholder:text-[#A18249] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
              defaultValue=""
            />
          </div>
        </label>
      </div>
      <div className="px-4 py-3 @container">
        <div className="flex overflow-hidden rounded-xl border border-[#E9DFCE] bg-[#FFFFFF]">
         <InvoicesTable />
        </div>
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n                            @container(max-width:120px) {\n                                .table-ba43979f-a7f1-4aef-8c36-e7dd93247afd-column-120 {\n                                    display: none;\n                                }\n                            }\n\n                            @container(max-width:240px) {\n                                .table-ba43979f-a7f1-4aef-8c36-e7dd93247afd-column-240 {\n                                    display: none;\n                                }\n                            }\n\n                            @container(max-width:360px) {\n                                .table-ba43979f-a7f1-4aef-8c36-e7dd93247afd-column-360 {\n                                    display: none;\n                                }\n                            }\n\n                            @container(max-width:480px) {\n                                .table-ba43979f-a7f1-4aef-8c36-e7dd93247afd-column-480 {\n                                    display: none;\n                                }\n                            }\n\n                            @container(max-width:600px) {\n                                .table-ba43979f-a7f1-4aef-8c36-e7dd93247afd-column-600 {\n                                    display: none;\n                                }\n                            }\n\n                            @container(max-width:720px) {\n                                .table-ba43979f-a7f1-4aef-8c36-e7dd93247afd-column-720 {\n                                    display: none;\n                                }\n                            }\n                        ",
          }}
        />
      </div>
      <div className="flex items-center justify-center p-4">
        <a href="#" className="flex size-10 items-center justify-center">
          <div
            className="text-[#1C160C]"
            data-icon="CaretLeft"
            data-size="18px"
            data-weight="regular"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18px"
              height="18px"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path>
            </svg>
          </div>
        </a>
        <a
          className="text-sm font-bold leading-normal tracking-[0.015em] flex size-10 items-center justify-center text-[#1C160C] rounded-full bg-[#F4EFE6]"
          href="#"
        >
          1
        </a>
        <a
          className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#1C160C] rounded-full"
          href="#"
        >
          2
        </a>
        <a
          className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#1C160C] rounded-full"
          href="#"
        >
          3
        </a>
        <a href="#" className="flex size-10 items-center justify-center">
          <div
            className="text-[#1C160C]"
            data-icon="CaretRight"
            data-size="18px"
            data-weight="regular"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18px"
              height="18px"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
            </svg>
          </div>
        </a>
      </div>
    </>
  );
}
