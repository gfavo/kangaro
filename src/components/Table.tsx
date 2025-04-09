import React from "react";

type Column<T> = {
  Header: string;
  accessor: keyof T;
};

type DashboardTableProps<T> = {
  data: T[];
  columns: Column<T>[];
};

export const DashboardTable = <T,>({ data, columns }: DashboardTableProps<T>) => {
  return (
    <div className="w-full overflow-x-auto px-4 py-6">
      <table className="min-w-full text-sm text-left text-gray-600 font-poppins bg-white/50 shadow-md rounded-2xl overflow-hidden">
        <thead className="text-xs text-gray-400 uppercase bg-gray-100/50 border-b border-gray-300/20 font-barlow">
          <tr>
            {columns.map((col) => (
              <th key={String(col.accessor)} className="px-6 py-4">
                {col.Header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="hover:bg-gray-200/40 transition duration-150"
              >
                {columns.map((col) => (
                  <td
                    key={String(col.accessor)}
                    className="px-6 py-4 border-b border-gray-300/10"
                  >
                    {String(row[col.accessor])}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={columns.length}
                className="text-center px-6 py-8 text-gray-400 italic"
              >
                Nenhum dado encontrado
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};