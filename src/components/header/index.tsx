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
        <>
            <Box sx={{ display: {xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex'}, flexDirection: 'column', width: '100%', height: '100%', margin: 'auto' }}>
                <IntroductionHeader />
                <IntroductionCard projectsRef={props.projectsRef} />
            </Box>
            <Box sx={{ display: {xs: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none'}, flexDirection: 'column', width: '100%', height: '100%', margin: 'auto' }}>
                <IntroductionHeader />
                <Box sx={{ paddingLeft: '2.5%', paddingRight: '2.5%'}}>
                    <IntroductionCard projectsRef={props.projectsRef} />
                </Box>
            </Box>
        </>
    )
}

export default Introduction;