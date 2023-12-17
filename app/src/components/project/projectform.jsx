import { useEffect, useState } from 'react';
import Input from '../form/input';
import Select from '../form/select';
import SubmitButton from '../form/submitbutton';
import styles from './projectform.module.css';

function ProjectForm({handleSubmit, btnText, projectData }) {

    const [categories, setCategories] = useState([]);
    const [project, setProject] = useState(projectData || {});

    useEffect(() =>{
        fetch('http://localhost:3004/categories', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then((resp) => resp.json())
        .then((data) => {
            setCategories(data)
        })
        .catch((err) => console.log(err));
    }, [])

    const submit = (e) => {
        e.preventDefault();
        handleSubmit(project);
    }

    function handleChange(e) {
        setProject({ ...project, [e.target.name]: e.target.value});
        // console.log(project);
    }   
    
    function handleCategory(e) {
             setProject({ ...project, category: {
                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].text,
            },
        });
    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input
                type="text"
                text="Project name"
                name="name"
                placeholder="Insert the project name"
                handleOnChange={handleChange}
                value={project.name ? project.name : ''}
            />
            <Input
                type="number"
                text="Project budget"
                name="budget"
                placeholder="Insert the project budget"
                handleOnChange={handleChange}
                value={project.budget ? project.budget : ''}
            />
            <Select 
                name="category" 
                text="Select category" 
                options={categories}
                handleOnChange={handleCategory}
                value={project.category ? project.category.id : ''}/>
            <SubmitButton btnText={btnText} />
        </form>
    );
};

export default ProjectForm;