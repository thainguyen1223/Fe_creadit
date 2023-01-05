import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./home.module.scss";
import VCB from "../../image/VCB.jpg";
import frames from "../../image/frames.png";
import Icon_location from "../../image/icon_location.svg";
import request from "../../utils/Request";
import Services from "../Services";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const cx = classNames.bind(styles);

function Home() {
  const [news, setNews] = useState([]);
  const [recruit, setRecruit] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(4);
  const settings = {
    dots: true,
    // autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    const getdata = async () => {
      const response = await request.get(`news/?limit=${limit}&page=${page}`);
      setNews(response.data.data);
      // console.log(response);
    };
    getdata();
  }, []);

  useEffect(() => {
    const getdata = async () => {
      const response = await request.get(
        `recruitment/?limit=${limit}&page=${page}`
      );
      setRecruit(response.data.data);
      // console.log(response);
    };
    getdata();
  }, []);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("home-group")}>
        <Slider className={cx("silder")} {...settings}>
          {news.map((home, index) => (
            <div className={cx("home")} key={index}>
              <div className={cx("home-text")}>
                <h3>{home.title}</h3>
                <p>{home.detailWork}</p>
                <Link to={"/news/information/" + home._id}>
                  <button className={cx("btn-show")}>HIỂN THỊ</button>
                </Link>
              </div>

              <div className={cx("home-frames")}>
                <img className={cx("frames")} src={frames} alt="frames" />
                <img className={cx("IMG")} src={home.images[0]} alt="VCB" />
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className={cx("home-container")}>
        <div className={cx("home-banner")}>
          {recruit.map((recruits, index) => (
            <div className={cx("home-items")} key={index}>
              <img
                src={Icon_location}
                alt="icon_location"
                className={cx("icon_location")}
              />

              <div className={cx("text")}>
                <Link to={"/recruit/information/" + recruits._id}>
                  <h3>{recruits.title}</h3>
                </Link>
                <p>{recruits.address}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={cx("home-list")}>
        <div className={cx("home-notify")}>
          <div className={cx("home-items")}>
            <div className={cx("frames-indicator")}></div>
            <img className={cx("IMG-frames")} src={VCB} alt="VCB" />
          </div>
          <div className={cx("home-text")}>
            <h3>
              Thông báo kế hoạch thu hồi điểm VCB Rewards hết hạn năm 2022
            </h3>
            <div className={cx("indicator")}></div>
            <p>
              Điểm VCB Rewards mà Quý khách hàng đã tích lũy trong năm 2021
              nhưng chưa sử dụng hết tính đến hết ngày 31/10/2022 sẽ hết hạn và
              được thu hồi căn cứ thể lệ chương trình VCB Rewards.
            </p>
            <button className={cx("btn-show")}>HIỂN THỊ</button>
          </div>
        </div>
      </div>
      {/* 
      <div className={cx("news-feature")}>
        <h3>Tin tức nổi bật</h3>
        <div className={cx("news")}>
          {news.map((home, index) => (
            <div className={cx("news-items")} key={index}>
              <div className={cx("icon-banner")}>
                <img
                  src={Icon_location}
                  alt="icon_location"
                  className={cx("icon_location")}
                />
              </div>
              <p>{home.title}</p>
            </div>
          ))}
        </div>
      </div> */}

      <div className={cx("services")}>
        <Services />
      </div>
    </div>
  );
}

export default Home;
