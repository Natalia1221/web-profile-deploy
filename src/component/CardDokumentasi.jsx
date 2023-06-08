import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';

function Slider({ items}) {
  return (
    <Carousel>
      {items.map((news, index)=>
        {return <Carousel.Item key={index} interval={1000}>
                  <img
                    className="d-block w-100"
                    src={news}
                    alt="First slide"
                  />
                  <Carousel.Caption>Laboratorium SCR</Carousel.Caption>
              </Carousel.Item>
        })}
    </Carousel>
  );
}

function CarouselFadeExample({ images}) {
  return (
    <Carousel fade controls="1">
      {images.map((image, index)=>
        {return <Carousel.Item key={index}>
                  <img
                    className="d-block w-100"
                    src={image}
                    alt="First slide"
                  />
              </Carousel.Item>
        })}
    </Carousel>
  );
}

function ImageAndTextExample({ items, name}) {
  return (
    <>
      <Card className="cardKegiatan">
        <CarouselFadeExample  images={items} />
        <Card.Body className="cardCaption">
          <Card.Text >{name}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export {Slider, ImageAndTextExample};