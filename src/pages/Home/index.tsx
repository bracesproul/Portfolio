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

function NavBar() {
    return (
        <>
        <Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                paddingTop: '5rem',
                paddingLeft: '5rem'
            }}>
                <Typography variant="h1" sx={{
                    fontSize: '45px',
                    fontWeight: '700',
                    padding: '15px'
                }}>
                    Hey, I'm Brace!
                </Typography>
                <Typography variant='h3' sx={{
                    fontSize: '25px',
                    maxWidth: '450px',
                    padding: '15px'
                }}>
                    I'm a full-stack developer who loves building things, and solving problems.
                </Typography>
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                paddingLeft: '6rem',
            }}>
                <Button sx={{ marginRight: '5px' }} variant="contained" startIcon={<TwitterIcon/>}>
                    Twitter
                </Button>
                <Button sx={{ marginLeft: '5px', marginRight: '5px' }} variant="contained" startIcon={<LinkedInIcon/>}>
                    LinkedIn
                </Button>
                <Button sx={{ marginLeft: '5px' }} variant="contained" startIcon={<GitHubIcon/>}>
                    GitHub
                </Button>
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                paddingLeft: '5rem',
            }}>
                <Button sx={{ margin: '1rem' }} variant="contained" >
                    Let's connect!
                </Button>
                <Button sx={{ margin: '1rem' }} variant="contained">
                    My Portfolio
                </Button>
            </Box>
        </Box>
        </>

    )
}

function Portfolio() {
    return (
        <>
        <Box>
            <Card sx={{
                display: 'flex',
                width: '370px'
            }}>
                <CardMedia
                    component="img"
                    height="186"
                    image="https://firebasestorage.googleapis.com/v0/b/portfolio-c2e19.appspot.com/o/new_covid_homepage.png?alt=media&token=4304f493-ba9b-4cb3-bf81-1d85d9de7191"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Covid Statistics
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Web app for displaying COVID-19 statistics. Built with Next.js, Firebase, and Chart.js.
                        Backend is a Node.js Express server and a custom web scraper to get COVID-19 statistics.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </Box>
        </>
    )
}

//export default Home;

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









