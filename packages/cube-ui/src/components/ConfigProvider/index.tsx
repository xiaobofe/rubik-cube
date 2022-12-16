import React from 'react';
import { ConfigProvider as AntdConfigProvider } from 'antd';
import enUS from 'antd/es/locale/en_US';
import zhCN from 'antd/es/locale/zh_CN';
import { LocaleContext, locale } from '../../locale';
import { CSSVarsContext, getCssVariables } from '../../theme';

interface IProps {
    lang: 'en' | 'zh';
    theme: 'light' | 'dark';
    [key: string]: any;
}

const ConfigProvider: React.FC<IProps> = (props) => {
    const { lang, children, theme } = props;

    return (
        <AntdConfigProvider locale={lang === 'en' ? enUS : zhCN}>
            <LocaleContext.Provider value={locale[lang || 'zh']}>
                <CSSVarsContext.Provider value={getCssVariables(theme)}>
                    {children}
                </CSSVarsContext.Provider>
            </LocaleContext.Provider>
        </AntdConfigProvider>
    );
};

export default ConfigProvider;
