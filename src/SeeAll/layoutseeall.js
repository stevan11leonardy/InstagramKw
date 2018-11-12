import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ListItem from '../listItems';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginLeft : 0,
    fontFamily :'sans-serif',
    fontSize: 10,
    color:'grey',
    position:'static'
  },
  card: {
    position : 'static',
    height : 110,
    width : 'relative',
    minWidth: 400
  },
  title: {
    fontSize: 18,
    textAlign : 'left',
    marginLeft: 100,
    marginTop:-60,
    postion:'relative'
  },
  pos: {
    marginBottom: -150,
    textAlign : 'left',
    marginLeft: 100,
    position:'relative'
  },
  button: {
    margin: theme.spacing.unit,
    marginLeft:'auto',
    postion:'absolute',
    marginTop:0,
    position:'static'
  },
  bigAvatar: {
    width: 80,
    height: 80,
    marginRight : 'auto',
    position : 'static'
  },
});
const SeeAll = (props) => {
  const { classes } = props;
  return (
    <div className = {classes.root}>
    <h2>See All</h2>
        <Grid container spacing={24}>
        {props.data.map((element, key) => ( 
            <Grid item md={8} key={key}>
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
    </div>
  );
}

SeeAll.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SeeAll);