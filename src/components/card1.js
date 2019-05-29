import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from "gatsby"

const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function SimpleCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="h2">WeatherMap!
        </Typography>
        <Typography className={classes.pos} color="textSecondary" style = {{
            fontSize: 12,
        }}>
        &nbsp;Python, Javascript, Vue.js, Flask, Leaflet.js, D3.js
        </Typography>
        <Typography variant="body2" component="p">
        Weather tracker that provides clothing recommendations and weather graphs with a fun twist. Tracked locations are populated onto a world map by a search feature.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" component ={Link} to = "/weatherMap" style = {{
            color: "#0d7373",
            fontWeight: "bold",
        }}>Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default SimpleCard;