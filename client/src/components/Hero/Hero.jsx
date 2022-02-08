import React from "react";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero__left">
          <h1>Welcome to the Quizzie Master.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            magnam fugit consequuntur illo quibusdam iusto sit quidem qui enim
            magni incidunt reprehenderit, error commodi dolore. Odit dolore
            placeat iste aliquid.
          </p>
          <form action="">
            <input type="text" placeholder="What you are looking for ?" />
            <button type="submit">Search</button>
          </form>
        </div>
      </div>
    </section>
  );
}
