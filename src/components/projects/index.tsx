import TechnologyIcons from "./TechnologyIcons";
import {Box, Card, CardContent, Divider, Grid, Link, Tooltip, Typography} from "@mui/material";
import ProjectTechnologies from "./ProjectTechnologies";
import ProjectLinks from "./ProjectLinks";
import React from "react";
import {Slide} from "@mui/material/";

type TechnologiesObjectProps = {
        name: string,
        icon: JSX.Element,
        url: string
}

type slideProps = "right" | "up" | "left" | "down" | undefined;

type ProjectInfoProps = {
        title: string,
        description: string,
        technologies: {
                frontend: TechnologiesObjectProps[],
                backend: TechnologiesObjectProps[]
        },
        tooltip: string | null,
        siteUrl: string,
        frontendUrl: string,
        backendUrl: string,
        images: string[],
        slide: slideProps,
};

const projectDetails:ProjectInfoProps[] = [
        {
                title: 'Earmark',
                description: 'An all-in-one web application to help you keep track of all your finances, in one place.',
                technologies: {
                        frontend: [
                                { name: 'Next.js', icon: <TechnologyIcons nextIcon />, url: 'https://nextjs.org/' },
                                { name: 'TypeScript', icon: <TechnologyIcons typeScriptIcon />, url: 'https://www.typescriptlang.org/' },
                                { name: 'Firebase', icon: <TechnologyIcons firebaseIcon />, url: 'https://firebase.google.com/' },
                                { name: 'Material-UI', icon: <TechnologyIcons muiIcon />, url: 'https://mui.com/' },
                        ],
                        backend: [
                                { name: 'Node.js', icon: <TechnologyIcons nodeIcon />, url: 'https://nodejs.org/en/' },
                                { name: 'Express', icon: <TechnologyIcons expressIcon />, url: 'https://expressjs.com/' },
                                { name: 'Plaid API', icon: <TechnologyIcons apiIcon />, url: 'https://plaid.com/' },
                        ],
                },
                tooltip: null,
                siteUrl: 'https://earmark-alpha.vercel.app/',
                frontendUrl: 'https://github.com/bracesproul/earmark-frontend',
                backendUrl: 'https://github.com/bracesproul/earmark-backend',
                images: [],
                slide: 'right'
        },
        {
                title: 'Covid Statistics',
                description: 'An application for analyzing COVID-19 statistics, retrieved using a custom web scraper.',
                technologies: {
                        frontend: [
                                { name: 'Next.js', icon: <TechnologyIcons nextIcon />, url: 'https://nextjs.org/' },
                                { name: 'Firebase', icon: <TechnologyIcons firebaseIcon />, url: 'https://firebase.google.com/' },
                                { name: 'CSS', icon: <TechnologyIcons cssIcon />, url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
                        ],
                        backend: [
                                { name: 'Node.js', icon: <TechnologyIcons nodeIcon />, url: 'https://nodejs.org/en/' },
                                { name: 'Express', icon: <TechnologyIcons expressIcon />, url: 'https://expressjs.com/' },
                                { name: 'Puppeteer', icon: <TechnologyIcons puppeteerIcon />, url: 'https://pptr.dev/' },
                        ],
                },
                tooltip: 'The backend server is turned off to conserve funds, data has not been updated since February 3, 2022.',
                siteUrl: 'https://covidstatistics.co/',
                frontendUrl: 'https://github.com/bracesproul/Covid-Statistics',
                backendUrl: 'https://github.com/bracesproul/Web-scraper-and-API',
                images: [],
                slide: 'up'
        },
        {
                title: 'Personal Portfolio',
                description: 'A simple, one page personal portfolio.',
                technologies: {
                        frontend: [
                                { name: 'React.js', icon: <TechnologyIcons reactIcon />, url: 'https://reactjs.org/' },
                                { name: 'TypeScript', icon: <TechnologyIcons typeScriptIcon />, url: 'https://www.typescriptlang.org/' },
                                { name: 'Material-UI', icon: <TechnologyIcons muiIcon />, url: 'https://mui.com/' },
                                { name: 'CSS', icon: <TechnologyIcons cssIcon />, url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
                        ],
                        backend: [],
                },
                tooltip: null,
                siteUrl: '/',
                frontendUrl: 'https://github.com/bracesproul/Portfolio',
                backendUrl: '',
                images: [],
                slide: 'left'
        },
]
export default function Projects(props: {projectsRef: null | React.MutableRefObject<HTMLInputElement>}): JSX.Element {

        function evenOrOdd(num: number) {
                return num % 2 === 0 ? 'right' : 'left';
        }

        return (
            <>
                    <Box sx={{ display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' }, margin: '0 auto', paddingBottom: '5rem'}}>
                            <Grid sx={{ marginTop: '2rem' }} container spacing={2} ref={props.projectsRef} id='projects' >
                                    {projectDetails.map((project, index) => (
                                        <Slide
                                            direction={project.slide}
                                            in={true}
                                            mountOnEnter
                                            unmountOnExit
                                            key={index}
                                        >
                                                <Grid item xs={4}>
                                                        <Card
                                                            key={index}
                                                            elevation={5}
                                                            sx={{
                                                                    width: '500px',
                                                                    padding: '10px',
                                                                    margin: 'auto',
                                                                    minHeight: '450px',
                                                                    justifyContent: 'center',
                                                            }}
                                                        >
                                                                <CardContent>
                                                                        <Typography sx={{
                                                                                fontSize: '24px',
                                                                                fontWeight: '700',
                                                                        }}>
                                                                                {project.title}
                                                                        </Typography>
                                                                        <Typography sx={{
                                                                                fontSize: '20px',
                                                                                fontWeight: '500',
                                                                        }}>
                                                                                {project.description}
                                                                        </Typography>
                                                                        <Divider />
                                                                        <ProjectTechnologies
                                                                            frontend={project.technologies.frontend}
                                                                            backend={project.technologies.backend}
                                                                        />
                                                                        <Divider />
                                                                        <ProjectLinks
                                                                            siteUrl={project.siteUrl}
                                                                            frontendUrl={project.frontendUrl}
                                                                            backendUrl={project.backendUrl}
                                                                            tooltip={project.tooltip}
                                                                        />
                                                                </CardContent>
                                                        </Card>
                                                </Grid>
                                        </Slide>
                                    ))}
                            </Grid>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none' }, flexDirection: 'column', margin: '0 auto', paddingBottom: '5rem', width: '100%', height: '100%', paddingLeft: '2.5%', paddingRight: '2.5%'}}>
                            <Grid sx={{ display: 'flex', flexDirection: 'column', marginTop: '2rem' }} container spacing={2} ref={props.projectsRef} id='projects' >
                                    {projectDetails.map((project, index) => (
                                        <Slide
                                            key={index}
                                            direction={evenOrOdd(index)}
                                            in={true}
                                            mountOnEnter
                                            unmountOnExit
                                        >
                                                <Grid item xs={12}>
                                                        <Card
                                                            key={index}
                                                            elevation={5}
                                                            sx={{
                                                                    maxWidth: '500px',
                                                                    padding: '10px',
                                                                    margin: 'auto',
                                                                    height: '450px',
                                                                    justifyContent: 'center',
                                                            }}
                                                        >
                                                                <CardContent>
                                                                        <Typography sx={{
                                                                                fontSize: '24px',
                                                                                fontWeight: '700',
                                                                        }}>
                                                                                {project.title}
                                                                        </Typography>
                                                                        <Typography sx={{
                                                                                fontSize: '20px',
                                                                                fontWeight: '500',
                                                                        }}>
                                                                                {project.description}
                                                                        </Typography>
                                                                        <Divider />
                                                                        <ProjectTechnologies
                                                                            frontend={project.technologies.frontend}
                                                                            backend={project.technologies.backend}
                                                                        />
                                                                        <Divider />
                                                                        <ProjectLinks
                                                                            siteUrl={project.siteUrl}
                                                                            frontendUrl={project.frontendUrl}
                                                                            backendUrl={project.backendUrl}
                                                                            tooltip={project.tooltip}
                                                                        />
                                                                </CardContent>
                                                        </Card>
                                                </Grid>
                                        </Slide>
                                    ))}
                            </Grid>
                    </Box>
            </>
        )
}