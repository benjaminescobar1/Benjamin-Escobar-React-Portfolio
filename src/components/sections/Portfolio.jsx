import React from 'react';

function Portfolio() {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>

      {/* Project 1 */}
      <article className="project-item">
        <figure>
          <img src="assets/images/Pokemon Master Library.jpg" alt="Project 1 - Pokemon Master Library" />
          <figcaption>Project 1 - Pokemon Master Library</figcaption>
        </figure>
        <div className="project-links">
          <a href="https://lorenzo-olivar.github.io/Pokemon-Master-Library/" target="_blank">Demo</a>
          <a href="https://github.com/Lorenzo-Olivar/Pokemon-Master-Library" target="_blank">GitHub</a>
        </div>
      </article>

      {/* Project 2 */}
      <article className="project-item">
        <figure>
          <img src="assets/images/quiz time.jpg" alt="Project 2 - Quiz Time!" />
          <figcaption>Project 2 - Quiz Time!</figcaption>
        </figure>
        <div className="project-links">
          <a href="https://benjaminescobar1.github.io/quiz-time/" target="_blank">Demo</a>
          <a href="https://github.com/benjaminescobar1/quiz-time" target="_blank">GitHub</a>
        </div>
      </article>

      {/* Project 3 */}
      <article className="project-item">
        <figure>
          <img src="assets/images/web application.jpg" alt="Project 3 - Horiseon-Webpage" />
          <figcaption>Project 3 - Horiseon-Webpage</figcaption>
        </figure>
        <div className="project-links">
          <a href="https://benjaminescobar1.github.io/horiseon-webpage/" target="_blank">Demo</a>
          <a href="https://github.com/benjaminescobar1/horiseon-webpage" target="_blank">GitHub</a>
        </div>
      </article>

      {/* Project 4 */}
      <article className="project-item">
        <figure>
          <img src="assets/images/text editor.jpg" alt="Project 4 - Text Editor" />
          <figcaption>Project 4 - Text Editor</figcaption>
        </figure>
        <div className="project-links">
          <a href="https://text-editor1234-8780e76e5155.herokuapp.com/" target="_blank">Demo</a>
          <a href="https://github.com/benjaminescobar1/text-editor" target="_blank">GitHub</a>
        </div>
      </article>
    </section>
  );
}

export default Portfolio;