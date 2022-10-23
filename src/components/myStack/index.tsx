import React from 'react';
import { Box, Card, CardContent, Tooltip, Slide } from "@mui/material";
import { SiGraphql, SiTypescript, SiNodedotjs, SiPostgresql, SiReact, SiNextdotjs, SiExpress, SiGit, SiFirebase, SiHtml5, SiCss3, SiWebstorm, SiVisualstudiocode, SiStripe, SiMaterialui, SiPostman } from "react-icons/si";
import { AiFillDatabase } from "react-icons/ai";
/*
* Techs:
* - JavaScript
* - TypeScript
* - Node.js
* - React.js
* - Next.js
* - Express.js
* - Git
* - Firebase
* - NoSQL Databases
* - HTML
* - CSS
* - WebStorm
* - VSCode
* - Stripe
* - Material UI
* */

const iconsAndTitles = [
    { icon: <SiTypescript size={30} />, title: "TypeScript", iconName: 'SiTypescript' },
    { icon: <SiNodedotjs size={30} />, title: "Node.js", iconName: 'SiNodedotjs' },
    { icon: <SiReact size={30} />, title: "React.js", iconName: 'SiReact' },
    { icon: <SiNextdotjs size={30} />, title: "Next.js", iconName: 'SiNextdotjs' },
    { icon: <SiExpress size={30} />, title: "Express.js", iconName: 'SiExpress' },
    { icon: <SiGit size={30} />, title: "Git", iconName: 'SiGit' },
    { icon: <SiFirebase size={30} />, title: "Firebase", iconName: 'SiFirebase' },
    { icon: <SiPostgresql size={30} />, title: "PostgreSQL", iconName: 'SiPostgresql' },
    { icon: <SiHtml5 size={30} />, title: "HTML", iconName: 'SiHtml5' },
    { icon: <SiCss3 size={30} />, title: "CSS", iconName: 'SiCss3' },
    { icon: <SiWebstorm size={30} />, title: "WebStorm", iconName: 'SiWebstorm' },
    { icon: <SiVisualstudiocode size={30} />, title: "VSCode", iconName: 'SiVisualstudiocode' },
    { icon: <SiStripe size={30} />, title: "Stripe API", iconName: 'SiStripe' },
    { icon: <SiMaterialui size={30} />, title: "Material UI", iconName: 'SiMaterialui' },
    { icon: <SiGraphql size={30} />, title: "GraphQL", iconName: 'SiGraphql' },
];

export default function MyStack() {
    const [screenWidth, setScreenWidth] = React.useState<any>(window.innerWidth * .9);
    function evenOrOdd(num: number) {
        return num % 2 === 0 ? 'right' : 'left';
    }

    React.useEffect(() => {
        setScreenWidth(window.innerWidth);
    }, [])

    return (
        <>
            <Box sx={{ display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' }, margin: '0 auto', paddingBottom: '2rem', paddingTop: '5rem' }}>
                <Slide
                    direction={evenOrOdd(0)}
                    in={true}
                    mountOnEnter
                    unmountOnExit
                >
                    <Card sx={{
                        maxWidth: '500px',
                        padding: '10px',
                        margin: 'auto',
                        minHeight: 'maxContent',
                        justifyContent: 'center',
                    }}>
                        <CardContent sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                        }}>
                            <Box sx={{
                                maxWidth: '400px',
                                display: 'flex',
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                            }}>
                                {iconsAndTitles.map((iconAndTitle, index) => (
                                    <Box key={index} sx={{
                                        paddingLeft: '1rem',
                                    }}>
                                        <Tooltip title={iconAndTitle.title} arrow >
                                            <Box>
                                                {iconAndTitle.icon}
                                            </Box>
                                        </Tooltip>
                                    </Box>
                                ))}
                            </Box>
                        </CardContent>
                    </Card>
                </Slide>
            </Box>
            <Box sx={{ display: { xs: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none' }, flexDirection: 'column', margin: '0 auto', width: '100%', height: '100%', paddingBottom: '2rem', paddingTop: '2rem', paddingLeft: '2.5%', paddingRight: '2.5%'}}>
                <Slide
                    direction={evenOrOdd(0)}
                    in={true}
                    mountOnEnter
                    unmountOnExit
                >
                    <Card sx={{
                        maxWidth: `${screenWidth}px`,
                        padding: '10px',
                        margin: 'auto',
                        height: 'maxContent',
                        justifyContent: 'center',
                    }}>
                        <CardContent sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            flexWrap: 'wrap'
                        }}>
                            {iconsAndTitles.map((iconAndTitle, index) => (
                                <Box key={index} sx={{
                                    paddingLeft: '1rem',
                                }}>
                                    <Tooltip title={iconAndTitle.title} arrow >
                                        <Box>
                                            {iconAndTitle.icon}
                                        </Box>
                                    </Tooltip>
                                </Box>
                            ))}
                        </CardContent>
                    </Card>
                </Slide>
            </Box>
        </>
    )
}