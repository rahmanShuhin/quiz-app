import React from "react";

export default function Feature() {
  return (
    <section className="feature">
      <div className="hero-container">
        <div className="feature__top__4box">
          {boxContents.map((content) => (
            <div>
              <h2>{content.title}</h2>
              <p>{content.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const boxContents = [
  {
    title: "Quiz Certification",
    text: "Get certified and official recognition from the Quiz Master.",
  },
  {
    title: "Dynamic Quiz",
    text: "Quizzes generated from a pool of questions. The question bank of over 400k questions.",
  },
  {
    title: "Proctored Quiz",
    text: "Get certified and official recognition from the Quiz Master",
  },
  {
    title: "Practice Quiz",
    text: "Get certified and official recognition from the Quiz Master.",
  },
];
