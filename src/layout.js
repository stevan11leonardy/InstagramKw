import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SeeAll from './layoutseeall';
import ListItem from './listItems';

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
const LayoutIg = (props) => {
  const { classes } = props;
  return (
    <div className = {classes.root}>
        <h2>Discover People</h2>
        <Grid container spacing={24}>
        {props.data.map((element, key) => ( 
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
        <h2>See All</h2>
        <SeeAll data={props.data}/>
    </div>
  );
}

LayoutIg.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LayoutIg);