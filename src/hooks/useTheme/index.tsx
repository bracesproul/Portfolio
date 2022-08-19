/* eslint-disable */
import React, {
    useContext,
    createContext,
    useState,
    useMemo, useEffect
} from "react";
import {PaletteMode} from "@mui/material";
import { createTheme } from '@mui/material/styles';

interface IUseProvideTheme {
    theme: any;
    mode: PaletteMode;
    changeTheme: (mode: PaletteMode) => void;
}

type ThemeProviderProps = {
    children?: React.ReactNode;
}

const themeContext = createContext({});

export function ProvideTheme({ children }: ThemeProviderProps): JSX.Element {
    const theme = useProvideTheme();
    return <themeContext.Provider value={theme}>{children}</themeContext.Provider>;
}

const useProvideTheme = () => {
    const [mode, setMode] = useState<PaletteMode>('dark');
    const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

    useEffect(() => {
        const localStorageMode = localStorage.getItem('mode') || 'dark';
        setMode(localStorageMode as PaletteMode );
    }, [])

    function getDesignTokens(mode:PaletteMode) {
        return {
            palette: {
                mode,
                ...(mode === 'light'
                    ? {
                        // palette values for light mode
                        text: {
                            primary: 'rgba(0, 0, 0, 0.87)',
                        },
                        background: {
                            default: '#f2f2f2',
                        }
                    }
                    : {
                        // palette values for dark mode
                        components: {
                            MuiButton: {
                                styleOverrides: {
                                    contained: {
                                        background: 'linear-gradient(to right, #74d9eb, #8fb0c7)',
                                        '&:hover': {
                                            background: 'linear-gradient(to right, #74d9eb, #8fb0c7)',
                                        }
                                    },
                                    root: {
                                        fontWeight: '700',
                                        fontSize: '15px',
                                    },
                                }
                            }
                        },
                        text: {
                            primary: '#f2f2f2'
                        },
                    }),
            },
        }
    }

    /*const getDesignTokens = (mode:PaletteMode) => ({
        palette: {
            mode,
            ...(mode === 'light'
                ? {
                    // palette values for light mode
                    text: {
                        primary: 'rgba(0, 0, 0, 0.87)',
                    },
                    background: {
                        default: '#f2f2f2',
                    }
                }
                : {
                    // palette values for dark mode
                    text: {
                        primary: '#f2f2f2'
                    },
                }),
        },
    });*/

    function changeTheme(mode:PaletteMode): void {
        localStorage.setItem('mode', mode);
        setMode(mode);
    }

    return {
        theme,
        mode,
        changeTheme,
    };
}


export const useTheme = () => useContext(themeContext) as IUseProvideTheme;