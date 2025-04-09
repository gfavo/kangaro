export type Column<T> = {
    Header: string;
    accessor: keyof T;
  };
  
  export type DashboardTableProps<T> = {
    data: T[];
    columns: Column<T>[];
  };