import React from "react";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

import Search from "../Search/Search";
const cx = classNames.bind(styles);

function Header() {

  return (
    <div className={cx("wrapper")}>
      <div className={cx("header-flex")}>
        <div className={cx("header")}>
          <Link to={"/"}>
            <div className={cx("brand")}>FindLid</div>
          </Link>
          <div className={cx("navbar")}>
            {/* <Search /> */}
            <Link to={"/"}>
              <div className={cx("navbar-item")}>TRANG CHỦ</div>
            </Link>
            <Link to={"/news"}>
              <div className={cx("navbar-item")}>TIN TỨC</div>
            </Link>
            <Link to={"/recruit"}>
              <div className={cx("navbar-item")}>TUYỂN DỤNG </div>
            </Link>
            <a a href="https://credit-github-io.vercel.app/login">

            <button className={cx("btn-login")}>LOG IN</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
