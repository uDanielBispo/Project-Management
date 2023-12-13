import ProjectForm from '../project/projectform';
import styles from '../pages/newproject.module.css';

function NewProject (){

    return(
        <div className={styles.newproject_container}>
            <h1>Create project</h1>
            <p>Create your project to add your services</p>
            <ProjectForm />
        </div>
    ); 
}

export default NewProject;