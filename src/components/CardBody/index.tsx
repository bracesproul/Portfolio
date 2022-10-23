import { Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import CircleIcon from '@mui/icons-material/Circle';

type CardBodyProps = {
    bulletPoints: string[];
}

export default function CardBody(props: CardBodyProps) {
    return (
        <Box>
            <List dense>
                { props.bulletPoints.map((data, index) => (
                    <ListItem key={index}>
                        <ListItemIcon >
                            <CircleIcon sx={{ height: '10px', width: '10px', marginRight: '-20px', marginBottom: '5px' }} />
                        </ListItemIcon>
                        <ListItemText sx={{ marginTop: '-5px', marginLeft: '-25px' }}>
                            {data}
                        </ListItemText>
                    </ListItem>
                ))}
            </List>
        </Box>
    )
}