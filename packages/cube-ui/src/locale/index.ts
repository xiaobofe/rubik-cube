import { createContext } from 'react';
import LocaleZH from './zh';
import LocaleEN from './en';

export interface Locale {
    [key: string]: any;
}
export const LocaleContext = createContext<Locale>(LocaleZH);
export const locale = { en: LocaleEN, zh: LocaleZH };
