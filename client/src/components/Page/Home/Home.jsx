import React from 'react';
import { Grid, Container, Header, Button } from 'semantic-ui-react';
import PortfolioImage from '../../Image/PortfolioImage';

const Home = () => (
  <Container fluid>
    <Grid columns="equal">
      <Grid.Column textAlign="center">
        <PortfolioImage />
        <Header as="h1">Aaron Young</Header>
        <Header as="h3">Full Stack Web Developer</Header>
      </Grid.Column>
      <Grid.Column width={1} floated="right">
        <Button.Group vertical>
          <Button color="facebook" icon="facebook" />
          <Button color="linkedin" icon="linkedin" />
        </Button.Group>
      </Grid.Column>
    </Grid>
  </Container>
);

export default Home;
