---
order: 1
group:
  path: /数据展示
  title: 数据展示
  order: 1
---

## Table 表格

> 基于 Antd Table 做组件扩展，支持 Antd Table 全部功能，以及部分新增功能

### 级联选择 menu

```tsx
import React from 'react';
import { Table } from 'cube-ui';

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    width: '30%',
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    filters: [
      {
        text: '北京',
        value: '北京',
        children: [
          {
            text: '丰台',
            value: '丰台',
          },
          {
            text: '朝阳',
            value: '朝阳',
          },
        ],
      },
      {
        text: '河北',
        value: '河北',
        children: [
          {
            text: '石家庄',
            value: '石家庄',
          },
          {
            text: '张家口',
            value: '张家口',
          },
        ],
      },
    ],
    filterMode: 'cascader',
    onFilter: (value: string, record) => record.address.startsWith(value),
    filterSearch: true,
    width: '40%',
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: '丰台',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: '朝阳',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: '石家庄',
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: '张家口',
  },
];

const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};

export default () => <Table columns={columns} dataSource={data} onChange={onChange} />;
```
