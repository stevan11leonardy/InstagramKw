import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ListItem from './listItems';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginLeft : 0,
    fontFamily :'sans-serif',
    fontSize: 10,
    color:'grey',
    position:'fixed'
  },
  card: {
    position : 'relative',
    height : 110,
    width : 800,
  },
  title: {
    fontSize: 18,
    textAlign : 'left',
    marginLeft: 100,
    marginTop:20,
    postion:'relative'
  },
  pos: {
    marginBottom: 5,
    textAlign : 'left',
    marginLeft: 100,
    position:'absolute'
  },
  button: {
    margin: theme.spacing.unit,
    marginLeft:'auto',
    postion:'absolute',
    marginTop:-50

  },
  bigAvatar: {
    width: 80,
    height: 80,
    marginRight : 'auto',
    position : 'fixed'
  },
});
const SeeAll = (props) => {
  const { classes } = props;
  return (
    <div className = {classes.root}>
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