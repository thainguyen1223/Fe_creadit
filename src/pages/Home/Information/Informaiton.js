import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Informaiton.module.scss";
import exits from "../../../image/exits.svg";
import request from "../../../utils/Request";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);

function Informaiton() {
  const [validate, setValidate] = useState([]);
  const [title, setTitle] = useState({
    name: "",
    phoneNumber: "",
    content: "",
  });
  const handleSubmitBtn = async () => {
    let temp = {
      name: false,
      phoneNumber: false,
      content: false,
    };
    console.log(temp);
    let isvalid = false;
    if (title.name == "" || title.name == undefined) {
      temp.name = true;
      isvalid = true;
      
    } else {
      temp.name = false;
    }
    if (title.phoneNumber == "" || title.phoneNumber == undefined) {
      temp.phoneNumber = true;
      isvalid = true;
    } else {
      temp.phoneNumber = false;
    }
    if (title.content == "" || title.content == undefined) {
      temp.content = true;
      isvalid = true;
    } else {
      temp.content = false;
    }

    if (isvalid == false) {
      try {
        const response = await request.post(`/advice-letter`, title);
        console.log(response);
        setTitle({ name: " ", phoneNumber: " ", content: " " });
        setShowExit(true);
      } catch (error) {
        console.log("lỗi");
        console.log(title);
      }
    } else {
      console.log(temp);
      setValidate(temp);
      return;
    }
  };

  const [showexit, setShowExit] = useState(false);
  const handleExits = () => {
    setShowExit(!showexit);
    setValidate("")
  };
  // const handledelete = () => {
  //   const delete_information = document.querySelector("#exits");

  //   console.log(delete_information);
  // };

  // const handleInput =(event) =>{
  //   setTitle({name:event.target.value})
  //   setTitle({contact:event.target.value})
  //   setTitle({content:event.target.value})
  // }
  return (
    <>
      <div className={cx("information-table")}>
        <div className={cx("title-items")}>
          <h3>
            Câu hỏi của bạn là gì?
            <div className={cx("indicator")}></div>
          </h3>
        </div>
        <div className={cx("contact")}>
          <h3>Họ và Tên</h3>
          <input
            type="name"
            className={cx("text")}
            value={title.name}
            onChange={(event) =>
              setTitle({ ...title, name: event.target.value })
            }
          />
          {validate.name == true ? (
            <p className={cx("text-modal")}>*Chưa nhập họ và tên</p>
          ) : (
            <p className={cx("p")}></p>
          )}
        </div>
        <div className={cx("contact")}>
          <h3>Số điện thoại của bạn</h3>
          <input
            type="text"
            className={cx("text")}
            value={title.phoneNumber}
            onChange={(event) =>
              setTitle({ ...title, phoneNumber: event.target.value })
            }
          />
          {validate.phoneNumber == true ? (
            <p className={cx("text-modal")}>*Chưa nhập số điện thoại</p>
          ) : (
            <p className={cx("p")}></p>
          )}
        </div>
        <div className={cx("content")} style={{ height: "330px" }}>
          <h3>Nội dung</h3>
          <textarea
            type="text"
            className={cx("text-content")}
            value={title.content}
            onChange={(event) =>
              setTitle({ ...title, content: event.target.value })
            }
          />
          {validate.content == true ? (
            <p className={cx("text-modal")}>*Chưa nhập nội dung</p>
          ) : (
            <p className={cx("p")}></p>
          )}
        </div>

        <div className={cx("btn-button")}>
          <button
            className={cx("btn-show-send")}
            onClick={() => handleSubmitBtn()}
          >
            Gửi
          </button>
        </div>
      </div>
      {showexit && (
        <div className={cx("board")}>

        <div className={cx("board-items")}>
          <div className={cx("board-exits")}>
            <div className={cx("icon-exits")} onClick={handleExits}>
              X
            </div>
          </div>

          <p className={cx("board-text")}>Câu hỏi của bạn đã được gửi</p>
        <div className={cx("board-indicator")}></div>
          <button className={cx("cancel")} onClick={handleExits}>
            Xác nhận
          </button>
       
        </div>
        </div>
      )}
    </>
  );
}

export default Informaiton;
