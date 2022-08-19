import {Link, Typography, Tooltip, Box} from "@mui/material";
import React from "react";

type ProjectLinksProps = {
    siteUrl: string,
    frontendUrl: string,
    backendUrl: string,
    tooltip: string | null,
}

export default function ProjectLinks({ siteUrl, frontendUrl, backendUrl, tooltip }:ProjectLinksProps ): JSX.Element {
    return (
        <>
            { tooltip !== null ? (
                <>
                    { siteUrl !== '' && (
                        <>
                            <Box sx={{ display: {xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex'}}}>
                                <Tooltip title={tooltip}>
                                    <Typography sx={{
                                        fontSize: '18px',
                                        fontWeight: '500',
                                        paddingTop: '10px'
                                    }}>

                                        Visit the site by clicking <Link
                                        href={siteUrl}
                                        target="_blank"
                                        rel="noopener"
                                        sx={{
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
                                    > here
                                    </Link>.
                                    </Typography>
                                </Tooltip>
                            </Box>
                            <Box sx={{ display: {xs: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none'}}}>
                                <Tooltip title={tooltip} enterTouchDelay={0}>
                                    <Typography sx={{
                                        fontSize: '18px',
                                        fontWeight: '500',
                                        paddingTop: '10px'
                                    }}>

                                        Visit the site by clicking <Link
                                        href={siteUrl}
                                        target="_blank"
                                        rel="noopener"
                                        sx={{
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
                                    > here
                                    </Link>.
                                    </Typography>
                                </Tooltip>
                            </Box>
                        </>
                    ) }
                    { frontendUrl !== '' && (
                        <>
                            <Box sx={{ display: {xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex'}}}>
                                <Tooltip title={tooltip}>
                                    <Typography sx={{
                                        fontSize: '18px',
                                        fontWeight: '500',
                                    }}>
                                        Frontend <Link
                                        href={frontendUrl}
                                        target="_blank"
                                        rel="noopener"
                                        sx={{
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
                                    > GitHub repository
                                    </Link>.
                                    </Typography>
                                </Tooltip>
                            </Box>
                            <Box sx={{ display: {xs: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none'}}}>
                                <Tooltip title={tooltip} enterTouchDelay={0}>
                                    <Typography sx={{
                                        fontSize: '18px',
                                        fontWeight: '500',
                                    }}>
                                        Frontend <Link
                                        href={frontendUrl}
                                        target="_blank"
                                        rel="noopener"
                                        sx={{
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
                                    > GitHub repository
                                    </Link>.
                                    </Typography>
                                </Tooltip>
                            </Box>
                        </>
                    ) }
                    { backendUrl !== '' && (
                        <>
                            <Box sx={{ display: {xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex'}}}>
                                <Tooltip title={tooltip}>
                                    <Typography sx={{
                                        fontSize: '18px',
                                        fontWeight: '500',
                                    }}>
                                        Backend <Link
                                        href={backendUrl}
                                        target="_blank"
                                        rel="noopener"
                                        sx={{
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
                                    > GitHub repository
                                    </Link>.
                                    </Typography>
                                </Tooltip>
                            </Box>
                            <Box sx={{ display: {xs: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none'}}}>
                                <Tooltip title={tooltip} enterTouchDelay={0}>
                                    <Typography sx={{
                                        fontSize: '18px',
                                        fontWeight: '500',
                                    }}>
                                        Backend <Link
                                        href={backendUrl}
                                        target="_blank"
                                        rel="noopener"
                                        sx={{
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
                                    > GitHub repository
                                    </Link>.
                                    </Typography>
                                </Tooltip>
                            </Box>
                        </>
                    ) }
                </>
            ) : (
                <>
                    { siteUrl !== '' && (
                        <Typography sx={{
                            fontSize: '18px',
                            fontWeight: '500',
                            paddingTop: '10px'
                        }}>

                            Visit the site by clicking <Link
                            href={siteUrl}
                            target="_blank"
                            rel="noopener"
                            sx={{
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
                        > here
                        </Link>.
                        </Typography>
                    ) }
                    { frontendUrl !== '' && (
                        <Typography sx={{
                            fontSize: '18px',
                            fontWeight: '500',
                        }}>
                            Frontend <Link
                            href={frontendUrl}
                            target="_blank"
                            rel="noopener"
                            sx={{
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
                        > GitHub repository
                        </Link>.
                        </Typography>
                    ) }
                    { backendUrl !== '' && (
                        <Typography sx={{
                            fontSize: '18px',
                            fontWeight: '500',
                        }}>
                            Backend <Link
                            href={backendUrl}
                            target="_blank"
                            rel="noopener"
                            sx={{
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
                        > GitHub repository
                        </Link>.
                        </Typography>
                    ) }
                </>
            )}
        </>
    )
}