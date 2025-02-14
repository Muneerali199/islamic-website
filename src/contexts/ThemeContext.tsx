import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import backgroundImage from '../assets/background-pattern.svg';
import { getDarkColor, getFullDarkColor, getFullLightColor, getLightColor } from './util';

type Theme = {
    colors: {
        primary: {
            main: string;
            light: string;
            fullLight: string;
            dark: string;
            fullDark: string;
            contrastText: string;
        };
        quranPlayer: {
            main: string;
            light: string;
            dark: string;
            contrastText: string;
        };
    };
    background: string;
    dropShadow: string;
    transition: string;
};

type ThemeContextType = {
    theme: Theme,
    setTheme: React.Dispatch<React.SetStateAction<Theme>>
}

/*
    #c18f5c // Brown
    #388ca8 // Light Blue Green
    #547fa3 // Blue
*/

let themeProperties: Theme = {
    colors: {
        primary: {
            main: '#388ca8',
            light: '',
            fullLight: '',
            dark: '',
            fullDark: '',
            contrastText: '',
        },
        quranPlayer: {
            main: '#bf9759',
            light: '#ffeed9',
            dark: '#19130c',
            contrastText: '#fff',
        },
    },
    background: `url(${backgroundImage})`,
    dropShadow: 'drop-shadow(2px 2px 2px #170f052e)',
    transition: 'all 0.3s ease-in-out',
};

themeProperties = fillThemeProperties(themeProperties)

const Context = createContext<ThemeContextType | null>(null);

type ThemeContextProps = {
    readonly children: React.ReactNode;
};

export default function ThemeContext({ children }: ThemeContextProps) {
    const [theme, setTheme] = useState(themeProperties);

    useEffect(() => {
        setTheme((oldTheme) => fillThemeProperties(oldTheme));
    }, [theme.colors.primary.main]);

    const contextValue = useMemo(() => ({
        theme,
        setTheme
    }), [theme]);

    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    )
}

function useThemeContext() {
    const result = useContext(Context);
    if (result == null) {
        throw Error("Error happened while creating the ThemeContext!")
    }
    return result;
}

function fillThemeProperties(theme: Theme) {
    const newTheme = { ...theme };
    newTheme.colors.primary = {
        main: theme.colors.primary.main,
        light: getLightColor(theme.colors.primary.main),
        fullLight: getFullLightColor(theme.colors.primary.main),
        dark: getDarkColor(theme.colors.primary.main),
        fullDark: getFullDarkColor(theme.colors.primary.main),
        contrastText: '#fff',
    }
    newTheme.colors.quranPlayer = {
        main: newTheme.colors.primary.main,
        light: newTheme.colors.primary.fullLight,
        dark: newTheme.colors.primary.fullDark,
        contrastText: newTheme.colors.primary.contrastText,
    };
    return newTheme;
}

export { useThemeContext };