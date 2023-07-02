import { useParams } from "react-router-dom";
import BtnGitHub from "../components/btnGitHub/BtnGitHub";

import { projects } from "../helpers/projectList";

const ProjectBig = () => {
  const { id } = useParams();
  const project = projects[id];
  
  console.log(id);
  console.log(projects);
  // let imgBig, skills, title, gitHubLink;
  // if (project) {
  //   gitHubLink = project.gitHubLink;
  //   title = project.title;
  //   imgBig = project.imgBig;
  //   skills = project.skills;
  // }

  // if(!project){
  //   return null;
  // }

  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{project.title}</h1>
          <img src={project.imgBig} alt="" className="project-details__cover" />

          <div className="project-details__desc">
            <p>{project.skills}</p>
          </div>

          {/* {gitHubLink && <BtnGitHub link={gitHubLink} />} */}
        </div>
      </div>
    </main>
  );
};

export default ProjectBig;
