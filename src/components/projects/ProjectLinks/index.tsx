import {Link, Typography} from "@mui/material";
import React from "react";

type ProjectLinksProps = {
    siteUrl: string,
    frontendUrl: string,
    backendUrl: string
}

export default function ProjectLinks({ siteUrl, frontendUrl, backendUrl }:ProjectLinksProps ): JSX.Element {
    return (
        <>
            { siteUrl !== '' && (
                <Typography sx={{
                    fontSize: '18px',
                    fontWeight: '500',
                    paddingTop: '10px'
                }}>
                    Visit the site by clicking <Link
                    href={siteUrl}
                    sx={{
                        cursor: 'pointer'
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
                    sx={{
                        cursor: 'pointer'
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
                    sx={{
                        cursor: 'pointer'
                    }}
                > GitHub repository
                </Link>.
                </Typography>
            ) }
        </>
    )
}