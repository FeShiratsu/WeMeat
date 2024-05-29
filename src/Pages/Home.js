import { Link } from 'react-router-dom';
import styles from '../CSS/home.module.css'
import burg from '../Images/burg.jpg'
import burgao from '../Images/burgao.jpg'
import MenuItem from '../Components/MenuItem';
import {  useState } from 'react';


function Home({state}){
    const [filter, setFilter] = useState("");

    function changeFilter(){
        if(filter!="blur"){setFilter("blur")}else{setFilter("")}
    }
    return(
        <main className={styles.home}>
            <div className={`${styles.callout} `} id={filter} style={{filter}}>
                <img className={` ${(filter=="blur")?styles.blur:styles.nothing}`} src={burg} alt=""/>
                <p>Want a fast meal?</p>
                <Link to={'/order'}>
                <button onPointerLeave={changeFilter} onPointerEnter={changeFilter}>Click here!</button>
                </Link>

            </div>


            <p className={styles.title}>Menu presentation</p>
            <content>
                
                <MenuItem img={burgao} itemName={"Viper"} description={"A Burguer with cheese and bacon"}></MenuItem>
                <MenuItem img={burgao} itemName={"Viper"} description={"A Burguer with cheese and bacon"}></MenuItem>
            </content>
        </main>
    );
}
export default Home