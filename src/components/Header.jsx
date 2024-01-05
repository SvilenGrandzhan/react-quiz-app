import img from "../assets/quiz-logo.png";

export default function Header() {
  return (
    <header className="header">
      <img
        src={img}
        alt="Quiz Logo"
      />
      <h1>ReactQuiz</h1>
    </header>
  );
}
