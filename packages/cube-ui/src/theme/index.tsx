import { createContext, useContext } from 'react';
import cssVars from 'css-vars-ponyfill';
import themeColors from './color';

type Theme = 'light' | 'dark';

/**
 *   hex2rgb ( 十六进制 转 rgb)
 * @param rgb 颜色
 * @returns {string}
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const hex2rgb = (hex: string, weight: number) => {
    // 十六进制颜色值的正则表达式
    // eslint-disable-next-line prefer-regex-literals
    const reg = new RegExp('^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$');
    //  16进制颜色转为RGB格式
    let color = hex ? hex.toLowerCase() : hex;
    if (color && reg.test(color)) {
        if (color.length === 4) {
            let colorNew = '#';
            for (let i = 1; i < 4; i += 1) {
                colorNew += color.slice(i, i + 1).concat(color.slice(i, i + 1));
            }
            color = colorNew;
        }
        //  处理六位的颜色值
        const colorChange = [];
        for (let i = 1; i < 7; i += 2) {
            colorChange.push(parseInt(`0x${color.slice(i, i + 2)}`, 10));
        }

        if (weight) {
            return `rgba(${colorChange.join(',')},${weight})`;
        }

        return colorChange.join(',');
    }
    return color;
};

export function getCssVariables(theme?: Theme) {
    const color = theme ? themeColors[theme] : themeColors.light;
    return {
        // 公共基础色
        '--c-primary': color.C01,
        // 文字色
        // 填充色
        // 边框分割线色
    };
}

export const CSSVarsContext = createContext(getCssVariables('light'));
export function useTheme() {
    const variables = useContext(CSSVarsContext);
    cssVars({
        watch: true, // 当添加，删除或修改其或元素的禁用或href属性时，ponyfill将自行调用
        variables, // variables自定义属性名/值对的集合
        onlyLegacy: true, // false 默认将css变量编译为浏览器识别的css样式 true 当浏览器不支持css变量的时候将css变量编译为识别的css
    });
}
