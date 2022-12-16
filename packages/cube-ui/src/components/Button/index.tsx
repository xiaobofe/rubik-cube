import React from 'react';
import { useLocale } from '../../locale';

const Button = ({ title }: { title: string }) => {
    const locale = useLocale(['Demo']);
    console.log(locale, 190900);
    return <h1>{title}</h1>;
};

export default Button;
