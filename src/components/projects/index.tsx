import TechnologyIcons from "./TechnologyIcons";
import {Box, Card, CardContent, Divider, Grid, Link, Typography} from "@mui/material";
import ProjectTechnologies from "./ProjectTechnologies";
import ProjectLinks from "./ProjectLinks";
import React from "react";
import {Slide} from "@mui/material/";

type TechnologiesObjectProps = {
        name: string,
        icon: JSX.Element,
        url: string
}

type ProjectInfoProps = {
        title: string,
        description: string,
        technologies: {
                frontend: TechnologiesObjectProps[],
                backend: TechnologiesObjectProps[]
        },
        siteUrl: string,
        frontendUrl: string,
        backendUrl: string,
        images: string[]
};

const projectDetails:ProjectInfoProps[] = [
        {
                title: 'Covid Statistics',
                description: 'An application for analyzing COVID-19 statistics, retrieved using a custom web scraper.',
                technologies: {
                        frontend: [
                                { name: 'Next.js', icon: <TechnologyIcons reactIcon />, url: 'https://nextjs.org/' },
                                { name: 'Firebase', icon: <TechnologyIcons firebaseIcon />, url: 'https://firebase.google.com/' },
                                { name: 'CSS', icon: <TechnologyIcons cssIcon />, url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
                        ],
                        backend: [
                                { name: 'Node.js', icon: <TechnologyIcons nodeIcon />, url: 'https://nodejs.org/en/' },
                                { name: 'Express', icon: <TechnologyIcons expressIcon />, url: 'https://expressjs.com/' },
                                { name: 'Puppeteer', icon: <TechnologyIcons puppeteerIcon />, url: 'https://pptr.dev/' },
                        ],
                },
                siteUrl: 'https://covidstatistics.co/',
                frontendUrl: 'https://github.com/bracesproul/Covid-Statistics',
                backendUrl: 'https://github.com/bracesproul/Web-scraper-and-API',
                images: []
        },
        {
                title: 'Earmark',
                description: 'An all-in-one web application to help you keep track of all your finances, in one place.',
                technologies: {
                        frontend: [
                                { name: 'Next.js', icon: <TechnologyIcons reactIcon />, url: 'https://nextjs.org/' },
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
                siteUrl: 'https://earmakr-alpha.vercel.app/',
                frontendUrl: 'https://github.com/bracesproul/earmark-frontend',
                backendUrl: 'https://github.com/bracesproul/earmark-backend',
                images: []
        },
]

function Projects(props: {projectsRef: null | React.MutableRefObject<HTMLInputElement>}): JSX.Element {

        function evenOrOdd(num: number) {
                return num % 2 === 0 ? 'left' : 'right';
        }

        return (
            <Box ref={props.projectsRef} id='projects' sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: '100%',
                    height: '100%',
                    margin: 'auto',
                    paddingTop: '10%',
                    paddingBottom: '10%',
            }}>
                    {projectDetails.map((project, index) => (
                        <Slide direction={evenOrOdd(index)} in={true} mountOnEnter unmountOnExit>
                                <Card
                                    key={index}
                                    elevation={5}
                                    sx={{
                                            maxWidth: '500px',
                                            padding: '10px',
                                            margin: 'auto',
                                            height: '550px',
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

                                                <ProjectTechnologies
                                                    frontend={project.technologies.frontend}
                                                    backend={project.technologies.backend}
                                                />

                                                <Typography sx={{
                                                        fontSize: '18px',
                                                        fontWeight: '500',
                                                        paddingTop: '10px'
                                                }}>
                                                        Visit the site by clicking <Link
                                                    href={project.siteUrl}
                                                    sx={{
                                                            cursor: 'pointer'
                                                    }}
                                                > here
                                                </Link>.
                                                </Typography>
                                                <Typography sx={{
                                                        fontSize: '18px',
                                                        fontWeight: '500',
                                                }}>
                                                        Frontend <Link
                                                    href={project.frontendUrl}
                                                    sx={{
                                                            cursor: 'pointer'
                                                    }}
                                                > GitHub repository
                                                </Link>.
                                                </Typography>
                                                <Typography sx={{
                                                        fontSize: '18px',
                                                        fontWeight: '500',
                                                }}>
                                                        Backend <Link
                                                    href={project.backendUrl}
                                                    sx={{
                                                            cursor: 'pointer'
                                                    }}
                                                > GitHub repository
                                                </Link>.
                                                </Typography>
                                                <ProjectLinks
                                                    siteUrl={project.siteUrl}
                                                    frontendUrl={project.frontendUrl}
                                                    backendUrl={project.backendUrl} />
                                        </CardContent>
                                </Card>
                        </Slide>
                    ))}
            </Box>
        )
}

export default function ProjectsV(props: {projectsRef: null | React.MutableRefObject<HTMLInputElement>}): JSX.Element {

        function evenOrOdd(num: number) {
                return num % 2 === 0 ? 'right' : 'left';
        }

        return (
            <Box sx={{ margin: '0 auto', paddingBottom: '5rem'}}>
                    <Grid sx={{ marginTop: '5rem' }} container spacing={2} ref={props.projectsRef} id='projects' >
                            {projectDetails.map((project, index) => (
                                <Slide direction={evenOrOdd(index)} in={true} mountOnEnter unmountOnExit>
                                        <Grid item xs={6}>
                                                <Card
                                                    key={index}
                                                    elevation={5}
                                                    sx={{
                                                            maxWidth: '500px',
                                                            padding: '10px',
                                                            margin: 'auto',
                                                            height: '550px',
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
                                                                    backendUrl={project.backendUrl} />
                                                        </CardContent>
                                                </Card>
                                        </Grid>
                                </Slide>
                            ))}
                    </Grid>
            </Box>
        )
}