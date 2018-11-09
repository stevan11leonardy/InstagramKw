import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';


const ListItem = (props) => (
    <div>
        <Card className={props.classes.card}>
            <CardContent>
                <Avatar
                    alt={props.alt}
                    src={props.src}
                    className={props.classes.bigAvatar}>
                </Avatar>
                <Typography variant="h5" component="h2" className={props.classes.title}>
                    {props.username}
                </Typography>
                <Typography className={props.classes.pos} color="textSecondary">
                    {props.status}
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant="contained" color="primary" className={props.classes.button}>
                    Follow
                </Button>
            </CardActions>
        </Card>
    </div>
);

export default ListItem;