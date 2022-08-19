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
                    letterSpacing: { xs: '-4px', sm: '-4px', md: '-5px', lg: '-5px', xl: '-5px' },
                    lineHeight: '60px'
                }}>
                    Hey,
                </Typography>
            </Slide>
            <Slide direction="right" in={true} mountOnEnter unmountOnExit>
                <Typography sx={{
                    fontSize: { xs: '50px', sm: '55px', md: '70px', lg: '70px', xl: '70px' },
                    fontWeight: '900',
                    letterSpacing: { xs: '-4px', sm: '-4px', md: '-5px', lg: '-5px', xl: '-5px' },
                    lineHeight: '60px',
                    background: 'linear-gradient(to right, #74d9eb, #8fb0c7)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                }}>
                    I'm Brace!
                </Typography>
            </Slide>
        </Box>
    )
}
