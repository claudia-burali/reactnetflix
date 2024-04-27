import React from 'react';
import { Component } from "react";
import { Alert, Col, Container, Spinner } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

class NetflixGallery extends Component {
  state = {
    Movies: [],
    isLoading: false,
    isError: false
  };

  fetchMovies = () => {
    this.setState({ isLoading: true });

    console.log("Fetch in corso...");
    fetch("http://www.omdbapi.com/?apikey=cec95536&s=" + this.props.fetch)

      .then(response => {
        if (response.ok) {
          console.log("Fetch conclusa");
          return response.json();
        } else {
          throw new Error("Errore nella richiesta");
        }
      })

      .then(Movies => {
        console.log(Movies.Search);
        this.setState({ Movies: Movies.Search })

      })

      .catch(err => {
        console.log(err);
        this.setState({ isError: true });
      })
      .finally(() => this.setState({ isLoading: false }));
  };

  componentDidMount = (fetch) => {
    this.fetchMovies();
  };

  render() {
    const xMovies = this.state.Movies.filter((movie, index) => index < 6);
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
            {this.props.title}
            {this.state.isLoading && (
                <Spinner animation="border" variant="danger" />
            )}
        </h3>
        {this.state.isError && (
            <Alert>Errore!</Alert>
        )}
        <Slider {...settings} className="mb-4">
            {xMovies.map((movies) => {
                return (
                    <Col className="mb-2 text-center px-1" key={movies.imdbID}>
                       <img
                         src={movies.Poster}
                         alt={movies.Title}
                         className="img-card"
                       />
                   </Col>
                )
            }
        )}
        </Slider>
      </Container>
    );
  }
}

export default NetflixGallery;