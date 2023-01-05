import React, { useState, useEffect } from "react";
import request from "../../utils/Request";
import "./banner.scss";
import IMG_VCB from "../../image/VCB.jpg";
import News from "../News/News";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Link } from "react-router-dom";

function Banner() {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const [show, setShow] = useState(false);
  const [news, setSNews] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(3);
  useEffect(() => {
    const getdata = async () => {
      const response = await request.get(`news/?limit=${limit}&page=${page}`);
      setSNews(response.data.data);
      console.log(response);

    };
    getdata();
  }, []);
  return (
    <div className="wrapper-banner">
      <div className="banner-group">
        <Slider className="silder" {...settings}>
          {news.map((newss, index) => (
            <div className="banner" key={index}>
              <img src={newss.images} alt="IMG_VCB" className="IMG_VCB" />
              <div className="banner-text">
                <h3>{newss.title}</h3>
                <p>{newss.detailWork}</p>
                <Link to={"/news/information/" + newss._id}>
                <button className="btn-show">HIỂN THỊ</button>
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div>
        <News />
      </div>
    </div>
  );
}

export default Banner;
