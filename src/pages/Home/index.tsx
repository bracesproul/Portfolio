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
import ProfessionalWork from '../../components/professionalWork'
import MyStack from "../../components/myStack";
import FooterUI from "../../components/footerUI";
import moment from "moment";
import axios from 'axios';

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
                <NavBar />
                <AppTheme />
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
                    marginTop: '5rem',
                }}>
                    <Typography sx={{
                        display: 'flex',
                        margin: 'auto',
                        fontSize: { xs: '25px', sm: '30px', md: '45px', lg: '45px', xl: '45px' },
                        fontWeight: '900',
                        letterSpacing: { xs: '-2px', sm: '-2px', md: '-3px', lg: '-3px', xl: '-3px' },
                        lineHeight: '60px'
                    }}>
                        My Stack
                    </Typography>
                </Box>
                <MyStack />

                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    margin: 'auto',
                    marginTop: '5rem',
                }}>
                    <Typography sx={{
                        display: 'flex',
                        margin: 'auto',
                        fontSize: { xs: '25px', sm: '30px', md: '45px', lg: '45px', xl: '45px' },
                        fontWeight: '900',
                        letterSpacing: { xs: '-2px', sm: '-2px', md: '-3px', lg: '-3px', xl: '-3px' },
                        lineHeight: '60px'
                    }}>
                        Professional Work
                    </Typography>
                </Box>
                <ProfessionalWork />

                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    margin: 'auto',
                    marginTop: '5rem',
                }}>
                    <Typography sx={{
                        display: 'flex',
                        margin: 'auto',
                        fontSize: { xs: '25px', sm: '30px', md: '45px', lg: '45px', xl: '45px' },
                        fontWeight: '900',
                        letterSpacing: { xs: '-2px', sm: '-2px', md: '-3px', lg: '-3px', xl: '-3px' },
                        lineHeight: '60px'
                    }}>
                        Personal Projects
                    </Typography>
                    <Projects projectsRef={projectsRef} />
                </Box>
                <FooterUI />
            </Box>
        </ThemeProvider>
    )
}









