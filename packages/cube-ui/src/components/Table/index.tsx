import React from 'react';
import { Table } from 'antd';
import ColumnCascader from './components/ColumnCascader';

const ProTable: React.FC<any> & { ColumnCascader: typeof ColumnCascader } = (props) => {
    const { columns, ...others } = props;
    const innerColumns = Array.isArray(columns)
        ? columns.map((item) => {
              const { filterMode, filters, ...restItem } = item;
              if (filterMode === 'cascader') {
                  return {
                      ...restItem,
                      filterDropdown: (params: any) => (
                          <ColumnCascader dataLabelsOptions={filters} {...params} />
                      ),
                  };
              }
              return item;
          })
        : [];

    return <Table columns={innerColumns} {...others} />;
};

ProTable.ColumnCascader = ColumnCascader;
export default ProTable;
