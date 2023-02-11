export const handleMood = (state, setMood) => {
  if (state === "FLORAL") {
    return setMood([
      {
        mood: "달콤한",
        img: "/assets/images/mood/달콤한.jpg",
        desc: "코 끝을 스치는 달콤함",
      },
      {
        mood: "사랑스러운",
        img: "/assets/images/mood/사랑스러운.jpg",
        desc: "눈에 꿀이 떨어질 거 같은 사랑스러움",
      },
      {
        mood: "싱그러운",
        img: "/assets/images/mood/싱그러운.jpg",
        desc: "상큼한 라임과 같은 싱그러움",
      },
      {
        mood: "포근한",
        img: "/assets/images/mood/포근한.jpg",
        desc: "이불 속 커피 한잔과 같은 포근함",
      },
    ]);
  } else if (state === "SOAPY") {
    return setMood([
      {
        mood: "산뜻한",
        img: "/assets/images/mood/산뜻한.jpg",
        desc: "산뜻한",
      },
      {
        mood: "포근한",
        img: "/assets/images/mood/포근한.jpg",
        desc: "포근한",
      },
      {
        mood: "세련된",
        img: "/assets/images/mood/세련된.jpg",
        desc: "세련된",
      },
      {
        mood: "깨끗한",
        img: "/assets/images/mood/깨끗한.jpg",
        desc: "깨끗한",
      },
    ]);
  } else if (state === "WODDY") {
    return setMood([
      {
        mood: "달콤한",
        img: "/assets/images/mood/달콤한.jpg",
        desc: "달콤한",
      },
      {
        mood: "시크한",
        img: "/assets/images/mood/시크한.jpg",
        desc: "시크한",
      },
      {
        mood: "차분한",
        img: "/assets/images/mood/차분한.jpg",
        desc: "차분한",
      },
      {
        mood: "산뜻한",
        img: "/assets/images/mood/산뜻한.jpg",
        desc: "산뜻한",
      },
    ]);
  } else if (state === "CITRUS") {
    return setMood([
      {
        mood: "상큼한",
        img: "/assets/images/mood/상큼한.jpg",
        desc: "상큼한",
      },
      {
        mood: "산뜻한",
        img: "/assets/images/mood/산뜻한.jpg",
        desc: "산뜻한",
      },
      {
        mood: "세련된",
        img: "/assets/images/mood/세련된.jpg",
        desc: "세련된",
      },
      {
        mood: "달콤한",
        img: "/assets/images/mood/달콤한.jpg",
        desc: "달콤한",
      },
    ]);
  } else if (state === "VANILLA") {
    return setMood([
      {
        mood: "달콤한",
        img: "/assets/images/mood/달콤한.jpg",
        desc: "달콤한",
      },
      {
        mood: "시크한",
        img: "/assets/images/mood/시크한.jpg",
        desc: "시크한",
      },
      {
        mood: "차분한",
        img: "/assets/images/mood/차분한.jpg",
        desc: "차분한",
      },
      {
        mood: "따뜻한",
        img: "/assets/images/mood/따뜻한.jpg",
        desc: "따뜻한",
      },
    ]);
  } else if (state === "FRUITY") {
    return setMood([
      {
        mood: "달콤한",
        img: "/assets/images/mood/달콤한.jpg",
        desc: "달콤한",
      },
      {
        mood: "시크한",
        img: "/assets/images/mood/시크한.jpg",
        desc: "시크한",
      },
      {
        mood: "어른스러운",
        img: "/assets/images/mood/어른스러운.jpg",
        desc: "어른스러운",
      },
      {
        mood: "따뜻한",
        img: "/assets/images/mood/따뜻한.jpg",
        desc: "따뜻한",
      },
    ]);
  }
};
