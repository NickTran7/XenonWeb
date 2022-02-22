const Project = () => {
  return (
    <div id="portfolio">
      <h3> **GRID**Some of my work</h3>
      <div className="projects grid">
        <a href="http://renjord.s3-website.us-east-2.amazonaws.com/">
          <img
            src={`${process.env.PUBLIC_URL}/assets/project_1.png`}
            alt="space icon"
          />
          <h4> Renjord Web</h4>
        </a>
        <a href="#">
          <img
            src={`${process.env.PUBLIC_URL}/assets/project_2.png`}
            alt="space icon"
          />
          <h4> Web 2</h4>
        </a>
        <a href="#">
          <img
            src={`${process.env.PUBLIC_URL}/assets/project_3.png`}
            alt="space icon"
          />
          <h4> Web 3</h4>
        </a>
      </div>
    </div>
  );
};
export default Project;
