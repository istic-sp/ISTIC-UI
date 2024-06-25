import React from 'react';
import clsx from 'clsx';
import { Text } from '../Typography/Text';
import { Icon } from '../Icons';
import { Pagination, PaginationProps } from './Pagination';
import { Loader } from '../Loader';

export interface TableColumn<T> {
  index: string;
  label: string;
  width?: string;
  align?: 'left' | 'center' | 'right';
  render?: (data: T) => React.ReactNode;
}

interface TableProps<T> {
  columns: TableColumn<T>[];
  data: T[];
  emptyValues?: { icon?: React.ReactNode; title?: string; subTitle?: string };
  pagination?: PaginationProps;
  isLoading?: boolean;
  height?: string;
}

export const Table = <T,>({
  columns,
  data,
  emptyValues,
  pagination,
  isLoading = false,
}: TableProps<T>) => {
  const wrapperClasses = clsx(
    'flex items-start z-0 justify-center flex-col w-full ',
  );
  const tableClasses = clsx('w-full overflow-x-auto');
  const theadClasses = clsx(
    'text-xs font-default text-neutral700 border-t border-b border-neutral100 py-3',
  );
  const theadThClasses = clsx('py-3 font-default font-regular');
  const tbodyTrClasses = clsx('border-b border-neutral100');
  const tbodyTdClasses = clsx(
    'text-sm font-default font-regular text-neutral700 py-5',
  );
  const noDataClasses = clsx(
    'w-full flex flex-col items-center justify-center py-24',
  );
  const loadingClasses = clsx(
    'w-full flex flex-col items-center justify-center py-24',
  );

  const generateCellStyle = (
    column: TableColumn<T>,
    index: number,
  ): React.CSSProperties => {
    const style: React.CSSProperties = {};
    const alignment = column.align || 'left';
    style.textAlign = alignment;
    style.paddingInline = 16;
    if (column.width) {
      style.width = column.width;
    }
    if (index === 0) {
      style.paddingLeft = 0;
    }
    if (index === columns.length - 1) {
      style.paddingRight = 0;
    }
    return style;
  };

  const isEmpty = data?.length <= 0;
  return (
    <div className={wrapperClasses}>
      <div className="w-full overflow-auto  md:overflow-visible">
        <table className={tableClasses}>
          <thead className={theadClasses}>
            <tr>
              {columns.map((column, index) => (
                <th
                  className={theadThClasses}
                  style={generateCellStyle(column, index)}
                  key={index}
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody style={isLoading ? { display: 'none' } : {}}>
            {data.map((row, rowIndex) => (
              <tr className={tbodyTrClasses} key={rowIndex}>
                {columns.map((column, colIndex) => (
                  <td
                    className={tbodyTdClasses}
                    style={generateCellStyle(column, colIndex)}
                    key={colIndex}
                  >
                    {column.render ? column.render(row) : row[column.index]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isLoading && (
        <div className={loadingClasses}>
          <Loader size="xl" width="slim" color="border-brand500" />
        </div>
      )}
      {!isEmpty && !isLoading && pagination && (
        <div className="flex items-center justify-center w-full pt-4">
          <Pagination pagination={pagination} />
        </div>
      )}

      {isEmpty && !isLoading && (
        <div className={noDataClasses}>
          {emptyValues?.icon ?? (
            <Icon size={48} color="text-brand500" name="inbox-2" />
          )}
          <Text
            color="text-neutral800"
            weight="regular"
            size="lg"
            style={{
              textAlign: 'center',
            }}
          >
            {emptyValues?.title ?? 'There is no added items'}
          </Text>
          <Text
            color="text-neutral600"
            weight="regular"
            size="sm"
            style={{
              textAlign: 'center',
            }}
          >
            {emptyValues?.subTitle}
          </Text>
        </div>
      )}
    </div>
  );
};
Table.displayName = 'Table';
