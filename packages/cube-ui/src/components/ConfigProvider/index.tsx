import React from 'react';
import { ConfigProvider as AntdConfigProvider } from 'antd';
import enUS from 'antd/es/locale/en_US';
import zhCN from 'antd/es/locale/zh_CN';
import { LocaleContext, locale } from '../../locale';

interface IProps {
    lang: 'en' | 'zh';
    [key: string]: any;
}

const ConfigProvider: React.FC<IProps> = (props) => {
    const { lang, children } = props;

    return (
        <AntdConfigProvider locale={lang === 'en' ? enUS : zhCN}>
            <LocaleContext.Provider value={locale[lang || 'zh']}>{children}</LocaleContext.Provider>
        </AntdConfigProvider>
    );
};

export default ConfigProvider;
