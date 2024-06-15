export default async function Home() {
  return (
    <main>
      <section className="home section" id="home">
        <div className="container">
          <div className="intro">
            <img
              src="/imgs/Dp.jpeg"
              alt="Al Siam Profile"
              className="shadow-dark"
            />
            <h1>Sujith Sam Joseph</h1>
            <p>Full Stack Engineer</p>
            <div className="social-links">
              <a href="https://github.com/SujithSam" target="_blank">
                <i className="fa fa-github" />
              </a>

              <a
                href="https://www.linkedin.com/in/sujith-joseph-85130a1bb/"
                target="_blank"
              >
                <i className="fa fa-linkedin" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
