import { useEffect, useState, useRef } from "react";
import classNames from "classnames/bind";
import styles from "./Search.module.scss";
import search from "../../image/search.svg";
import IMG_VCB from "../../image/VCB.jpg";
import request from "../../utils/Request";

function Search() {
  const cx = classNames.bind(styles);
  let searchValue = "";
    // useEffect(() => {
 

    //   const fetchApi = async () => {
     

    //     const result = await request.get(`news`);

    //     setSearchResult(result);
 
    //   };

    //   fetchApi();
    // }, []);

    //   const handleChange=(e)=>{
    //     const searchValue=e.target.value;
    
    //     if(!searchValue.startsWith(' ') ){
          
    //       setSearchText(searchValue)
    //     }
    //   }

  const handleInput = (event) =>{
    searchValue =event.target.value    
  } 

  const searchNews =async () =>{
    console.log(searchValue ) ;
    const response = await request.get(`news/search/${searchValue}`);
    console.log(response);
  }
  
  return (
    <div className={cx("search")}>
        <input
          onChange={handleInput}
          spellCheck={false}
          className={cx("input-from")}
          type="text"
          placeholder="Nhập nội dung cần tìm và gõ Enter"
        />      
      <img
       onClick={searchNews}
        src={search}
        alt="search"
        className={cx("search-icon")}
      />

    </div>
  );
}

export default Search;
