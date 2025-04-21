export const metadata = {
  title: "Update - Invoices App",
};

export default function page() {
  return (
    <div className=" flex flex-1 justify-center py-5 max-w-[480px] mx-auto">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <p className="text-[#1C160C] tracking-light text-[32px] font-bold leading-tight min-w-72">
            Update Invoice
          </p>
        </div>
        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
          <label className="flex flex-col min-w-40 flex-1">
            <p className="text-[#1C160C] text-base font-medium leading-normal pb-2">
              Customer Name
            </p>
            <input
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#1C160C] focus:outline-0 focus:ring-0 border-none bg-[#F4EFE6] focus:border-none h-14 placeholder:text-[#A18249] p-4 text-base font-normal leading-normal"
              defaultValue=""
            />
          </label>
          <label className="flex flex-col min-w-40 flex-1">
            <p className="text-[#1C160C] text-base font-medium leading-normal pb-2">
              Email
            </p>
            <input
              type="email"
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#1C160C] focus:outline-0 focus:ring-0 border-none bg-[#F4EFE6] focus:border-none h-14 placeholder:text-[#A18249] p-4 text-base font-normal leading-normal"
              defaultValue=""
            />
          </label>
        </div>
        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
          <label className="flex flex-col min-w-40 flex-1">
            <p className="text-[#1C160C] text-base font-medium leading-normal pb-2">
              Amount
            </p>
            <input
              type="number"
              step="0.01"
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#1C160C] focus:outline-0 focus:ring-0 border-none bg-[#F4EFE6] focus:border-none h-14 placeholder:text-[#A18249] p-4 text-base font-normal leading-normal"
              defaultValue=""
            />
          </label>
          <label className="flex flex-col min-w-40 flex-1">
            <p className="text-[#1C160C] text-base font-medium leading-normal pb-2">
              Date
            </p>
            <input
              type="date"
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#1C160C] focus:outline-0 focus:ring-0 border-none bg-[#F4EFE6] focus:border-none h-14 placeholder:text-[#A18249] p-4 text-base font-normal leading-normal"
              defaultValue=""
            />
          </label>
        </div>
        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
          <label className="flex flex-col min-w-40 flex-1">
            <p className="text-[#1C160C] text-base font-medium leading-normal pb-2">
              Status
            </p>
            <input
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#1C160C] focus:outline-0 focus:ring-0 border-none bg-[#F4EFE6] focus:border-none h-14 placeholder:text-[#A18249] p-4 text-base font-normal leading-normal"
              defaultValue=""
            />
          </label>
        </div>
        <div className="flex px-4 py-3">
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-5 flex-1 bg-[#019863] text-[#FFFFFF] text-base font-bold leading-normal tracking-[0.015em]">
            <span className="truncate">Save Changes</span>
          </button>
        </div>
      </div>
    </div>
  );
}
