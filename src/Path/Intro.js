import { Link } from "react-router-dom";
const Intro = () => {
  return (
    <div>
      <section id="intro" className="grid">
        <div className="intro-text">
          <h2>
            **GRID** Environment Enthusiast <br />& Front-end Developer
          </h2>
          <p className="text-p">
            I love to fix problem, either as small as laptop battery, electric
            scotter, broken phone screen, web button, font size or as big as
            waste management and climate change
          </p>
          <Link to="/project" className="button">
            View my work
          </Link>
        </div>
        <div className="intro-img">
          <img
            src={`${process.env.PUBLIC_URL}/assets/banner_image.png`}
            alt="space icon"
          />
        </div>
      </section>
    </div>
  );
};
export default Intro;
