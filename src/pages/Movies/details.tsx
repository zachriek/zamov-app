import { Button, Card, CardBody, CardFooter, Container, Divider, Flex, Grid, GridItem, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getMovie, selectMovie } from '../../features/movieSlice';
import AppLayout from '../../layouts/AppLayout';
import { getMovieDetails } from '../../utils/api';

const MovieDetails = () => {
  const movie = useAppSelector(selectMovie);
  const dispatch = useAppDispatch();

  const { movieId } = useParams();

  const getMovieData = async () => {
    const data = await getMovieDetails(Number(movieId));
    dispatch(getMovie(data));
  };

  useEffect(() => {
    getMovieData();
  }, [movieId]);

  return (
    <AppLayout title="Movie Details">
      <Container maxW="75rem" minHeight="100vh" my={10}>
        <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={6}>
          {movie ? (
            <GridItem>
              <Card>
                <CardBody>
                  <Image src={`${process.env.REACT_APP_BASEIMGURL}${movie.poster_path}`} alt={movie.title} borderRadius="lg" />
                  <Stack mt="6" spacing="3">
                    <Heading size="md">{movie.title}</Heading>
                    <Text>{movie.overview}</Text>
                    <Text color="blue.600" fontSize="xl">
                      Rating: <strong>{movie.vote_average}</strong>
                    </Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  <Flex width="100%" justifyContent="end" alignItems="center">
                    <Button variant="solid" colorScheme="blue">
                      <Link to="/">Back</Link>
                    </Button>
                  </Flex>
                </CardFooter>
              </Card>
            </GridItem>
          ) : null}
        </Grid>
      </Container>
    </AppLayout>
  );
};

export default MovieDetails;
