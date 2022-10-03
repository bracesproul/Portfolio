import {Box, Grid} from '@mui/material'
import TechnologyIcons from "../projects/TechnologyIcons";
import React from "react";
import LinearCardUI from "./linear";
import CreateCardUI from "./create";

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


export default function LinearToolsCard() {
    //sx={{ display: 'flex', flexDirection: 'row', margin: 'auto', width: '500px', height: 'maxContent'}}
    return (
        <Grid container spacing={0}>
            <Grid item xs={6}>
                <LinearCardUI />
            </Grid>
            <Grid item xs={6}>
                <CreateCardUI />
            </Grid>
        </Grid>
    )
}