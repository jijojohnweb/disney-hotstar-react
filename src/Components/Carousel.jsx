import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import styled from "styled-components";

// import "@slick-carousel/slick/slick.css";
// import "@slick-carousel/slick/slick-theme.css";

const Carousel = (props) => {
  const { data, imgsrc } = props;
  const sw = window.innerWidth;

  console.log(sw)

  const settings = {
    className: "center",
    width: "100%",
    centerMode: true,
    infinite: true,
    slidesToShow: 1,
    centerPadding: '0px',
    speed: 500,
    // autoplay: true,
    arrows: false,
  };

  return (
    <div>
      <Slider {...settings} className="slider-container">
        {data.slice(0, 5).map((item) => {
          return (
            <SliderItem key={item.id}>
              <Link to={"/in/" + (item.name || item.title).toLowerCase().replace(" ","-") + "/" + item.id}>
                <div className="slide-container">
                  <img src={imgsrc + item.backdrop_path} alt="" />
                  <div className="content-container">
                    <div className="content">
                      <h2 className="title">{item.name || item.title}</h2>
                      <p className="catagory">{item.vote_average} {item.release_date}</p>
                      <p className="description">{item.overview}</p>
                    </div>
                  </div> 
                </div>
              </Link>
            </SliderItem>
          );
        })}
      </Slider>
    </div>
  );
};
Slider = styled(Slider)`
  width: 100%;
  position: relative;
  overflow: hidden;
  color: white;
  .slick-track {
    display: flex;
  }
  .slick-arrow {
    display: none !important;
  }
  .slick-list {
    padding-left: 50px !important;
    padding-right: 50px !important;
    width: calc(100% - (50px + 50px));
  }
  @media only screen and (max-width: 426px) {
    .slick-list {
    padding-left: 10px !important;
    padding-right: 10px !important;
    width: calc(100% - 20px);
  }
  }
`;

const SliderItem = styled.div`
  height: 420px;
  overflow: hidden;

  .slide-container {
    background-color: #000000;
    height: 100%;
    border-radius: 10px;
    margin: 0 10px;
    position: relative;
    overflow: hidden;
     @media only screen and (max-width: 426px) {
      margin: 0 5px;
     }
    img {
      position: absolute;
      right: 0;
      height: 100%;
      width: 70%;
    }
    .content-container {
      position: absolute;
      height: 100%;
      width: 70%;
      background: linear-gradient(to right, #000000 70%, transparent);
      color: white;
      display: flex;
      align-items: center;
      padding-left: 3.2rem;
      
      .content {
        /* border: 1px solid red; */
        width: 50%;
      }
      .content .title {
        height: auto;
        -webkit-line-clamp: 2;
      }
      .content .catagory {
        font-size: 16px;
        font-weight: 500;
        padding-top: 10px;
      }
      .content .description {
        font-size: 16px;
        padding-top: 10px;
        overflow-wrap: break-word;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4;
        overflow: hidden;
        line-height: 28px;
      }
    }
  }
  @media only screen and (max-width: 426px) {
    width: 100%;
    height: 210px;
  }
`;

export default Carousel;
