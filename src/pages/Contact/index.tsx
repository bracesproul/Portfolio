import React, {
    useState
} from "react";
import {Box,
    Card,
    CardActions,
    CardContent,
    Grid,
    Slide,
    Typography,
    TextField,
    FormControl,
    Button,
} from "@mui/material";
import { useTheme } from '../../hooks/useTheme';
import CssBaseline from "@mui/material/CssBaseline";
import {ThemeProvider} from "@mui/material/styles";
import NavBar from "../../components/header/navBar";
import AppTheme from "../../components/theme";

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

export default function Main(): JSX.Element {
    const themeHook = useTheme();
    const [subject, setSubject] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

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
            label: 'Name',
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
            label: 'Email Address',
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

    function handleSubmit() {
        console.log('submit contact form');
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
                        fontSize: '60px',
                        fontWeight: '900',
                        letterSpacing: '-5px',
                        lineHeight: '60px',
                        background: 'linear-gradient(to right, #74d9eb, #8fb0c7)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        margin: 'auto',
                        paddingTop: '15vh',
                        paddingBottom: '3rem'
                    }}>
                        Let's connect
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
                        <Button variant="contained" onClick={handleSubmit}>
                            Send
                        </Button>
                    </CardActions>
                </Card>
            </Box>
        </ThemeProvider>
    )
}