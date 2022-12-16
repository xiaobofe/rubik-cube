import { createContext, useContext } from 'react';
import LocaleZH from './zh';
import LocaleEN from './en';

export interface Locale {
    [key: string]: any;
}
export const LocaleContext = createContext<Locale>(LocaleZH);
export const locale = { en: LocaleEN, zh: LocaleZH };

export function useLocale(keys?: string[] | string) {
    const localeLang = useContext(LocaleContext);
    if (Array.isArray(keys)) {
        return keys.reduce((cache, key) => {
            cache[key] = Reflect.get(localeLang, key);
            return cache;
        }, {} as any);
    }
    if (typeof keys === 'string') {
        return Reflect.get(localeLang, keys) || {};
    }
    return localeLang;
}
