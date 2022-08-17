/* eslint-disable */
import IntroductionCard from './IntroductionCard';
import IntroductionHeader from './IntroductionHeader';
import React from 'react';
import {Box} from "@mui/material";
interface IIntroductionCardProps {
    scrollHandler: () => void;
}

function Introduction(props: {projectsRef: null | React.MutableRefObject<HTMLInputElement>}): JSX.Element {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', margin: 'auto' }}>
        <IntroductionHeader />
        <IntroductionCard projectsRef={props.projectsRef} />
        </Box>
    )
}

export default Introduction;