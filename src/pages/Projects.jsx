import Project from '../components/project/project';
import { projects } from '../helpers/projectList';

const Projects = () => {
    return ( <main className="section">
    <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className="projects">
            {/* <Project /> */}
            {projects.map((el, i) => {
                return <Project key={el.id} index={i} title={el.title} img={el.img}/>
            })}
        </ul>
    </div>
</main> );
}
 
export default Projects;