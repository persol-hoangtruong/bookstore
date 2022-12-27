import {
  SpinProps,
  Table as AntTable,
  TableProps as AntTableProps,
} from "antd";
import { ColumnsType } from "antd/lib/table";
import { TableRowSelection } from "antd/lib/table/interface";

import { SizeType } from "~@/constants/types";


declare type RecordType = {
  [key: string]: unknown;
};
export interface TableProps
  extends Omit<
  AntTableProps<RecordType>,
  | "transformColumns"
  | "internalHooks"
  | "internalRefs"
  | "data"
  | "columns"
  | "scroll"
  | "emptyText"
  > {
  size?: SizeType;
  loading?: boolean | SpinProps;
  bordered?: boolean;
  columns?: ColumnsType<RecordType>;
  dataSource?: RecordType[];
  rowSelection?: TableRowSelection<RecordType>;
  scroll?: AntTableProps<RecordType>["scroll"] & {
    scrollToFirstRowOnChange?: boolean;
  };
}

export function Table(props: TableProps) {
  return <AntTable {...props} />;
}
