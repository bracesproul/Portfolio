import React, {
    useEffect,
    useState,
} from 'react';
import {
    Box,
    Slide,
    IconButton,
    Tooltip, Grid, Button, Typography
} from '@mui/material';
import { useTheme } from '../../hooks/useTheme'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import {Icon} from "@iconify/react";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

interface IOnClickProps {
    onModeClick: (mode:string) => void;
    modeBool: boolean;
}
export default function AppThemeButton({onModeClick, modeBool}:IOnClickProps): JSX.Element {
    const themeHook = useTheme();
    const [currentTheme, setCurrentTheme] = useState<boolean>(true);

    useEffect(() => {
        if (themeHook.mode === 'light') {
            setCurrentTheme(true);
        } else {
            setCurrentTheme(false);
        }
    }, [themeHook.mode])

    return (
        <Box sx={{ display: 'flex', position: 'absolute', top: '0', right: '0', margin: '1rem' }}>
            {currentTheme && (
                <Tooltip title='Toggle Theme'>
                    <Slide
                        direction="down"
                        in={currentTheme}
                        mountOnEnter
                        unmountOnExit
                    >
                        <IconButton
                            aria-label='Toggle Theme'
                            onClick={() => themeHook.changeTheme('dark')}
                            sx={{ marginRight: '1rem' }}
                        >
                            <LightModeIcon />
                        </IconButton>
                    </Slide>
                </Tooltip>
            )}
            {!currentTheme && (
                <Tooltip title='Toggle Theme'>
                    <Slide
                        direction="down"
                        in={!currentTheme}
                        mountOnEnter
                        unmountOnExit
                    >
                        <IconButton
                            aria-label='Toggle Theme'
                            onClick={() => themeHook.changeTheme('light')}
                            sx={{ marginRight: '1rem' }}
                        >
                            <DarkModeIcon />
                        </IconButton>
                    </Slide>
                </Tooltip>
            )}
            <Button
                variant="contained"
                endIcon={ <ArrowCircleRightIcon /> }
                sx={{
                    marginRight: '1rem',
                    background: 'linear-gradient(to right, #74d9eb, #8fb0c7)',
                    "&:hover": {
                        background: 'linear-gradient(to right, #74e5eb, #8fb8c7)',
                    }
                }}
            >
                <Typography sx={{
                    fontWeight: '700',
                    fontSize: '15px',
                }}>
                    Contact
                </Typography>
            </Button>
        </Box>
    )
}