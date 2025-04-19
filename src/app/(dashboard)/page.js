export default function page() {
  return (
    <>
      <div className="flex flex-wrap justify-between gap-3 p-4">
        <p className="text-[#1C160C] tracking-light text-[32px] font-bold leading-tight min-w-72">
          Dashboard
        </p>
      </div>
      <div className="flex flex-wrap gap-4 p-4">
        <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-[#F4EFE6]">
          <p className="text-[#1C160C] text-base font-medium leading-normal">
            Total Invoices
          </p>
          <p className="text-[#1C160C] tracking-light text-2xl font-bold leading-tight">
            100
          </p>
        </div>
        <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-[#F4EFE6]">
          <p className="text-[#1C160C] text-base font-medium leading-normal">
            Pending Invoices
          </p>
          <p className="text-[#1C160C] tracking-light text-2xl font-bold leading-tight">
            20
          </p>
        </div>
        <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-[#F4EFE6]">
          <p className="text-[#1C160C] text-base font-medium leading-normal">
            Paid Invoices
          </p>
          <p className="text-[#1C160C] tracking-light text-2xl font-bold leading-tight">
            80
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 px-4 py-6">
        <div className="flex min-w-72 flex-1 flex-col gap-2 rounded-xl border border-[#E9DFCE] p-6">
          <p className="text-[#1C160C] text-base font-medium leading-normal">
            Total Billed This Month
          </p>
          <p className="text-[#1C160C] tracking-light text-[32px] font-bold leading-tight truncate">
            $10K
          </p>
          <div className="flex gap-1">
            <p className="text-[#A18249] text-base font-normal leading-normal">
              Last 6 months
            </p>
            <p className="text-[#019863] text-base font-medium leading-normal">
              +10%
            </p>
          </div>
        </div>
        <div className="flex min-w-72 flex-1 flex-col gap-2 rounded-xl border border-[#E9DFCE] p-6">
          <p className="text-[#1C160C] text-base font-medium leading-normal">
            Invoices Paid This Month
          </p>
          <p className="text-[#1C160C] tracking-light text-[32px] font-bold leading-tight truncate">
            15
          </p>
          <div className="flex gap-1">
            <p className="text-[#A18249] text-base font-normal leading-normal">
              Last 6 months
            </p>
            <p className="text-[#019863] text-base font-medium leading-normal">
              +5%
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
