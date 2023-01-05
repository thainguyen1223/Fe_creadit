import React, { useState, useEffect } from "react";

import classNames from "classnames/bind";
import styles from "./Recruit.module.scss";

import ReactPaginate from "react-paginate";
import left from "../../image/left.svg";
import right from "../../image/right.svg";
import request from "../../utils/Request";

import { Link } from "react-router-dom";
import searchIMG from "../../image/search.svg";

import {
  faCircleXmark,
  faMagnifyingGlass,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Recruit() {
  const cx = classNames.bind(styles);
  const [loading, setLoading] = useState(false);
  const [recruit, setRecruit] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(4);
  const [totals, setTotals] = useState(0);
  let searchValue = "";


  const handleInput = (event) => {
    searchValue = event.target.value;
  };
  useEffect(() => {
    const getdata = async () => {
      setLoading(true);
      const response = await request.get(`recruitment/?limit=${limit}&page=${page}`);
      setRecruit(response.data.data);
      setLoading(false);
      let total = Math.ceil(response.data.total / limit);
      setTotals(total);
      console.log(total)
    };

    getdata();
  }, [page]);

  const searchNews = async () => {
    console.log(searchValue);
    if (searchValue == "") {
      setLoading(true);
      const response = await request.get(`recruitment/?limit=4&page=${page}`);
      setRecruit(response.data.data);
      setLoading(false);
    } else {
      setLoading(true);
      const response = await request.get(
        `recruitment/search/${searchValue}?limit=4&page=${page}`
      );
      console.log(response);
      setRecruit(response.data.data);
      setLoading(false);
    }
  };
  const handleEnter = (event) => {
    searchNews([0]);

  };

  const nextPage = () => {
    console.log(page  )
    if(page < totals){
      setPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if(page > 1){
      setPage((prev) => prev - 1);
    }
  };

  const handlePage = async (value) => {
    setPage(value);
  };
  return (
    <>
      <div className={cx("wrapper")}>
        <div className={cx("recruit")}>
          <h3 className={cx("recruit-title")}>TIN TUYỂN DỤNG</h3>
          <div className={cx("images-page")}>
            <div className={cx("search-btn")}>
              <div className={cx("search")}>
                <input
                  onKeyUp={handleEnter}
                  onChange={handleInput}
                  spellCheck={false}
                  className={cx("input-from")}
                  type="text"
                  placeholder="Nhập nội dung cần tìm"
                />
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  onClick={searchNews}
                  className={cx("search-icon")}
                />
                {loading && (
                  <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />
                )}
              </div>
            </div>
            <div className={cx("images-page")}>
              {recruit.map((recruit, index) => (
                <div className={cx("recruit-items")} key={index}>
                  <img
                    src={recruit.images[0]}
                    alt="IMG_Recuit"
                    className={cx("IMG_Recuit")}
                  />
                  <div className={cx("recruit-text")}>
                    <Link to={"/recruit/information/" + recruit._id}>
                      <h3 className={cx("title")}> {recruit.title}</h3>
                    </Link>
                    <p>{recruit.detailWork}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className={cx("move")}>
              <img
                className={cx("pev")}
                src={right}
                alt=""
                onClick={prevPage}
              />
              <>
                {(() => {
                  const result = [];
                  for (let index = 0; index < totals; index++) {
                    result.push(
                      <div className={cx("page")} key={index}>
                        <div className={cx("page-items")}>
                          <span onClick={() => handlePage(index + 1)}>
                            {index + 1}
                          </span>
                        </div>
                      </div>
                    );
                  }
                  return result;
                })()}
              </>
              <img
                className={cx("next")}
                src={left}
                alt=""
                onClick={nextPage}
              />
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Recruit;
