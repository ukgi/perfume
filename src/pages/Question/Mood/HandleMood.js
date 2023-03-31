export const handleMood = (state, setMood) => {
  if (state === "플로럴") {
    return setMood([
      {
        mood: "달콤한",
        img: "/assets/images/mood/달콤한.webp",
        desc: "코 끝을 스치는 달콤함",
      },
      {
        mood: "관능적인",
        img: "/assets/images/mood/관능적인.webp",
        desc: "나도 모르게 스며들 것 같은 관능적임",
      },
      {
        mood: "싱그러운",
        img: "/assets/images/mood/싱그러운.webp",
        desc: "상큼한 라임과 같은 싱그러움",
      },
      {
        mood: "포근한",
        img: "/assets/images/mood/포근한.webp",
        desc: "이불 속 커피 한잔과 같은 포근함",
      },
    ]);
  } else if (state === "소피") {
    return setMood([
      {
        mood: "산뜻한",
        img: "/assets/images/mood/산뜻한.webp",
        desc: "금방 세탁한 옷감같은 산뜻함",
      },
      {
        mood: "포근한",
        img: "/assets/images/mood/포근한.webp",
        desc: "이불 속 커피 한잔과 같은 포근함",
      },
      {
        mood: "세련된",
        img: "/assets/images/mood/세련된.webp",
        desc: "도시 속 모던함을 갖춘 세련함",
      },
      {
        mood: "깨끗한",
        img: "/assets/images/mood/깨끗한.webp",
        desc: "뽀송한 비누로 씻은 듯한 깨끗함",
      },
    ]);
  } else if (state === "우디") {
    return setMood([
      {
        mood: "달콤한",
        img: "/assets/images/mood/달콤한.webp",
        desc: "코 끝을 스치는 달콤함",
      },
      {
        mood: "시크한",
        img: "/assets/images/mood/시크한.webp",
        desc: "찔러도 피 한 방울 나오지 않는 시크함",
      },
      {
        mood: "차분한",
        img: "/assets/images/mood/차분한.webp",
        desc: "도서관에서 조용히 책을 읽는 듯한 차분함",
      },
      {
        mood: "산뜻한",
        img: "/assets/images/mood/산뜻한.webp",
        desc: "금방 세탁한 옷감같은 산뜻함",
      },
    ]);
  } else if (state === "시트러스") {
    return setMood([
      {
        mood: "상큼한",
        img: "/assets/images/mood/상큼한.webp",
        desc: "과일을 베어문듯한 상큼함",
      },
      {
        mood: "산뜻한",
        img: "/assets/images/mood/산뜻한.webp",
        desc: "금방 세탁한 옷감같은 산뜻함",
      },
      {
        mood: "세련된",
        img: "/assets/images/mood/세련된.webp",
        desc: "도시 속 모던함을 갖춘 세련함",
      },
      {
        mood: "달콤한",
        img: "/assets/images/mood/달콤한.webp",
        desc: "코 끝을 스치는 달콤함",
      },
    ]);
  } else if (state === "바닐라") {
    return setMood([
      {
        mood: "달콤한",
        img: "/assets/images/mood/달콤한.webp",
        desc: "코 끝을 스치는 달콤함",
      },
      {
        mood: "시크한",
        img: "/assets/images/mood/시크한.webp",
        desc: "찔러도 피 한 방울 나오지 않는 시크함",
      },
      {
        mood: "차분한",
        img: "/assets/images/mood/차분한.webp",
        desc: "도서관에서 조용히 책을 읽는 듯한 차분함",
      },
      {
        mood: "따뜻한",
        img: "/assets/images/mood/따뜻한.webp",
        desc: "사랑스러운 연인 품에 안겨있는 듯한 따뜻함",
      },
    ]);
  } else if (state === "프루티") {
    return setMood([
      {
        mood: "달콤한",
        img: "/assets/images/mood/달콤한.webp",
        desc: "코 끝을 스치는 달콤함",
      },
      {
        mood: "시크한",
        img: "/assets/images/mood/시크한.webp",
        desc: "찔러도 피 한 방울 나오지 않는 시크함",
      },
      {
        mood: "관능적인",
        img: "/assets/images/mood/관능적인.webp",
        desc: "나도 모르게 스며들 것 같은 관능적임",
      },
      {
        mood: "따뜻한",
        img: "/assets/images/mood/따뜻한.webp",
        desc: "사랑스러운 연인 품에 안겨있는 듯한 따뜻함",
      },
    ]);
  }
};
