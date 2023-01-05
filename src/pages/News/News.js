import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import classNames from "classnames/bind";
import styles from "./News.module.scss";
import request from "../../utils/Request";
import { Link } from "react-router-dom";
// import ReactPaginate from "react-paginate";
import left from "../../image/left.svg";
import right from "../../image/right.svg";
import {
  faCircleXmark,
  faMagnifyingGlass,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const cx = classNames.bind(styles);

function News() {
  const [loading, setLoading] = useState(false);
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(4);
  const [totals, setTotals] = useState(0);
  // console.log(totals);
  let searchValue = "";

  useEffect(() => {
    const getdata = async () => {
      setLoading(true);
      const response = await request.get(`news/?limit=${limit}&page=${page}`);
      setLoading(false);
      setNews(response.data.data);
      console.log(response);

      let total = Math.ceil(response.data.total / limit);
      setTotals(total);
      console.log(total);
    };
    getdata();
  }, [page]);
  const handleInput = (event) => {
    searchValue = event.target.value;
  };

  const searchNews = async () => {
    console.log(searchValue);
    if (searchValue == "") {
      setLoading(true);
      const response = await request.get(`news/?limit=${limit}&page=${page}`);
      setNews(response.data.data);
      setLoading(false);
    } else {
      setLoading(true);
      const response = await request.get(
        `news/search/${searchValue}?limit=${limit}&page=${page}`
      );
      console.log(response);
      setNews(response.data.data);
      setLoading(false);
    }
  };
  const handleEnter = (event) => {
    searchNews([0]);
  };

  const nextPage = () => {
    console.log(page);
    if (page < totals) {
      setPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  const handlePage = async (value) => {
    setPage(value);
  };

 

  return (
    <>
      <div className={cx("wrapper")}>
        <div className={cx("news")}>
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
              {/* <button className={cx("clear")}>
                <FontAwesomeIcon  onClick={handleclear} icon={faCircleXmark} />
              </button> */}
            </div>
          </div>
          <h3 className={cx("news-title")}>Tin tức</h3>
          <div className={cx("images-page")}>
          
            {news?.map((newss, i) => (
              
              <div className={cx("news-items")} key={newss._id}>
                <img
                  src={newss.images[0]}
                  alt="IMG_VCB"
                  className={cx("IMG_VCB")}
                />
                <div className={cx("news-text")}>
                  <Link to={"/news/information/" + newss._id}>
                    <h3 className={cx("title")}> {newss.title}</h3>
                  </Link>
                  <p>{newss.detailWork}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={cx("move")}>
            <img className={cx("pev")} src={right} alt="" onClick={prevPage} />
            <>
              {(() => {
                const result = [];
                for (let index = 0; index < totals; index++) {
                  result.push(
                    <div className={cx("page")} key={index}>
                      <div
                        className={cx("page-items active")}
                        onClick={() => handlePage(index + 1)}
                      >
                        {index + 1}
                      </div>
                    </div>
                  );
                }
                return result;
              })()}
            </>
            <img className={cx("next")} src={left} alt="" onClick={nextPage} />
          </div>
        </div>
      </div>
    </>
  );
}

export default News;
