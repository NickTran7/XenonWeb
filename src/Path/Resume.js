const Resume = () => {
  return (
    <div>
      {" "}
      <ul clasName="skill-list">
        Skills
        <li>React</li>
        <li>HTML, CSS</li>
        <li>AWS</li>
      </ul>
      <ul clasName="skill-list"></ul>
      <ul className="exp-list">
        Experiences: KEVZO, LLC 2021 - Present
        <li>
          Built a dynamic website with React framework together NodeJS back-end
          on AWS platform together with API Gateway, Lambda, DynamoDB and S3 to
          create server-less web state that reduce web hosting service cost up
          to 90%
        </li>
        <li>Maintained NoSQL Database</li>
      </ul>
      <ul className="education">
        Education:
        <li> Assosiate Degree in Pre-Engineering 3.6 GPA</li>
      </ul>
      <ul className="interest">
        Interest:
        <li>
          Having background in STEM classes with fundamental knowledge of
          calculus and chemistry.
        </li>
        <li>
          Used to work on small projects, such as wielding lithium battery,
          building electric scooter, editing videos, nutrition, and fitness.
        </li>{" "}
        <li></li>
      </ul>
    </div>
  );
};

export default Resume;
