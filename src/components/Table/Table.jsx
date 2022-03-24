import React from "react";
import { TableHeader } from "./TableHeader";
import { TableBody } from "./TableBody";

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