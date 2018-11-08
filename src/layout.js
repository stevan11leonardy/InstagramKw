import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import SeeAll from './layoutseeall'

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginLeft : 20,
    fontFamily :'sans-serif',
    fontSize: 10,
    color:'grey',
    position:'fixed'
  },
  card: {
    position : 'relative',
    height : 240,
    width : 220,
  },
  title: {
    fontSize: 18,
    textAlign : 'center'
  },
  pos: {
    marginBottom: 12,
    textAlign : 'center'
  },
  button: {
    margin: theme.spacing.unit,
    display : 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
  bigAvatar: {
    width: 80,
    height: 80,
    marginLeft : 'auto',
    marginRight : 'auto'
    
  },
});
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
const data = [
    {
        username: 'stevan_leonardy',
        status: 'follows you',
        alt : "Adelle Charles",
        src:'https://a0.muscache.com/4ea/air/v2/pictures/c886d45a-57be-4a72-912b-bbae26b4c0ed.jpg?',
    },
    {
        username: 'stevan',
        status: 'follows you',
        alt : "Adelle Charles",
        src:'https://a0.muscache.com/4ea/air/v2/pictures/c886d45a-57be-4a72-912b-bbae26b4c0ed.jpg?',
    },
    {
        username: 'ste',
        status: 'follows you',
        alt : "Adelle Charles",
        src:'https://a0.muscache.com/4ea/air/v2/pictures/c886d45a-57be-4a72-912b-bbae26b4c0ed.jpg?',
    },
]
const LayoutIg = (props) => {
  const { classes } = props;
  return (
    <div className = {classes.root}>
        <Grid container spacing={24}>
            <h2>Discover People</h2>
        </Grid>
        <Grid container spacing={24}>
        {data.map((element, key) => ( 
            <Grid item md={4} key={key}>
                <ListItem
                    classes = {classes}
                    username = {element.username}
                    status = {element.status}
                    alt = {element.alt}
                    src = {element.src}
                />
            </Grid>
        ))}
        </Grid>
        <Grid container spacing={24}>
            <h2>See All</h2>
        </Grid>
        <Grid container spacing={24}>
            <SeeAll />
        </Grid>
    </div>
  );
}

LayoutIg.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LayoutIg);