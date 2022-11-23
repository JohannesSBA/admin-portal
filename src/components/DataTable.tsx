import React from "react";
import { AirtableResponse, ScheduledSlot } from "../types";

import "./DataTable.css";

interface Props {
  columnHeaders: string[];
  dataRows: (string | number | JSX.Element)[][];
}
export const DataTable: React.FC<Props> = ({
  columnHeaders,
  dataRows,
}: Props) => {
  return (
    <div className="hide-scroll h-full w-full overflow-scroll rounded-lg border-4 border-softGrayWhite">
      <table className="table w-full border-separate border-spacing-0  rounded-lg">
        <thead className="sticky top-0  border-b-2 border-newLeafGreen bg-softBeige ">
          <tr>
            {columnHeaders.map((h, i) => {
              return (
                <th
                  key={i}
                  className="border-b-2 border-newLeafGreen bg-softBeige p-4 text-newLeafGreen"
                >
                  {h}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {dataRows.map((row) => {
            const [id, ...data] = row;
            if (typeof id !== "string" && typeof id !== "number") {
              console.error("Something went wrong hahaha");
              return;
            }
            return (
              <tr key={id}>
                {data.map((datum, idx) => {
                  return (
                    <td
                      key={idx}
                      className="border border-newLeafGreen bg-softBeige px-4 py-2 text-center align-middle text-newLeafGreen"
                    >
                      {datum}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
