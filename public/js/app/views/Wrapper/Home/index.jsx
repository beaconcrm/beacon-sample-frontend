import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardTitle from 'components/CardTitle';


const Home = () => (
  <Card>
    <CardContent>
      <CardTitle>
        This is the home page
      </CardTitle>

      <Typography variant="body1">
        Happy days. You'll probably want to head to the Send message page.
      </Typography>
    </CardContent>
  </Card>
);

export default Home;
