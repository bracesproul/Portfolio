import {Box, Slide, Typography} from "@mui/material";
import React from "react";

export default function IntroductionHeader(): JSX.Element {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            margin: 'auto'
        }}>
            <Slide direction="down" in={true} mountOnEnter unmountOnExit>
                <Typography sx={{
                    fontSize: '60px',
                    fontWeight: '900',
                    letterSpacing: '-5px',
                    lineHeight: '60px'
                }}>
                    Hey,
                </Typography>
            </Slide>
            <Slide direction="down" in={true} mountOnEnter unmountOnExit>
                <Typography sx={{
                    fontSize: '60px',
                    fontWeight: '900',
                    letterSpacing: '-5px',
                    lineHeight: '60px'
                }}>
                    I'm Brace!
                </Typography>
            </Slide>
        </Box>
    )
}
