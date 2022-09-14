import React from 'react';
import { Box, Typography, Link, Divider } from "@mui/material";

export default function FooterUI() {
    return (
        <footer>
            <Box sx={{
                height: '5rem',
                paddingBottom: '1rem',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
            }}>
                <Typography>
                    Made with ❤ by <Link color='inherit' rel='noopener' target='_blank' href='https://twitter.com/BraceSproul'>Brace</Link>
                </Typography>
            </Box>
        </footer>
    )
}