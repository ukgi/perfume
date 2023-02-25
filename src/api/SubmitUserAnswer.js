// import axios from "axios";
// import { useCallback } from "react";
// import { useUserContext } from "../context/UserContextApi";

// export default function SubmitUserAnswer(setData, navigate) {
//   const { user } = useUserContext();

//   const submitUserAnswer = useCallback(async () => {
//     try {
//       const data = await axios.post(
//         "http://43.200.94.119:8080/survey/show-perfume-by-survey",
//         user
//       );
//       console.log("서버로부터 도착한 데이터🚀", data.data);
//       setData(data.data);
//     } catch (error) {
//       console.error(error);
//       navigate("/error");
//     }
//   }, [user, navigate]);

//   return submitUserAnswer();
// }
