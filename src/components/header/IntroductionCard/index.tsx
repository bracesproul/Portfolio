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
                            fontSize: '26px',
                            fontWeight: '500',
                        }}>
                            A little bit about me...
                        </Typography>
                        <Typography sx={{
                            fontSize: '20px',
                            fontWeight: '500',
                        }}>
                            I'm a self taught software engineer from Berkeley, California, interested in web development and DevOps.
                            My current stack is JavaScript, React, and Node. Currently, I'm teaching myself the ins and outs of Docker and Kubernetes.
                        </Typography>
                        <Typography sx={{
                            fontSize: '20px',
                            fontWeight: '500',
                            paddingTop: '7px',
                        }}>
                            Check out come of my projects by clicking <Link
                            sx={{ cursor: 'pointer' }}
                            onClick={() => scrollHandler()}
                        >here</Link>.
                        </Typography>
                    </CardContent>
                </Card>
            </Slide>
        </Box>
    )
}