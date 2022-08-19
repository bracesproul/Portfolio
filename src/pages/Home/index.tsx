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
    const projectsRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;

    return (
        <ThemeProvider theme={themeHook.theme}>
            <CssBaseline />
            <Box sx={{
                width: '100%',
                height: '100%',
            }}>
                <Box
                    sx={{
                        position: 'fixed',
                        top: '0',
                        left: '0',
                        width: '100vw',
                        zIndex: '99',
                    }}
                >
                    <NavBar />
                    <AppTheme />
                </Box>
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









