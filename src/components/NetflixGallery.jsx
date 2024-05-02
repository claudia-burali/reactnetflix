import React, { useState, useEffect } from 'react';
import { Alert, Col, Container, Spinner } from 'react-bootstrap';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const NetflixGallery = (props) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchMovies = () => {
    setIsLoading(true);

    console.log('Fetch in corso...');
    fetch(`http://www.omdbapi.com/?apikey=cec95536&s=${props.fetch}`)
      .then((response) => {
        if (response.ok) {
          console.log('Fetch conclusa');
          return response.json();
        } else {
          throw new Error('Errore nella richiesta');
        }
      })
      .then((data) => {
        console.log(data.Search);
        setMovies(data.Search);
      })
      .catch((err) => {
        console.log(err);
        setIsError(true);
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    fetchMovies();
  }, [props.fetch]);

  const xMovies = movies.slice(0, 6);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container>
      <h3 className="text-white">
        {props.title}
        {isLoading && <Spinner animation="border" variant="danger" />}
      </h3>
      {isError && <Alert>Errore!</Alert>}
      <Slider {...settings} className="mb-4">
        {xMovies.map((movie) => (
          <Col className="mb-2 text-center px-1" key={movie.imdbID}>
            <img src={movie.Poster} alt={movie.Title} className="img-card" />
          </Col>
        ))}
      </Slider>
    </Container>
  );
};

export default NetflixGallery;