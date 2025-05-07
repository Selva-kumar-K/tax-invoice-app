"use client";

import { useParams } from "next/navigation";
import Form from "../../../../components/Form";

// export const metadata = {
//   title: "Update - Invoices App",
// };

export default function UpdateInvoice({ params }) {
  const {id} = useParams()
  console.log(id)
  return <Form title="Update Invoice" id={id}/>;
}
