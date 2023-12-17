import styles from '../form/submitbutton.module.css'

function SubmitButton({ text }){
    return(
        <div>
            <button className={styles.btn}>Create Project</button>
        </div>
    );
};

export default SubmitButton;