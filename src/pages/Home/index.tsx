import React, {
    useEffect,
    useRef,
} from "react";
import {
    Box,
    Button,
    Typography,
    Card,
    CardMedia,
    CardContent,
    CardActions,
} from '@mui/material/';
import NavBar from '../../components/header/navBar'
import { useTheme } from '../../hooks/useTheme';
import AppTheme from '../../components/theme';
import Projects from '../../components/projects';
import Introduction from '../../components/header';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';


interface IIntroductionCardProps {
    scrollHandler: () => void;
}

export default function Main(): JSX.Element {
    const themeHook = useTheme();
    const [mode, setMode] = React.useState<string | null>('light');
    const [modeBool, setModeBool] = React.useState<boolean>(true);
    const isMounted = useRef(false);
    // const projectsRef = useRef<null | HTMLDivElement>(null);
    const projectsRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;

    const getDesignTokens = (mode:string | null) => ({
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
    });

    useEffect(() => {
        if (!isMounted.current) {
            setModeBool(true);
        }
    }, [])


    useEffect(() => {
        if (mode === 'light') {
            setModeBool(true);
        } else {
            setModeBool(false);
        }
    }, [mode]);

    // Update the theme only if the mode changes
    const theme = React.useMemo(() => createTheme(getDesignTokens(mode) as any), [mode]);

    useEffect(() => {
        localStorage.getItem('mode') === 'dark' ? setMode('dark') : setMode('light');
    }, []);

    function onModeClick(mode:string): void {
        setLocalStorageMode(mode);
        setMode(mode);
    }

    function setLocalStorageMode(currentMode:string): void {
        localStorage.setItem('mode', currentMode);
    }

    return (
        <ThemeProvider theme={themeHook.theme}>
            <CssBaseline />
            <Box sx={{
                width: '100%',
                height: '100%',
            }}>
                <NavBar onModeClick={onModeClick} modeBool={!modeBool} />
                <AppTheme onModeClick={onModeClick} modeBool={!modeBool} />
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    margin: 'auto',
                    marginTop: '5rem',
                }}>
                    <Introduction projectsRef={projectsRef} />
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    margin: 'auto',
                }}>
                    <Projects projectsRef={projectsRef} />
                </Box>
            </Box>
        </ThemeProvider>
    )
}









