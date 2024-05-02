import React from 'react';
import { Container, Row, Col, Button, Dropdown } from 'react-bootstrap';
import NetflixGallery from '../components/NetflixGallery';

const NetflixMain = () => {
  return (
    <Container className="my-3">
      <Row className="text-center text-light text-lg-start d-flex align-items-center justify-content-between my-4">
        <Col>
          <div className="d-flex gap-3 align-items-center">
            <h1 className="d-inline">TV Shows</h1>
            <Dropdown className="d-inline">
              <Dropdown.Toggle variant="outline-light" id="dropdown-basic">
                Genres
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropdown-menu-dark">
                <Dropdown.Item href="#">Comedy</Dropdown.Item>
                <Dropdown.Item href="#">Crime</Dropdown.Item>
                <Dropdown.Item href="#">Horror</Dropdown.Item>
                <Dropdown.Item href="#">Drama</Dropdown.Item>
                <Dropdown.Item href="#">Thriller</Dropdown.Item>
                <Dropdown.Item href="#">Anime</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Col>
        <Col>
          <div className="d-flex gap-1 justify-content-end">
            <Button variant="outline-light">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-text-left"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"
                />
              </svg>
            </Button>
            <Button variant="outline-light">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-grid-fill"
                viewBox="0 0 16 16"
              >
                <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5z" />
              </svg>
            </Button>
          </div>
        </Col>
      </Row>
      <NetflixGallery title={'Trending Now'} fetch={'Doctor Who'} />
      <NetflixGallery title={'Watch it Again'} fetch={'Twilight'} />
      <NetflixGallery title={'New Releases'} fetch={'Sherlock'} />
    </Container>
  );
};

export default NetflixMain;