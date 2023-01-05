import React, { useState, useEffect, useRef } from "react";
import classNames from "classnames/bind";
import styles from "./information_recruit.module.scss";
import { useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import request from "../../utils/Request";
function Information_recruit() {
  const cx = classNames.bind(styles);
  const [recruit, setRecruit] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const getdata = async () => {
      const response = await request.get(`recruitment/${id}`);
      setRecruit(response.data);
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
          <h3 className={cx("title")}>{recruit.title}</h3>
          <p className={cx("description")}>
            <FontAwesomeIcon
              icon={faCalendarDays}
              className={cx("icon-calendardays")}
            />
            {formatDate(recruit.postDate)}
          </p>
          <img
            src={recruit.images}
            alt="IMG_recruit"
            className={cx("IMG_recruit")}
          />
          <p className={cx("content-tab")}>{recruit.detailWork}</p>
     
        </div>
       
      </div>
    </div>
  );
}

export default Information_recruit;
