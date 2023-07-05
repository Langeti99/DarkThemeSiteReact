import { useParams } from "react-router-dom";
import BtnGitHub from "../components/btnGitHub/BtnGitHub";

import { projects } from "../helpers/projectList";

const ProjectBig = () => {
  const { id } = useParams();
  const project = projects[id];

  let imgBig;
  let skills;
  let title;
  let gitHubLink;
  if (project) {
    gitHubLink = project.gitHubLink;
    title = project.title;
    imgBig = project.imgBig;
    skills = project.skills;
  }

  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{title}</h1>
          <img src={imgBig} alt="" className="project-details__cover" />

          <div className="project-details__desc">
            <p>{skills}</p>
          </div>

          {gitHubLink && <BtnGitHub link={gitHubLink} />}
        </div>
      </div>
    </main>
  );
};

export default ProjectBig;
