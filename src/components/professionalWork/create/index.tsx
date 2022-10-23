import {
    Box,
    Card,
    CardContent,
    Divider,
    Grid, Link,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Slide,
    Typography
} from "@mui/material";
import { Icon } from '@iconify/react';
import React from "react";
import ProjectTechnologies from "../../projects/ProjectTechnologies";
import ProjectLinks from "../../projects/ProjectLinks";
import CircleIcon from '@mui/icons-material/Circle';
import CardHeader from '../../CardHeader';
import CardBody from "../../CardBody";
import CardIcons from "../../CardIcons";

interface ITechnologies {
    name: string,
    Icon: JSX.Element,
    url: string,
}

interface ILinearData {
    bulletPoints: string[],
    technologies: ITechnologies[]
}

const linear_data:ILinearData = {
    bulletPoints: [
        'Worked on multiple production applications.',
        'Used many different technologies like; GraphQL, PostgreSQL, React and more.',
        'Full stack work.',
    ],
    technologies: [
        {
            name: 'Node.js',
            Icon: <Icon icon="akar-icons:node-fill" />,
            url: 'https://nodejs.org/en/'
        },
        {
          name: 'TypeScript',
          Icon: <Icon icon="akar-icons:typescript-fill" />,
          url: 'https://www.typescriptlang.org/'
        },
        {
            name: 'GraphQL',
            Icon: <Icon icon="akar-icons:graphql-fill" />,
            url: 'https://graphql.org/'
        },
        {
            name: 'React.js',
            Icon: <Icon icon="akar-icons:react-fill" />,
            url: 'https://reactjs.org/'
        },
        {
            name: 'PostgreSQL',
            Icon: <Icon icon="akar-icons:postgresql-fill" />,
            url: 'https://www.postgresql.org/'
        }
    ]
}

export default function LinearCardUI(): JSX.Element {
    const [screenWidth, setScreenWidth] = React.useState<any>(window.innerWidth * .9);
    function evenOrOdd(num: number) {
        return num % 2 === 0 ? 'right' : 'left';
    }

    React.useEffect(() => {
        setScreenWidth(window.innerWidth);
    }, [])

    return (
        <>
            <Box sx={{ display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' }, flexDirection: 'row', height: '100%', maxWidth: 'fitContent', paddingBottom: '2rem', margin: '0 auto', paddingTop: '5rem' }}>
                <Slide
                    direction='right'
                    in={true}
                    mountOnEnter
                    unmountOnExit
                >
                    <Card
                        elevation={5}
                        sx={{
                            maxWidth: '500px',
                            padding: '10px',
                            margin: 'auto',
                            minHeight: 'maxContent',
                            justifyContent: 'center',
                        }}
                    >
                        <CardContent>
                            <CardHeader title='Software Engineer' linkUrl='https://create.xyz' linkTitle='Create Inc.' />
                            <CardBody bulletPoints={linear_data.bulletPoints} />
                            <Divider />
                            <CardIcons technologies={linear_data.technologies}  />
                        </CardContent>
                    </Card>
                </Slide>
            </Box>
            <Box sx={{ display: { xs: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none' }, flexDirection: 'column', margin: '0 auto', paddingBottom: '2rem', paddingTop: '2rem', paddingLeft: '2.5%', paddingRight: '2.5%'}}>
                <Slide
                    direction={evenOrOdd(0)}
                    in={true}
                    mountOnEnter
                    unmountOnExit
                >
                    <Card
                        elevation={5}
                        sx={{
                            maxWidth: `95%`,
                            padding: '10px',
                            margin: 'auto',
                            height: 'maxContent',
                            justifyContent: 'center',
                        }}
                    >
                        <CardContent>
                          <CardHeader title='Software Engineer' linkUrl='https://create.xyz' linkTitle='Create Inc.' />
                          <CardBody bulletPoints={linear_data.bulletPoints} />
                          <Divider />
                          <CardIcons technologies={linear_data.technologies}  />
                          <Divider />
                        </CardContent>
                    </Card>
                </Slide>
            </Box>
        </>
    )
}