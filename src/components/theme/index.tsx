import React, {useEffect} from 'react';
import { Box,
    Slide,
    IconButton,
    Tooltip
} from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

export default function AppThemeButton() {

    return (
        <Box sx={{ display: 'flex', position: 'absolute', top: '0', right: '0', margin: '1rem' }}>
            <Tooltip title='Toggle Theme'>
                <Slide direction="left" in={false} mountOnEnter unmountOnExit>
                    <IconButton aria-label='Toggle Theme' onClick={() => {
                    }}>
                        <LightModeIcon />
                    </IconButton>
                </Slide>
            </Tooltip>
            <Tooltip title='Toggle Theme'>
                <Slide direction="right" in={true} mountOnEnter unmountOnExit>
                    <IconButton aria-label='Toggle Theme' onClick={() => {
                    }}>
                        <DarkModeIcon />
                    </IconButton>
                </Slide>
            </Tooltip>
        </Box>
    )
}