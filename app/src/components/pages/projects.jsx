import { Link, useLocation } from "react-router-dom";
import Message from "../layout/message";
import styles from './project.module.css';
import Container from '../layout/container';
import LinkButton from '../layout/linkbutton'

function Projects (){

    const location = useLocation();
    let message = '';

    if(location.state){
        message = location.state.message;
        // console.log(message);
        // console.log(location);
    }

    return(
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1 >My Projects</h1>
                <LinkButton 
                    to="#" 
                    text="New Project"
                />
            </div>
            {
                message && <Message type="success" msg = {message} />
            }
            <Container customClass="start">
                <p>Projects...</p>
            </Container>
        </div>    
    );
}

export default Projects;