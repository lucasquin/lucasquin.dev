import React from "react";
import ImageZoom from "../../components/ImageZoom";
import BackgroundImage from "../../assets/images/brazil.jpg";
import Marquee from "../../components/Marquee";

function Home() {
  return (
    <>
      <div className="container">
        <Marquee
          className="marquee"
          text="LUCASQUIN'S WEBSITE"
          textColor="white"
          fontSize={100}
          fontWeight={800}
        ></Marquee>
        <ImageZoom
          imagePath={BackgroundImage}
          imageDescription="Picture of Rio de Janeiro - Brazil"
        ></ImageZoom>
      </div>
    </>
  );
}

export default Home;
