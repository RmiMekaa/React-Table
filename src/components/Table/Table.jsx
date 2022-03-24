import React from "react";
import { TableHeader } from "./TableHeader.jsx";
import { TableBody } from "./TableBody.jsx";

export function Table({ headers, slice, ordering, setOrdering }) {
  return (
    <div className='tableWrapper'>
      <table>
        <TableHeader {...{ headers, ordering, setOrdering }} />
        <TableBody {...{ slice }} />
      </table>
    </div>
  )
}