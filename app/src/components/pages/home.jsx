import styles from '../pages/home.module.css';
import savings from '../../img/savings.svg'
import LinkButton from '../layout/linkbutton';

function Home (){

    return(
            <section className={styles.home_container}>
            <h1>Welcome to <span>Costs</span></h1>
            <p>Start to manage your projects righ now!</p>
            <LinkButton to="/newproject" text="Create Project"/>
            <img src={savings} alt="Costs" />
        </section>
    );
}

export default Home;