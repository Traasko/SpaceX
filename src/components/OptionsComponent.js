// import Quiz from "../pages/Quiz";
// import { useState } from "react";

// const Options = ({questionAnswer, options}) => {
//   const [selected, setSelected] = useState(false);
//   const [score, setScore] = useState(0);
//   const [trueAnswer, setTrueAnswer] = useState(questionAnswer);
//   const settings = () => {
//     setTrueAnswer(questionAnswer);
//   }
//   if(questionAnswer != trueAnswer) {
//     settings();
//     setSelected(false);
//   }
//   function scoring(answer) {
//     console.log(score)
//     if(answer) {
//       if(answer.target.value === trueAnswer) {
//         console.log("Correct !");
//         setScore(score+1);
//       }
//       else {
//         console.log("Incorrect...");
//       }
//       setSelected(true);
//       console.log(selected)
//     }
//   }
//     return (
//       <>
//       {options.map((option) => (
//                 <>
//                     <button onClick={scoring} key={option} value={option}>{option}</button>
//                 </>
//             ))}
//       </>
//     )
// }

// export default Options;
