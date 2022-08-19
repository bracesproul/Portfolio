import {Box, Card, CardContent, Link, Slide, Typography} from "@mui/material";
import React from "react";

interface IIntroductionCardProps {
    scrollHandler: () => void;
}

export default function IntroductionCard(props: {projectsRef: null | React.MutableRefObject<HTMLInputElement>}): JSX.Element {
    function scrollHandler(): void {
        props.projectsRef?.current?.scrollIntoView({behavior: 'smooth'});
        console.log('scroll handler running')
    }
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: '100%',
            margin: 'auto',
            paddingTop: '5rem',
        }}>
            <Slide direction="right" in={true} mountOnEnter unmountOnExit>
                <Card
                    elevation={5}
                    sx={{
                        maxWidth: '500px',
                        display: 'flex',
                        flexDirection: 'column',
                        margin: 'auto',
                    }}>
                    <CardContent>
                        <Typography sx={{
                            fontSize: '24px',
                            fontWeight: '500',
                        }}>
                            A little bit about me...
                        </Typography>
                        <Typography sx={{
                            fontSize: '20px',
                            fontWeight: '500',
                        }}>
                            I'm a self taught software engineer from Berkeley California, interested in web development and DevOps.
                            My current stack is JavaScript, React, and Node. At the moment, I'm teaching myself the ins and outs of Docker and Kubernetes.
                        </Typography>
                        <Typography sx={{
                            fontSize: '20px',
                            fontWeight: '700',
                            paddingTop: '7px',
                            textDecoration: 'underline',
                            textUnderlineOffset: '5px',
                            transition: 'all 0.2s ease-in-out',
                            letterSpacing: '-0.3px',
                        }}>
                            <Link
                                sx={{
                                    textDecoration: 'none',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s ease-in-out',
                                    '&:hover': {
                                        color: '#18ab02',
                                        letterSpacing: '0px',
                                    }
                                }}
                                onClick={() => scrollHandler()}
                            >
                                Check out some of my projects by clicking  here.
                            </Link>
                        </Typography>
                        <Typography sx={{
                            fontSize: '20px',
                            fontWeight: '700',
                            paddingTop: '7px',
                            textDecoration: 'underline',
                            textUnderlineOffset: '5px',
                            transition: 'all 0.2s ease-in-out',
                            letterSpacing: '-0.3px',
                        }}>
                            <Link
                                sx={{
                                    textDecoration: 'none',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s ease-in-out',
                                    '&:hover': {
                                        color: '#18ab02',
                                        letterSpacing: '0px',
                                    }
                                }}
                                href='https://docs.google.com/document/d/1qXc6X8zTBI7bM-9Qs8wuiB5LOpJqNZSzRNSndyQ0leA/edit?usp=sharing'
                            >
                                View my resume here.
                            </Link>
                        </Typography>
                    </CardContent>
                </Card>
            </Slide>
        </Box>
    )
}