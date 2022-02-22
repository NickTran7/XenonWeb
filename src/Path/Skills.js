const Skills = () => {
  return (
    <div id="skills">
      <h3>Things I can do</h3>
      <ul className="grid">
        <li>
          <img
            src={`${process.env.PUBLIC_URL}/assets/comet_1.svg`}
            alt="comet"
          />
          <h4>Javascript</h4>
        </li>
        <li>
          <img
            src={`${process.env.PUBLIC_URL}/assets/comet_2.svg`}
            alt="comet"
          />
          <h4>HTML/CSS</h4>
        </li>

        <li>
          <img
            src={`${process.env.PUBLIC_URL}/assets/comet_3.svg`}
            alt="comet"
          />
          <h4>React</h4>
        </li>

        <li>
          <img
            src={`${process.env.PUBLIC_URL}/assets/comet_4.svg`}
            alt="comet"
          />
          <h4>AWS</h4>
        </li>
      </ul>
    </div>
  );
};

export default Skills;
