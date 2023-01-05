import React, { useState, useEffect, useRef } from "react";
import classNames from "classnames/bind";
import styles from "./Information_news.module.scss";

import { useParams, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import IMG_VCB from "../../image/VCB.jpg";
import request from "../../utils/Request";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

function Information_news() {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const cx = classNames.bind(styles);
  const [news, setNews] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const getdata = async () => {
      const response = await request.get(`news/${id}`);
      setNews(response.data);
      console.log(response);
    };

    getdata();
  }, []);
  console.log(id);

  const formatDate = (time) => {
    const date = new Date(time);
    return date.toLocaleDateString();
  };

  return (
    <div className={cx("wrapper-information")}>
      <div className={cx("information")}>
        <div className={cx("information-content")}>
          <h3 className={cx("title")}>{news.title}</h3>
          <p className={cx("description")}>
            <FontAwesomeIcon
              icon={faCalendarDays}
              className={cx("icon-calendardays")}
            />
            {formatDate(news.postDate)}
          </p>
          <img
            src={news.images}
            alt="IMG_recruit"
            className={cx("IMG_recruit")}
          />
          <p className={cx("content-tab")}>{news.detailWork}</p>
          <div className={cx("card")}></div>
        </div>
        {/* <div className={cx("information-news")}>
          <h3 className={cx("news-title")}>Các tin liên quan</h3>
          <div className="banner-group">
            <Slider className="silder" {...settings}>
              
                <div className="banner" >
                  <img src={news.images} alt="IMG_VCB" className="IMG_VCB" />
                  <div className="banner-text">
                    <h3>{news.title}</h3>
                    <p>{news.detailWork}</p>
                    <Link to={"/news/information/" + news._id}>
                      <button className="btn-show">HIỂN THỊ</button>
                    </Link>
                  </div>
                </div>
       
            </Slider>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Information_news;
