import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./Informationstaff.module.scss";
import IMG_staff from "../../../image/man.svg";
import request from "../../../utils/Request";
import exit from "../../../image/exits.svg";


function InformationSatff({handleShow ,ac  }) {
  const cx = classNames.bind(styles);
  const [staff, setStaff] = useState([]);
 
  console.log(staff);
  useEffect(() => {
    const getdata = async () => {
      const response = await request.get(`user/${ac}`);
      setStaff(response.data);
      console.log(response);
      // setAc(response.data.data);
    };
    getdata();
  }, []);
  console.log(ac);

  return (
    <div className={cx("information-form")}>
      <div className={cx("information-painted")}>
        <div></div>
        <h3 className={cx("form-title")}>Thông Tin nhân viên tiêu biểu</h3>
        <img
          src={exit}
          alt="exit"
          className={cx("exits")}
          onClick={handleShow}
        />
      </div>
            <div className={cx("form")}>
        <img src={IMG_staff} alt="VCB" className={cx("IMG_information")} />
        <div className={cx("form-staff")}>
          <div className={cx("form-group")}>
            <div className={cx("dot")}>.</div>
            <h3 className={cx("form-text")}>
              Họ và tên :<span>{staff.userName}</span>
            </h3>
          </div>

          <div className={cx("form-group")}>
            <div className={cx("dot")}>.</div>
            <h3 className={cx("form-text")}>
              Ngày tháng năm sinh :<span>13/05/2000</span>
            </h3>
          </div>
          <div className={cx("form-group")}>
            <div className={cx("dot")}>.</div>
            <h3 className={cx("form-text")}>
              Vị trí : <span>Nhân Viên</span>
            </h3>
          </div>
          <div className={cx("form-group")}>
            <div className={cx("dot")}>.</div>
            <div className={cx("form-achievements")}>
              <h3 className={cx("form-text")}>Thành tích :</h3>
              <p className={cx("achievements")}>
                <li className={cx("list-achievements")}>
                  bổ sung hồ sơ sử dung đất
                </li>
                <li className={cx("list-achievements")}>
                  bổ sung hồ sơ sử dung đất
                </li>
                <li className={cx("list-achievements")}>
                  bổ sung hồ sơ sử dung đất
                </li>
              </p>
            </div>
          </div>
        </div>
  
      </div>

      <div></div>
    </div>
  );
}

export default InformationSatff;
