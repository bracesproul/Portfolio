import {
    alpha,
    Box, Divider, Grid,
    IconButton, Menu, MenuItem, MenuProps, styled,
    Tooltip, Typography
} from "@mui/material";
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';
import AppTheme from '../../theme'
import {Button} from "@mui/material/";
import {useState} from "react";

type NavBarPropsType = {
    title: string,
    mobileText: string,
    ariaLabel: string,
    icon: JSX.Element,
    href: string,
}[];

interface IOnClickProps {
    onModeClick: (mode:string) => void;
    modeBool: boolean;
}

const navBarPropsSocial:NavBarPropsType = [
    {
        title: 'My GitHub',
        mobileText: 'GitHub',
        ariaLabel: 'Github profile',
        icon: <Icon icon="akar-icons:github-fill" />,
        href: 'https://github.com/bracesproul',
    },
    {
        title: 'My LinkedIn',
        mobileText: 'LinkedIn',
        ariaLabel: 'LinkedIn profile',
        icon: <Icon icon="akar-icons:linkedin-box-fill" />,
        href: 'https://www.linkedin.com/in/brace-sproul-16a185195/',
    },
    {
        title: 'My Twitter',
        mobileText: 'Twitter',
        ariaLabel: 'Twitter profile',
        icon: <Icon icon="akar-icons:twitter-fill" />,
        href: 'https://twitter.com/BraceSproul',
    },
    {
        title: 'brace#9974',
        mobileText: 'brace#9974',
        ariaLabel: 'Discord profile',
        icon: <Icon icon="akar-icons:discord-fill" />,
        href: 'https://discordapp.com/users/479069058864775180/',
    },
    {
        title: 'My Resume',
        mobileText: 'Resume',
        ariaLabel: 'Resume PDF',
        icon: <Icon icon="akar-icons:paper" />,
        href: 'https://docs.google.com/document/d/1qXc6X8zTBI7bM-9Qs8wuiB5LOpJqNZSzRNSndyQ0leA/edit?usp=sharing',
    },
];

export default function NavBar({onModeClick, modeBool}:IOnClickProps): JSX.Element {

    return (
        <>
            <Box
                sx={{
                    display: {xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex'},
                    flexDirection: 'row',
                    position: 'absolute',
                    top: '0',
                    margin: '1rem',
                }}
            >
                <Grid
                    container
                    spacing={2}
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                    }}
                >
                    { navBarPropsSocial.map((navBarProp, index) => (
                        <Grid item xs={2} key={index}>
                            <Tooltip title={navBarProp.title}>
                                <IconButton aria-label={navBarProp.ariaLabel} href={navBarProp.href} target="_blank" rel="noopener">
                                    {navBarProp.icon}
                                </IconButton>
                            </Tooltip>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <Box
                sx={{
                    display: {xs: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none'},
                    flexDirection: 'row',
                    position: 'absolute',
                    top: '0',
                    margin: '1rem',
                }}
            >
            <MobileNavBar />
            </Box>
        </>
    )
}

function MobileNavBar(): JSX.Element {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (href:string) => {
        setAnchorEl(null);
    };

    const StyledMenu = styled((props: MenuProps) => (
        <Menu
            elevation={0}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            {...props}
        />
    ))(({ theme }:any) => ({
        '& .MuiPaper-root': {
            borderRadius: 6,
            marginTop: theme.spacing(1),
            minWidth: 180,
            color:
                theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
            boxShadow:
                'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
            '& .MuiMenu-list': {
                padding: '4px 0',
            },
            '& .MuiMenuItem-root': {
                '& .MuiSvgIcon-root': {
                    fontSize: 18,
                    color: theme.palette.text.secondary,
                    marginRight: theme.spacing(1.5),
                },
                '&:active': {
                    backgroundColor: alpha(
                        theme.palette.primary.main,
                        theme.palette.action.selectedOpacity,
                    ),
                },
            },
        },
    }));



    return (
        <div>
            <IconButton
                id="demo-customized-button"
                onClick={handleClick}
            >
                <Icon icon="bytesize:menu" />
            </IconButton>
            <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                    'aria-labelledby': 'demo-customized-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                {navBarPropsSocial.map((navBarProp, index) => (
                    <MenuItem
                        key={index}
                        onClick={() => handleClose(navBarProp.href)}
                        disableRipple
                    >
                        {navBarProp.icon}
                        <Typography sx={{
                            fontSize: '17px',
                            paddingLeft: '1rem',
                            fontWeight: '700',
                        }}>
                            {navBarProp.mobileText}
                        </Typography>
                    </MenuItem>
                ))}

            </StyledMenu>
        </div>
    );


}