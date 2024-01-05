import { useState } from "react";

export default function Quiz() {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  return (
    <div id="quiz">
      <p id="question-overview">Currently active question</p>
      <h2 id="question">h2 h2 h2</h2>
      <progress id="question" />
    </div>
  );
}
