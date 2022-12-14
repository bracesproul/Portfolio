import {Box, Grid, Link, List, ListItem, ListItemIcon, ListItemText, Typography} from "@mui/material";
import React from "react";

type TechnologiesObjectProps = {
    name: string,
    icon: JSX.Element,
    url: string
}

type ProjectTechnologiesProps = {
    frontend: TechnologiesObjectProps[],
    backend: TechnologiesObjectProps[],
}

export default function ProjectTechnologies({ frontend, backend }: ProjectTechnologiesProps): JSX.Element {
    return (
        <>
            <Grid container spacing={2}>
                <Grid item
                      xs={12}
                      container
                      sx={{ display: 'flex', margin: 'auto'}}
                >
                    <Typography sx={{
                        fontSize: '20px',
                        fontWeight: '700',
                        marginBottom: '-10px',
                        marginTop: '10px',
                    }}>
                        Technologies
                    </Typography>
                </Grid>
                { frontend.length !== 0 && (
                    <Grid item xs={6}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                        }}>
                            <Typography sx={{
                                fontSize: '20px',
                                fontWeight: '500',
                            }}>
                                Frontend:
                            </Typography>
                            <List dense>
                                {frontend.map((technology, index) => (
                                    <ListItem key={index} >
                                        <ListItemIcon sx={{
                                            marginRight: '-20px',
                                            marginLeft: '-20px',
                                        }}>
                                            {technology.icon}
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
                    </Grid>
                ) }
                { backend.length !== 0 && (
                    <Grid item xs={6}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                        }}>
                            <Typography sx={{
                                fontSize: '20px',
                                fontWeight: '500',
                            }}>
                                Backend:
                            </Typography>
                            <List dense>
                                {backend.map((technology, index) => (
                                    <ListItem key={index}>
                                        <ListItemIcon sx={{
                                            marginRight: '-20px',
                                            marginLeft: '-20px',
                                        }}>
                                            {technology.icon}
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
                    </Grid>
                ) }
            </Grid>
        </>
    )
}