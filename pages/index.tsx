import React from 'react';
import { motion } from 'framer-motion';
import { Container, Title, Button, Grid, Link, Text } from '@components';

const Home = (): JSX.Element => (
  <>
    <Container>
      <Container
        justifyContent="center"
        alignContent="center"
        alignItems="center"
        textAlign="center"
        paddingY="25px"
        paddingBottom="40px"
        gridGap="4rem"
      >
        <Container alignItems="center" alignContent="center">
          <Title>Parthiv</Title>
          <Title
            fontSize="2rem"
            color="rgba(0, 0, 0, 0.6)"
            fontWeight="500"
            as="h2"
          ></Title>
        </Container>
        <Container maxWidth="700px" gridGap="3rem">
          <Container>
            <Text textAlign="center">
              Hello! If you are reading this, I applaud you for trying. Thank
              you, and I bid you farewell.
            </Text>
          </Container>
          {/*
        <Link href="/about">
          <Button>More about me &rarr;</Button>
        </Link>
        */}
        </Container>
      </Container>
    </Container>
  </>
);

export default Home;
