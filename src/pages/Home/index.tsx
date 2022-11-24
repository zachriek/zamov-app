import { useEffect, useState } from 'react';
import { Container, Grid, GridItem, Text, Card, CardBody, Heading, Stack, Image, Divider, CardFooter, Button, Flex, Input } from '@chakra-ui/react';
import { getMovieList, searchMovies } from '../../utils/api';
import AppLayout from '../../layouts/AppLayout';
import './index.css';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getMovies, selectMovies } from '../../features/movieSlice';
import { Link } from 'react-router-dom';

const Home = () => {
  const movies = useAppSelector(selectMovies);
  const dispatch = useAppDispatch();

  const [input, setInput] = useState([]);

  const handleChange = (e: any) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const data = await searchMovies(input);
    dispatch(getMovies(data.results));
  };

  const getPopularMovies = async () => {
    const data = await getMovieList();
    dispatch(getMovies(data.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);

  return (
    <AppLayout title="Home">
      <Container maxW="75rem" minHeight="100vh" my={10}>
        <form onSubmit={handleSubmit}>
          <Flex mb={5}>
            <Input placeholder="Search movie" size="md" borderEndRadius={0} onChange={handleChange} />
            <Button type="submit" variant="solid" colorScheme="blue" borderStartRadius={0}>
              Search
            </Button>
          </Flex>
        </form>
        <Grid templateColumns={{ base: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap={6}>
          {movies
            ? movies.map((movie: any, index: any) => (
                <GridItem key={index}>
                  <Card maxW="sm">
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
                          <Link to={`/movies/${movie.id}/details`}>Details</Link>
                        </Button>
                      </Flex>
                    </CardFooter>
                  </Card>
                </GridItem>
              ))
            : null}
        </Grid>
      </Container>
    </AppLayout>
  );
};

export default Home;
