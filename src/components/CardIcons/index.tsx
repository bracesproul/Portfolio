import { Box, Link, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import { ReactElement } from 'react'

type CardIconsProps = {
    technologies: TechProps[]
};

type TechProps = {
    Icon: JSX.Element;
    url: string;
    name: string
}

export default function CardIcons(props: CardIconsProps) {
    return (
        <Box>
            <List dense>
                {props.technologies.map((technology, index) => (
                    <ListItem key={index}>
                        <ListItemIcon sx={{
                            marginRight: '-20px',
                            marginLeft: '-20px',
                        }}>
                            {technology.Icon}
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
    )
}