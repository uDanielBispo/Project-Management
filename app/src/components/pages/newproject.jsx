import ProjectForm from '../project/projectform';
import styles from '../pages/newproject.module.css';
import { useNavigate } from 'react-router-dom';

function NewProject (){

    const navigate = useNavigate();

    function createPost(project) {
        // Initialize costs and services
        project.cost = 0;
        project.services = [];

        fetch("http://localhost:3004/projects", {
            method: "POST",
            headers:{
                "Content-type": "application/json",
            },
            body: JSON.stringify(project),
        })
        .then((resp) => {
            resp.json();
            // console.log(resp);
        })
        .then((data) => {
            // console.log(data);
            //redirect
            navigate('/projects', { state: { message: 'Project sucessful created!'} } )
        })
        .catch(err => {console.log(err);})
    }

    return(
        <div className={styles.newproject_container}>
            <h1>Create project</h1>
            <p>Create your project to add your services</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar Projeto" />

        </div>
    ); 
}

export default NewProject;