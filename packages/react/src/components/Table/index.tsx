import clsx from 'clsx';
import React, { ReactNode } from 'react';
import { Text } from '../Typography/Text';
import { Icon } from '../Icons';

interface TableColumn<T> {
  index: string;
  label: string;
  width?: string;
  render?: (data: T) => React.ReactNode;
}

interface TableProps<T> {
  emptyValues?: { icon: ReactNode; title: string; subTitle: string };
  columns: TableColumn<T>[];
  data: T[];
}

export const Table = <T,>({ columns, data, emptyValues }: TableProps<T>) => {
  const wrapperClasses = clsx({
    ['flex items-center justify-center flex-col w-full']: true,
  });
  const tableClasses = clsx({
    ['w-full text-start']: true,
  });
  const theadClasses = clsx({
    ['text-xs font-default text-neutral700 border-t border-b border-neutral100 py-3']:
      true,
  });
  const theadThClasses = clsx({
    ['py-3 font-default font-regular text-start']: true,
  });
  const tbodyTrClasses = clsx({
    ['border-b border-neutral100']: true,
  });
  const tbodyTdClasses = clsx({
    ['text-sm font-default font-regular text-neutral700 py-5 w-40']: true,
  });
  const noDataClasses = clsx({
    ['w-full flex flex-col items-center justify-center py-24']: true,
  });
  const isEmpty = data?.length <= 0;
  return (
    <div className={wrapperClasses}>
      <table className={tableClasses}>
        <thead className={theadClasses}>
          <tr>
            {columns.map((column, index) => (
              <th className={theadThClasses} key={index}>
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr className={tbodyTrClasses} key={rowIndex}>
              {columns.map((column, colIndex) => (
                <td className={tbodyTdClasses} key={colIndex}>
                  {column.render ? column.render(row) : row[column.index]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {isEmpty && (
        <div className={noDataClasses}>
          {emptyValues?.icon ?? (
            <Icon size={48} color="text-brand500" name="inbox-2" />
          )}
          <Text color="text-neutral800" weight="regular" size="lg">
            {emptyValues?.title ?? 'Ainda não há dados cadastrados'}
          </Text>
          <Text color="text-neutral600" weight="regular" size="sm">
            {emptyValues?.subTitle}
          </Text>
        </div>
      )}
    </div>
  );
};
