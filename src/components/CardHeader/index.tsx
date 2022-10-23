import { Link, Typography, Box} from "@mui/material";

type CardHeaderProps = {
    title: string;
    linkUrl: string;
    linkTitle: string;
}

export default function CardHeader(props: CardHeaderProps) {
    return (
        <Box>
            <Typography sx={{
                fontSize: '24px',
                fontWeight: '700',
            }}>
                {props.title}
            </Typography>
            <Typography sx={{
                fontWeight: '700',
                paddingTop: '7px',
                paddingBottom: '7px',
            }}>
                <Link target='_blank' href={props.linkUrl} sx={{
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
                    {props.linkTitle}
                </Link>
            </Typography>
        </Box>
        
    )
}