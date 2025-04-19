"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Home({ children }) {
  const pathName = usePathname();
  console.log(pathName);

  const isActive = (path) => {
    return pathName == path ? "bg-[#F4EFE6]" : "";
  };

  return (
    <div className="gap-1 px-6 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col w-80">
        <div className="flex h-full min-h-[700px] flex-col justify-between bg-[#FFFFFF] p-4">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Link href="/" className={`${isActive("/")} rounded-full `}>
                <button className="flex items-center gap-3 px-3 py-2 cursor-pointer">
                  <div
                    className="text-[#1C160C]"
                    data-icon="DotsThreeCircle"
                    data-size="24px"
                    data-weight="regular"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-house-icon lucide-house"
                    >
                      <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                      <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    </svg>
                  </div>
                  <p className="text-[#1C160C] text-sm font-medium leading-normal">
                    Home
                  </p>
                </button>
              </Link>
              <Link
                href="/invoices"
                className={`${isActive("/invoices")} rounded-full`}
              >
                <button className="flex items-center gap-3 px-3 py-2 cursor-pointer">
                  <div
                    className="text-[#1C160C]"
                    data-icon="SquareLogo"
                    data-size="24px"
                    data-weight="fill"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-file-text-icon lucide-file-text"
                    >
                      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                      <path d="M10 9H8" />
                      <path d="M16 13H8" />
                      <path d="M16 17H8" />
                    </svg>
                  </div>
                  <p className="text-[#1C160C] text-sm font-medium leading-normal">
                    Invoices
                  </p>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        {children}
      </div>
    </div>
  );
}
