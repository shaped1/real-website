import React from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
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
              I play tennis, swim, and do science olympiad in my free time. I
              also like playing Genshin Impact.
            </Text>
          </Container>
          {/*
        <Link href="/about">
          <Button>More about me &rarr;</Button>
        </Link>
        */}
        </Container>
      </Container>

      <Container alignItems="center" paddingY="4rem">
        <Container maxWidth="600px" alignItems="center" alignContent="center">
          <Title fontSize="3rem" as="h3">
            Get in touch
          </Title>
          <Text textAlign="center">
            My inbox is open for you. Feel free to ask me anything!
          </Text>
          <Grid
            gridGap="2rem"
            marginTop="2rem"
            gridTemplateColumns={['1fr', 'repeat(2, 1fr)']}
            justifyItems="stretch"
            alignItems="stretch"
          >
            <Link href="mailto:me@parthiv.dev">
              <Button width="100%">
                <motion.span
                  initial={{ display: 'inline-block' }}
                  animate={{ rotate: [0, 14, -8, 14, -4, 10, 0, 0] }}
                  transition={{
                    repeat: Infinity,
                    repeatType: 'reverse',
                    duration: 2.5,
                  }}
                >
                  👋
                </motion.span>{' '}
                Say hello
              </Button>
            </Link>
          </Grid>
        </Container>
      </Container>
    </Container>
  </>
);

export default Home;
