import React from "react";
import styles from "./BrandName.module.css";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function BrandName() {
  const [brand, setBrand] = useState("");
  const navigate = useNavigate();

  const handleBrand = (e) => setBrand(e.target.value);

  // ${process.env.REACT_APP_SERVER_DOMAIN}/perfume/find-by-brand
  const readPerfumeData = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`/data/perfumeBrand.json`);
      console.log(response);
      navigate(`/brandName/${brand}`, { state: response.data });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <form className={styles.searchBar} onSubmit={readPerfumeData}>
          <input
            className={styles.searchBarInput}
            type='text'
            placeholder='평소에 사용하는 향수 브랜드를 입력하세요'
            value={brand}
            onChange={handleBrand}
          />
          <button className={styles.searchBarBtn} type='submit'>
            <BsSearch className={styles.searchBarBtnIcon} />
          </button>
        </form>
      </div>
    </div>
  );
}
