import React from 'react';
import instagramlogo from '../../imgs/instagram logo.png';
import searchicon from '../../imgs/search icon.png';
import homeicon from '../../imgs/home icon.png';
import feedicon from '../../imgs/feed icon.png';
import hearticon from '../../imgs/heart icon.png';
import messageicon from '../../imgs/message icon.png';
import photosicon from '../../imgs/photos icon.png';
import styles from '../Navbar/navbar.module.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <div className={styles.body}>
                <section class={styles.header}>
                    <Link to='/Homepage'>
                        <img class={styles.logo} src={instagramlogo} alt={instagramlogo}></img>
                    </Link>
                    <img class={styles.searchicon} src={searchicon} alt={searchicon}></img>
                    <input class={styles.search} placeholder='Search'></input>
                    <img class={styles.icons} src={homeicon} alt={homeicon}></img>
                    <img class={styles.icons} src={feedicon} alt={feedicon}></img>
                    <img class={styles.icons} src={photosicon} alt={photosicon}></img>
                    <img class={styles.icons} src={messageicon} alt={messageicon}></img>
                    <img class={styles.icons} src={hearticon} alt={hearticon}></img>
                </section>
            </div>
        </>
    );
}
export default Navbar;