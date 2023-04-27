import React from "react";
// import styles from "./BrandName.module.css";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import styled from "styled-components";
import { config } from "../../config";
import styles from "./BrandName.module.css";

export default function BrandName() {
  const [brand, setBrand] = useState("");
  const [isHaveInputValue, setIsHaveInputValue] = useState(false);
  const [dropDownItemIndex, setDropDownItemIndex] = useState(-1);

  const navigate = useNavigate();

  const handleBrand = (e) => {
    setBrand(e.target.value);
    setIsHaveInputValue(true);
  };

  const { data: brandList } = useQuery(
    ["brandList"],
    async () => {
      const data = await axios.get(`${config.api}/perfume/show-all-brand`);
      return data.data;
    },
    {
      staleTime: 10000 * 60 * 1,
    }
  );

  const [dropDownList, setDropDownList] = useState(brandList);

  const readPerfumeData = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${config.api}/perfume/find-by-brand`, {
        brandName: brand,
      });
      navigate(`/brandName/${brand}`, { state: response.data });
    } catch (error) {
      if (error.response.status === 404) {
        console.log(error);
        alert("해당 향수 브랜드가 없습니다");
      }
    }
  };

  const showDropDownList = () => {
    if (brand === "") {
      setIsHaveInputValue(false);
      setDropDownList([]);
    } else {
      const choosenTextList = brandList.filter((textItem) =>
        textItem.includes(brand)
      );
      setDropDownList(choosenTextList);
    }
  };

  const clickDropDownItem = (clickedItem) => {
    setBrand(clickedItem);
    setIsHaveInputValue(false);
  };

  const handleDropDownKey = (event) => {
    //input에 값이 있을때만 작동
    if (isHaveInputValue) {
      if (
        event.key === "ArrowDown" &&
        dropDownList.length - 1 > dropDownItemIndex
      ) {
        setDropDownItemIndex(dropDownItemIndex + 1);
      }

      if (event.key === "ArrowUp" && dropDownItemIndex >= 0)
        setDropDownItemIndex(dropDownItemIndex - 1);
      if (event.key === "Enter" && dropDownItemIndex >= 0) {
        clickDropDownItem(dropDownList[dropDownItemIndex]);
        setDropDownItemIndex(-1);
      }
    }
  };

  useEffect(showDropDownList, [brand, brandList]);

  return (
    <div className={styles.All}>
      <WholeBox>
        <form>
          <InputBox isHaveInputValue={isHaveInputValue}>
            <Input
              type='text'
              value={brand}
              placeholder='평소에 사용하시던 브랜드를 찾아주세요'
              onChange={handleBrand}
              onKeyUp={handleDropDownKey}
            />
            <DeleteButton
              onClick={(e) => {
                e.preventDefault();
                setBrand("");
              }}
            >
              &times;
            </DeleteButton>
            <SearchButton type='submit' onClick={readPerfumeData}>
              <BsSearch />
            </SearchButton>
          </InputBox>
          {isHaveInputValue && (
            <DropDownBox>
              {dropDownList.length === 0 && (
                <DropDownItem>해당하는 단어가 없습니다</DropDownItem>
              )}
              {dropDownList.map((dropDownItem, dropDownIndex) => {
                return (
                  <DropDownItem
                    key={dropDownIndex}
                    onClick={() => clickDropDownItem(dropDownItem)}
                    onMouseOver={() => setDropDownItemIndex(dropDownIndex)}
                    className={
                      dropDownItemIndex === dropDownIndex ? "selected" : ""
                    }
                  >
                    {dropDownItem}
                  </DropDownItem>
                );
              })}
            </DropDownBox>
          )}
        </form>
      </WholeBox>
      <button
        className={styles.returnRootBtn}
        onClick={() => navigate("/services")}
      >
        처음으로 돌아가기
      </button>
    </div>
  );
}

const activeBorderRadius = "16px 16px 0 0";
const inactiveBorderRadius = "16px 16px 16px 16px";

const WholeBox = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InputBox = styled.div`
  width: 600px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
  padding: 16px;
  border: 3px solid rgba(0, 0, 0, 0.3);
  border-radius: ${(props) =>
    props.isHaveInputValue ? activeBorderRadius : inactiveBorderRadius};
  z-index: 3;

  &:focus-within {
    box-shadow: 0 10px 10px rgb(0, 0, 0, 0.3);
  }

  @media (max-width: 850px) {
    width: 500px;
  }

  @media (max-width: 550px) {
    width: 350px;
  }
`;

const Input = styled.input`
  flex: 1 0 0;
  margin: 0;
  padding: 0;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 20px;
  color: white;
  ::placeholder {
    color: var(--color-white);
    font-weight: 600;
  }

  @media (max-width: 850px) {
    font-size: 18px;
  }

  @media (max-width: 550px) {
    font-size: 12px;
  }
`;

const DeleteButton = styled.button`
  cursor: pointer;
  font-size: 40px;
  background-color: inherit;
  border: none;
  color: white;

  @media (max-width: 550px) {
    font-size: 20px;
  }
`;

const SearchButton = styled.button`
  background-color: inherit;
  border: none;
  cursor: pointer;
  transform: translateY(20%);
  font-size: 32px;
  color: white;

  @media (max-width: 550px) {
    font-size: 15px;
  }
`;

const DropDownBox = styled.ul`
  display: block;
  margin: 0 auto;
  padding: 8px 0;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-top: none;
  border-radius: 0 0 16px 16px;
  box-shadow: 0 10px 10px rgb(0, 0, 0, 0.3);
  list-style-type: none;
  z-index: 3;
`;

const DropDownItem = styled.li`
  padding: 0 16px;

  &.selected {
    background-color: lightgray;
  }
`;
