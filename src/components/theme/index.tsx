import React, {useEffect} from 'react';
import { Box,
    Slide,
    IconButton,
    Tooltip
} from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

interface IOnClickProps {
    onModeClick: (mode:string) => void;
    modeBool: boolean;
}
export default function AppThemeButton({onModeClick, modeBool}:IOnClickProps): JSX.Element {

    return (
        <Box sx={{ display: 'flex', position: 'absolute', top: '0', right: '0', margin: '1rem' }}>

            {!modeBool && (
                <Tooltip title='Toggle Theme'>
                    <Slide direction="down" in={!modeBool} mountOnEnter unmountOnExit>
                        <IconButton aria-label='Toggle Theme' onClick={() => onModeClick('dark')}>
                            <LightModeIcon />
                        </IconButton>
                    </Slide>
                </Tooltip>
            )}
            {modeBool && (
                <Tooltip title='Toggle Theme'>
                    <Slide direction="left" in={modeBool} mountOnEnter unmountOnExit>
                        <IconButton aria-label='Toggle Theme' onClick={() => onModeClick('light')}>
                            <DarkModeIcon />
                        </IconButton>
                    </Slide>
                </Tooltip>
            )}
        </Box>
    )
}