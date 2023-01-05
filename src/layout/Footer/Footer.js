import React from "react";
import classNames from "classnames/bind";
import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";
import IMG_FE_CREDIT from "../../image/IMG_FE_CREDIT.svg";
import IMG_phone from "../../image/IMG_phone.svg";
import IMG_FB from "../../image/IMG_FB.png";
import IMG_YT from "../../image/IMG_YT.png";
import IMG_Zalo from "../../image/IMG_Zalo.png";
import icon_location from "../../image/icon_location.svg";
import icon_phone from "../../image/icon_phone.svg";
import icon_email from "../../image/icon_email.svg";

const cx = classNames.bind(styles);
function Footer() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("footer")}>
        <img className={cx("logo")} src={IMG_FE_CREDIT} alt="IMG_FE_CREDIT" />
        <div className={cx("service")}>
          <div className={cx("service-title")}>

          <h3>BẠN MUỐN VAY NHANH</h3>
          <div className={cx("indicator-service")}></div>
          </div>
          <a href="">
            <img className={cx("IMG_Phone")} src={IMG_phone} alt="IMG_Phone" />
          </a>
          <div className={cx('content')}>
            <span>Kết nối</span>
            <span className={cx("social")}>
              <a href="">
                <img className={cx("IMG_bank")} src={IMG_FB} alt="IMG_FB" />
              </a>
              <a href="">
                <img className={cx("IMG_bank")} src={IMG_YT} alt="IMG_YT" />
              </a>
              <a href="">
                <img className={cx("IMG_bank")} src={IMG_Zalo} alt="IMG_Zalo" />
              </a>
            </span>
          </div>
        </div>
        <div className={cx("contact")}>
          <h3>LIÊN HỆ HỖ TRỢ</h3>
          <div className={cx("indicator-contact")}></div>

          <div className={cx("title")}>Phòng dịch vụ khách hàng:</div>
          <div className={cx("contact-item")}>
            <img src={icon_location} alt="" className={cx("contact-icon")} />
            <span>2/1/15 đường 40, F Hiệp Bình Chánh, Tp. Thủ Đức</span>
          </div>
          <div className={cx("contact-item")}>
            <img src={icon_phone} alt="" className={cx("contact-icon")} />
            <span>Hỗ trợ khách hàng sản phẩm vay:</span>
            <span className={cx("phone")}>1900 6535</span>
          </div>
          <div className={cx("contact-item")}>
            <img src={icon_phone} alt="" className={cx("contact-icon")} />
            <span>Hỗ trợ khách hàng thẻ tín dụng:</span>
            <span className={cx("phone")}>1900 6939</span>
          </div>
          <div className={cx("contact-item")}>
            <img src={icon_email} alt="" className={cx("contact-icon")} />
            <span>Gửi mail cho chúng tôi</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
