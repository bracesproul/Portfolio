import React, {
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
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Projects from '../../components/projects';
import Introduction from '../../components/header';

interface IIntroductionCardProps {
    scrollHandler: () => void;
}

export default function Main(): JSX.Element {

    // const projectsRef = useRef<null | HTMLDivElement>(null);
    const projectsRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;

    const getDesignTokens = (mode:string) => ({
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

    return (
        <Box sx={{
            width: '100%',
            height: '100%',
            marginTop: '5rem',
        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                margin: 'auto',
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
    )
}









