import React, {
    useEffect,
    useState
} from "react";
import {
    Box,
    Card,
    CardActions,
    CardContent,
    Grid,
    Slide,
    Typography,
    TextField,
    FormControl,
    Button, CircularProgress,
} from "@mui/material";
import { useTheme } from '../../hooks/useTheme';
import CssBaseline from "@mui/material/CssBaseline";
import {ThemeProvider} from "@mui/material/styles";
import NavBar from "../../components/header/navBar";
import AppTheme from "../../components/theme";
import SendIcon from '@mui/icons-material/Send';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import axios from "axios";

type ContactOptionProps = {
    autoFocus?: boolean;
    id: string,
    label: string,
    name: string,
    type: string,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    multiLine: boolean,
    rows: number,
    maxRows: number,
}[];

function handleSendWebhook(subject: string, message: string, email: string, name: string) {
    axios.get('https://geolocation-db.com/json/')
        .then((res) => {
            // if (res.data.IPv4 === '23.93.79.212') return undefined;
            const url = 'https://discord.com/api/webhooks/1019861600716476498/HLVayUdpqmFXR5sjHwx4KbAviuvCaqxaJ09m0nm8jNUu3m-fKKqU3dEn6HSXtB14fl8g'
            const jsonPayload = {
                content: `<@479069058864775180>`,
                embeds: [
                    {
                        title: "Contact Form Submission",
                        description: `***Contact form submitted*** IP: ***${res.data.IPv4}***`,
                        fields: [
                            {
                                name: "Subject",
                                value: subject,
                                inline: true
                            },
                            {
                                name: "Name",
                                value: name,
                                inline: true
                            },
                            {
                                name: "Email",
                                value: email,
                                inline: true
                            },
                            {
                                name: "Message",
                                value: message,
                                inline: true
                            }
                        ],
                        color: 65280,
                        footer: {
                            text: 'Portfolio Bot'
                        },
                        timestamp: new Date().toISOString()
                    }
                ]
            }
            axios.post(url, jsonPayload, {
                headers: { 'Content-Type': 'application/json' },
            })
                .then(res => console.log(res))
                .catch(err => console.log(err))
        })
        .catch((err) => {
            console.error('error getting location', err)
        })
}

export default function Main(): JSX.Element {
    const themeHook = useTheme();
    const [subject, setSubject] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [successRequest, setSuccessRequest] = useState<boolean>(false);

    const contactOptions:ContactOptionProps = [
        {
            autoFocus: true,
            id: 'subject-input',
            label: 'Subject',
            name: 'subject',
            type: 'text',
            value: subject,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => setSubject(e.currentTarget.value),
            multiLine: false,
            rows: 0,
            maxRows: 0,
        },
        {
            id: 'name-input',
            label: 'Full name',
            name: 'name',
            type: 'text',
            value: name,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => setName(e.currentTarget.value),
            multiLine: false,
            rows: 0,
            maxRows: 0,
        },
        {
            id: 'email-input',
            label: 'Email address',
            name: 'email',
            type: 'email',
            value: email,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.currentTarget.value),
            multiLine: false,
            rows: 0,
            maxRows: 0,
        },
        {
            id: 'message-input',
            label: 'Message',
            name: 'message',
            type: 'text',
            value: message,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => setMessage(e.currentTarget.value),
            multiLine: true,
            rows: 4,
            maxRows: 10,
        },
    ]

    async function handleSubmit() {
        console.log('submit contact form');
        const config = {
            headers: {
                'Content-Type': 'application/json'
            },
            mode: "cors",
            method: 'get',
            params: {
                subject,
                name,
                email,
                message,
            },
            url: 'https://rocky-chamber-38113.herokuapp.com/api/sendEmail'
        }
        handleSendWebhook(subject, message, email, name)
        await axios(config)
            .then((response) => {
                console.log(response);
                if (response.data.mailgunResponse.message === 'Queued. Thank you.') {
                    setSuccessRequest(true);
                    clearForm();
                }
            });
    }

    function clearForm() {
        setSubject('');
        setName('');
        setEmail('');
        setMessage('');
    }

    return (
        <ThemeProvider theme={themeHook.theme}>
            <CssBaseline />
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                margin: 'auto',
                height: '100%',
                width: '100%',
            }}>
                <NavBar />
                <AppTheme />
                <Slide direction="down" in={true} mountOnEnter unmountOnExit>
                    <Typography sx={{
                        fontSize: { xs: '50px', sm: '55px', md: '70px', lg: '70px', xl: '70px' },
                        fontWeight: '900',
                        letterSpacing: { xs: '-4px', sm: '-4px', md: '-5px', lg: '-5px', xl: '-5px' },
                        lineHeight: '60px',
                        background: 'linear-gradient(to right, #74d9eb, #8fb0c7)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        margin: 'auto',
                        paddingTop: '15vh',
                        paddingBottom: '3rem'
                    }}>
                        Let's connect.
                    </Typography>
                </Slide>
                <Card sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: 'auto',
                    width: { xs: '90%', sm: '90%', md: '40vw', lg: '40vw', xl: '40vw' },
                    padding: '2rem',
                }}>
                    <CardContent>
                        <FormControl onSubmit={handleSubmit}>
                            <Grid container spacing={2}>
                                { contactOptions.map((option, index) => (
                                    <Grid
                                        key={index}
                                        item
                                        xs={12}
                                    >
                                        <TextField
                                            fullWidth
                                            autoComplete="off"
                                            variant="outlined"
                                            multiline={option.multiLine}
                                            rows={option.rows}
                                            maxRows={option.maxRows}
                                            autoFocus={option.autoFocus}
                                            id={option.id}
                                            label={option.label}
                                            value={option.value}
                                            onChange={option.onChange}
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                        </FormControl>
                    </CardContent>
                    <CardActions>
                        <SendMessageButton
                            handleSubmitOutside={handleSubmit}
                            messageSuccess={successRequest}
                        />
                    </CardActions>
                </Card>
            </Box>
        </ThemeProvider>
    )
}

function SendMessageButton({ handleSubmitOutside, messageSuccess }: { handleSubmitOutside: () => void, messageSuccess: boolean }) {
    const themeHook = useTheme();
    const [submitted, setSubmitted] = useState(false);
    const [isPending, setIsPending] = useState(false);
    const [showAnimation, setShowAnimation] = useState(false);

    useEffect(() => {
        if (submitted) {
            setIsPending(true);
        }
    }, [submitted]);

    useEffect(() => {
        if (messageSuccess) {
            setIsPending(false);
            setShowAnimation(true);
        }
    }, [messageSuccess]);

    function handleSubmit() {
        setSubmitted(true);
        handleSubmitOutside();
    }

    function ProgressComponentV2() {
        return (
            <Grid sx={{ marginLeft: '5px', marginTop: '5px' }}>
                <CircularProgress size="1.2rem" color='secondary' />
            </Grid>
        )
    }

    return (
        <>
            { !submitted && (
                <Slide direction="up" in={true} mountOnEnter unmountOnExit>
                    <Button
                        variant="contained"
                        onClick={handleSubmit}
                        endIcon={<SendIcon />}
                        sx={{
                            width: '140px',
                            height: '37px',
                            fontWeight: '700',
                            fontSize: '15px',
                            background: 'linear-gradient(to right, #74d9eb, #8fb0c7)',
                            "&:hover": {
                                background: 'linear-gradient(to right, #74e5eb, #8fb8c7)',
                            }
                        }}
                    >
                        Send
                    </Button>
                </Slide>
            ) }
            { isPending && (
                <Slide direction="up" in={true} mountOnEnter unmountOnExit>
                    <Button
                        variant="contained"
                        endIcon={<ProgressComponentV2 />}
                        sx={{
                            cursor: 'auto',
                            background: themeHook.theme.palette.mode === 'dark' ? '#aed581' : '#689f38',
                            fontWeight: '700',
                            fontSize: '15px',
                            width: '140px',
                            height: '37px',
                            '&:hover': {
                                background: themeHook.theme.palette.mode === 'dark' ? '#aed581' : '#689f38',
                                cursor: 'auto'
                            }
                        }}
                    >
                        Sending...
                    </Button>
                </Slide>
            ) }
            { showAnimation && (
                <Slide direction="up" in={true} mountOnEnter unmountOnExit>
                    <Button
                        disableFocusRipple={true}
                        disableRipple={true}
                        variant="contained"
                        endIcon={<CheckCircleIcon />}
                        sx={{
                            cursor: 'auto',
                            background: themeHook.theme.palette.mode === 'dark' ? themeHook.theme.palette.success.light : themeHook.theme.palette.success.main,
                            fontWeight: '700',
                            fontSize: '15px',
                            width: '140px',
                            height: '37px',
                            '&:hover': {
                                background: themeHook.theme.palette.mode === 'dark' ? themeHook.theme.palette.success.light : themeHook.theme.palette.success.main,
                                cursor: 'auto'
                            }
                        }}
                    >
                        Success
                    </Button>
                </Slide>
            ) }


        </>
    )
}
/*
                <Slide direction="up" in={true} mountOnEnter unmountOnExit>
                    <Button
                        variant="contained"
                        startIcon={<ProgressComponent />}
                        sx={{
                            background: '#c8e899',
                            width: '120px',
                            height: '37px'
                        }}
                    ></Button>
                </Slide>
 */