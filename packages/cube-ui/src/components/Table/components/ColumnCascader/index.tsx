/* eslint-disable @typescript-eslint/no-unused-expressions */
// eslint-disable-next-line @typescript-eslint/no-unused-expressions
import { Menu, Checkbox, Button } from 'antd';
import React from 'react';
import { RightOutlined } from '@ant-design/icons';
import classnames from 'classnames';

import { useLocale } from '../../../../locale';
import './index.less';

interface DataLabelOptionItem {
    value: string | number;
    text: string;
}

interface DataLabelOptions extends DataLabelOptionItem {
    value: string | number;
    text: string;
    children: DataLabelOptionItem[];
}

interface IProps {
    dataLabelsOptions: DataLabelOptions[];
    [key: string]: any;
}

const ColumnCascader: React.FC<IProps> = (props) => {
    const {
        dataLabelsOptions,
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
        onSearch,
        onSearchReset,
    } = props;
    const [dataLabels, setDataLabels] = React.useState<any>({});
    const [leftMenuSelectKeys, setLeftMenuSelectKeys] = React.useState<string[]>([]);
    const locale = useLocale(['Common']);

    const handleSearch = (currentSelectedKeys: any) => {
        confirm();
        onSearch && onSearch(currentSelectedKeys);
    };

    const handleSerchReset = () => {
        clearFilters();
        onSearchReset && onSearchReset();
    };

    React.useEffect(() => {
        if (dataLabelsOptions) {
            setLeftMenuSelectKeys([
                dataLabelsOptions[0]?.value ? String(dataLabelsOptions[0]?.value) : '',
            ]);
            setDataLabels(dataLabelsOptions[0]);
        }
    }, [dataLabelsOptions]);

    const handleLeftMenuItemClick = (e: any) => {
        setLeftMenuSelectKeys(e.key);
        setDataLabels((dataLabelsOptions || []).find((item) => String(item.value) === e.key));
    };

    const handleRightMenuItemClick = (e: any) => {
        let newSelectkeys = [];
        if ((selectedKeys || []).includes(e.key)) {
            selectedKeys.splice(selectedKeys.indexOf(e.key), 1);
            newSelectkeys = selectedKeys.slice();
        } else {
            newSelectkeys = [...selectedKeys, e.key];
        }
        setSelectedKeys(newSelectkeys);
    };

    return (
        <div>
            <div className="cube-column__cascader-content">
                <Menu
                    className="cube-column__cascader-menu"
                    onClick={handleLeftMenuItemClick}
                    selectedKeys={leftMenuSelectKeys}
                >
                    {(dataLabelsOptions || []).map((item) => (
                        <Menu.Item
                            className={classnames(
                                'cube-column__cascader-menu_item',
                                'cube-column__cascader-menu_left',
                            )}
                            key={item.value}
                        >
                            <span>{item.text}</span>
                            <RightOutlined />
                        </Menu.Item>
                    ))}
                </Menu>
                <Menu
                    className="cube-column__cascader-menu"
                    onClick={handleRightMenuItemClick}
                    selectedKeys={selectedKeys}
                >
                    {(dataLabels?.children || []).map((dataLabel: DataLabelOptionItem) => (
                        <Menu.Item
                            className={classnames(
                                'cube-column__cascader-menu_item',
                                'cube-column__cascader-menu_right',
                            )}
                            key={dataLabel.value}
                        >
                            <Checkbox
                                checked={(selectedKeys || []).includes(String(dataLabel.value))}
                            />
                            <span>{dataLabel.text}</span>
                        </Menu.Item>
                    ))}
                </Menu>
            </div>
            <div className="cube-column__cascader-footer">
                <Button
                    onClick={() => handleSerchReset()}
                    disabled={!(selectedKeys && selectedKeys.length)}
                    size="small"
                >
                    {locale.Common.Reset}
                </Button>
                <Button onClick={() => handleSearch(selectedKeys)} type="primary" size="small">
                    {locale.Common.Confirm}
                </Button>
            </div>
        </div>
    );
};

export default ColumnCascader;
