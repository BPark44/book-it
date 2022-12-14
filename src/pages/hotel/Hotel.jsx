import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../../components/footer/Footer";
import MailList from "../../components/mailList/MailList";
import { useState } from "react";

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const images = [
    {
      src: "https://a.cdn-hotels.com/gdcs/production92/d1580/9a28fc70-9bea-11e8-a1b5-0242ac110053.jpg",
    },
    {
      src: "https://a.cdn-hotels.com/gdcs/production190/d1709/1115d808-d4ff-4787-b024-32d7b0d3eefc.jpg?impolicy=fcrop&w=800&h=533&q=medium",
    },
    {
      src: "https://a.cdn-hotels.com/gdcs/production158/d625/ae569120-88c6-4bf7-95a2-4dd3b294943a.jpg",
    },
    {
      src: "https://cdn.britannica.com/51/178051-050-3B786A55/San-Francisco.jpg",
    },
    {
      src: "https://www.urlaubstracker.de/wp-content/uploads/2018/01/usa-san-francisco-street-1000x667.jpg",
    },
    {
      src: "https://cdn.thecrazytourist.com/wp-content/uploads/2017/09/ccimage-shutterstock_412496293.jpg",
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;
    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(!open)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={images[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">The Hotel San Francisco</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Triff Street, San Fransico</span>
          </div>
          <span className="hotelDistance">
            Awesome location, right on the water.
          </span>
          <span className="hotelPriceHighlight">
            Book a room over $100 at this location and receive a free ride to
            the airport!
          </span>
          <div className="hotelImages">
            {images.map((image, i) => (
              <div className="hotelImgWrapper">
                <img
                  onClick={() => handleOpen(i)}
                  src={image.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in sunny San Fran</h1>
              <p className="hotelDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                labore dolor illo eos voluptas ad, quod nesciunt similique!
                Atque facere suscipit facilis doloribus deleniti minima
                distinctio, reprehenderit voluptatum omnis numquam!
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                labore dolor illo eos voluptas ad, quod nesciunt similique!
                Atque facere suscipit facilis doloribus deleniti minima
                distinctio, reprehenderit voluptatum omnis numquam!
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>3 night stay</h1>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                labore dolor illo
              </span>
              <h2>
                <b>$429</b> (3 nights)
              </h2>
              <button>Reserve or Book Now</button>
            </div>
          </div>
        </div>
      </div>
      <MailList />
      <br />
      <Footer className="footer" />
    </div>
  );
};

export default Hotel;
