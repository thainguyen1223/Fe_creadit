import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./Services.scss";
import IMG_staff from "../../image/man.svg";
import Information from "../Home/Information";
import request from "../../utils/Request";
import InformationSatff from "./Information-staff/InformationSatff";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { staffid } from "./staffid";
const cx = classNames.bind(styles);

function Staff() {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  // const [show, setShow] = useState(false);
  const [service, setService] = useState([]);
  const [customer, setCustomer] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(3);
  const [ac, setAc] = useState("");

  // const handleShow = (id) => {
  //   setAc(id);
  //   setShow(!show);
  // };

  useEffect(() => {
    const getdata = async () => {
      const response = await request.get(
        `fe-service/?limit=${limit}&page=${page}`
      );
      setService(response.data.data);
      // console.log(response);
      setAc(response.data.data);
    };
    getdata();
  }, []);

  useEffect(() => {
    const getdata = async () => {
      const response = await request.get(
        `customer-review/?limit=${limit}&page=${page}`
      );
      setCustomer(response.data.data);
      // console.log(response);
      setAc(response.data.data);
    };
    getdata();
  }, []);

  return (
    <div className={cx("wrapper-service")}>
      <div className={cx("services")}>
        <h3 className={cx("title-services")}>Các gói dich vụ </h3>
        <div className={cx("services-member")}>
          {service.map((services, index) => (
            <div className={cx("services-items")} key={index}>
              <div className={cx("title-flex")}>
                <h3 className={cx("title")}>{services.name}</h3>
                <div className={cx("indicator")}></div>
              </div>
              <div className={cx("items-flex")}>
                <div className={cx("items")} key={index}>
                  <p>
                    Gói:
                    <span>{services.rate}.000.000 vnđ</span>
                  </p>
                  <p>
                    Thời gian vay: <span>12 tháng</span>
                  </p>
                  <p>
                    Lãi suất: <span>7%</span>
                  </p>
                </div>

                <button className={cx("btn-show-services")}>ĐĂNG KÝ</button>
              </div>
            </div>
          ))}
        </div>
        <div></div>
        {/* {show && (
          <InformationSatff handleShow={handleShow} ac={ac} setAc={setAc} />
        )} */}
      </div>
      <div className={cx("customer")}>
        <div className={cx("reviews")}>
          <h3>Khách hàng đánh giá </h3>
          <Slider className={cx("silder customer-list")} {...settings}>
            {customer.map((customer, index) => (
              <p key={index}>{customer.review}</p>
            ))}
          </Slider>
        </div>
      </div>
      <div className={cx("information-home")}>
        <div className={cx("information")}>
          <div className={cx("information-title")}>
            <h3>Thông tin tư vấn</h3>
          </div>
          <div className={cx("information-flex")}>
              <Information/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Staff;
