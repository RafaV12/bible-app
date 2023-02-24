import React, { Dispatch, SetStateAction, createContext, useContext, useState, useEffect } from 'react';

import { getItem, setItem } from '@/utils';

type Props = {
  children: React.ReactNode;
};

type Context = {
  fontSizeContext: string;
  setFontSizeContext: Dispatch<SetStateAction<string>>;
  fontSizeOptions: { [key: string]: string };
  changeFontSize: () => void;
};

const FontSizeContext = createContext<Context | null>(null);

export const FontSizeContextProvider = ({ children }: Props) => {
  const initialState = getItem('font-size') ? getItem('font-size') : 'md';
  const [fontSizeContext, setFontSizeContext] = useState<string>(initialState);
  const fontSizeOptions: { [key: string]: string } = {
    sm: '14px',
    md: '16px',
    lg: '20px',
    xl: '24px',
  };
  const changeFontSize = () => {
    switch (fontSizeContext) {
      case 'sm':
        setFontSizeContext('md');
        break;
      case 'md':
        setFontSizeContext('lg');
        break;
      case 'lg':
        setFontSizeContext('xl');
        break;
      case 'xl':
        setFontSizeContext('sm');
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    setItem('font-size', fontSizeContext);
  }, [fontSizeContext]);

  return (
    <FontSizeContext.Provider
      value={{
        fontSizeContext,
        setFontSizeContext,
        fontSizeOptions,
        changeFontSize,
      }}
    >
      {children}
    </FontSizeContext.Provider>
  );
};

export const useFontSizeContext = () => {
  const context = useContext(FontSizeContext);

  if (!context) throw new Error('FontSizeContext must be called from within the FontSizeContextProvider');

  return context;
};
