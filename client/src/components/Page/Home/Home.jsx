import React from 'react';
import { Grid, Header } from 'semantic-ui-react';
import PortfolioImage from '../../Image/PortfolioImage';
import SocialBar from '../../SocialBar/SocialBar';

const Home = () => (
  <Grid columns="equal" padded>
    <Grid.Column textAlign="center">
      <PortfolioImage />
      <Header as="h1">Aaron Young</Header>
      <Header as="h3">Full Stack Web Developer</Header>
      <SocialBar />
    </Grid.Column>
  </Grid>
);

export default Home;
