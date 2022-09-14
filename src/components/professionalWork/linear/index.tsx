import {
    Box,
    Card,
    CardContent,
    Divider,
    Grid, Link,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Slide,
    Typography
} from "@mui/material";
import { Icon } from '@iconify/react';
import React from "react";
import ProjectTechnologies from "../../projects/ProjectTechnologies";
import ProjectLinks from "../../projects/ProjectLinks";
import CircleIcon from '@mui/icons-material/Circle';

interface ITechnologies {
    name: string,
    Icon: JSX.Element,
    url: string,
}

interface ILinearData {
    bulletPoints: string[],
    technologies: ITechnologies[]
}

const linear_data:ILinearData = {
    bulletPoints: [
        'Architected a new client onboarding process',
        'Integrated Stripe API for processing payments',
        'Custom ticket transcripts and logs',
        'Simple, intuitive question flow for a good user experience'
    ],
    technologies: [
        {
            name: 'Node.js',
            Icon: <Icon icon="akar-icons:node-fill" />,
            url: 'https://'
        },
        {
            name: 'Express.js',
            Icon: <Icon icon="simple-icons:express" />,
            url: 'https://'
        },
        {
            name: 'Stripe API',
            Icon: <Icon icon="bxl:stripe" />,
            url: 'https://'
        },
        {
            name: 'Discord.js',
            Icon: <Icon icon="carbon:logo-discord" />,
            url: 'https://'
        }
    ]
}

export default function LinearCardUI(): JSX.Element {
    const [screenWidth, setScreenWidth] = React.useState<any>(window.innerWidth * .9);
    function evenOrOdd(num: number) {
        return num % 2 === 0 ? 'right' : 'left';
    }

    React.useEffect(() => {
        setScreenWidth(window.innerWidth);
    }, [])

    return (
        <>
            <Box sx={{ display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' }, height: '100%', width: '100%', margin: '0 auto', paddingBottom: '2rem', paddingTop: '5rem' }}>
                <Slide
                    direction='right'
                    in={true}
                    mountOnEnter
                    unmountOnExit
                >
                    <Card
                        elevation={5}
                        sx={{
                            maxWidth: '500px',
                            padding: '10px',
                            margin: 'auto',
                            minHeight: 'maxContent',
                            justifyContent: 'center',
                        }}
                    >
                        <CardContent>
                            <Typography sx={{
                                fontSize: '24px',
                                fontWeight: '700',
                            }}>
                                Client Onboarding and Initialization
                            </Typography>
                            <Typography sx={{
                                fontWeight: '700',
                                paddingTop: '7px',
                                paddingBottom: '7px',
                            }}>
                                <Link target='_blank' href='https://linear.tools' sx={{
                                    cursor: 'pointer',
                                    textDecoration: 'underline',
                                    textUnderlineOffset: '5px',
                                    transition: 'all 0.2s ease-in-out',
                                    letterSpacing: '-0.3px',
                                    '&:hover': {
                                        color: '#18ab02',
                                        letterSpacing: '0px',
                                    }
                                }}
                                >
                                    Linear Tools
                                </Link>
                            </Typography>
                            <List dense>
                                { linear_data.bulletPoints.map((data, index) => (
                                    <ListItem key={index}>
                                        <ListItemIcon >
                                            <CircleIcon sx={{ height: '10px', width: '10px', marginRight: '-20px', marginBottom: '5px' }} />
                                        </ListItemIcon>
                                        <ListItemText sx={{ marginTop: '-5px', marginLeft: '-25px' }}>
                                            {data}
                                        </ListItemText>
                                    </ListItem>
                                ))}
                            </List>
                            <Divider />
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'row'
                            }}>
                                <List dense>
                                    {linear_data.technologies.map((technology, index) => (
                                        <ListItem key={index}>
                                            <ListItemIcon sx={{
                                                marginRight: '-20px',
                                                marginLeft: '-20px',
                                            }}>
                                                {technology.Icon}
                                            </ListItemIcon>
                                            <ListItemText sx={{ marginTop: '-5px', marginBottom: '-5px' }}>
                                                <Typography sx={{
                                                    fontWeight: '700'
                                                }}>
                                                    <Link href={technology.url} sx={{
                                                        cursor: 'pointer',
                                                        textDecoration: 'underline',
                                                        textUnderlineOffset: '5px',
                                                        transition: 'all 0.2s ease-in-out',
                                                        letterSpacing: '-0.3px',
                                                        '&:hover': {
                                                            color: '#18ab02',
                                                            letterSpacing: '0px',
                                                        }
                                                    }}
                                                    >
                                                        {technology.name}
                                                    </Link>
                                                </Typography>
                                            </ListItemText>
                                        </ListItem>
                                    ))}
                                </List>

                            </Box>

                        </CardContent>
                    </Card>
                </Slide>
            </Box>
            <Box sx={{ display: { xs: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none' }, flexDirection: 'column', margin: '0 auto', paddingBottom: '2rem', paddingTop: '2rem', paddingLeft: '2.5%', paddingRight: '2.5%'}}>
                <Slide
                    direction={evenOrOdd(0)}
                    in={true}
                    mountOnEnter
                    unmountOnExit
                >
                    <Card
                        elevation={5}
                        sx={{
                            maxWidth: `95%`,
                            padding: '10px',
                            margin: 'auto',
                            height: 'maxContent',
                            justifyContent: 'center',
                        }}
                    >
                        <CardContent>
                            <Typography sx={{
                                fontSize: '24px',
                                fontWeight: '700',
                            }}>
                                Client Onboarding and Initialization
                            </Typography>
                            <List dense>
                                { linear_data.bulletPoints.map((data, index) => (
                                    <ListItem key={index}>
                                        <ListItemIcon >
                                            <CircleIcon sx={{ height: '10px', width: '10px', marginRight: '-20px', marginBottom: '5px' }} />
                                        </ListItemIcon>
                                        <ListItemText sx={{ marginTop: '-5px', marginLeft: '-25px' }}>
                                            {data}
                                        </ListItemText>
                                    </ListItem>
                                ))}
                            </List>
                            <Divider />
                            <List dense>
                                {linear_data.technologies.map((technology, index) => (
                                    <ListItem key={index}>
                                        <ListItemIcon sx={{
                                            marginRight: '-20px',
                                            marginLeft: '-20px',
                                        }}>
                                            {technology.Icon}
                                        </ListItemIcon>
                                        <ListItemText sx={{ marginTop: '-5px', marginBottom: '-5px' }}>
                                            <Typography sx={{
                                                fontWeight: '700'
                                            }}>
                                                <Link href={technology.url} sx={{
                                                    cursor: 'pointer',
                                                    textDecoration: 'underline',
                                                    textUnderlineOffset: '5px',
                                                    transition: 'all 0.2s ease-in-out',
                                                    letterSpacing: '-0.3px',
                                                    '&:hover': {
                                                        color: '#18ab02',
                                                        letterSpacing: '0px',
                                                    }
                                                }}
                                                >
                                                    {technology.name}
                                                </Link>
                                            </Typography>
                                        </ListItemText>
                                    </ListItem>
                                ))}
                            </List>
                            <Divider />
                        </CardContent>
                    </Card>
                </Slide>
            </Box>
        </>
    )
}