import React from 'react';
import photosicon from '../../imgs/photos icon.png';
import styles from './homepage.module.css';
import Navbar from '../Navbar/Navbar';
import { useUserAuth } from "../../contexts/UserAuthContext";

function Homepage() {

    function openForm() {
        document.getElementById("popupForm").style.display = "block";
    }
    const { logOut, user } = useUserAuth();
    console.log("user", user);

    return (
        <>
            <Navbar />
            <hr></hr>
            <div class={styles.floatcontainer} id="homepage">

                <div class={styles.floatchild}>
                    <div class={styles.storiesDiv}>Float Column 1</div>
                    <div class={styles.feedDiv}>Float Column 1</div>
                </div>

                <div class={styles.floatchild}>
                    <div class={styles.profile}>
                        <div>
                            <img class={styles.profileicon} src={photosicon} alt={photosicon}></img>
                        </div>
                        <div>
                            <p id={styles.profileName}> {user && user.email}</p>
                            <p id={styles.userName}>{user && user.name}</p>
                        </div>
                        <div>
                            <button onClick={openForm} className={styles.switchBtn}>Switch</button>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p className={styles.suggestionsText}>Suggestions For You</p>
                            <button className={styles.seeAllBtn}>See All</button>
                        </div>
                        <div class={styles.profile}>
                            <div>
                                <img class={styles.profileicon} src={photosicon} alt={photosicon}></img>
                            </div>
                            <div>
                                <p id={styles.profileName}>Name</p>
                                <p id={styles.userName}>user Name</p>
                            </div>
                            <div>
                                <button className={styles.switchBtn}>Follow</button>
                            </div>

                        </div>

                    </div>

                </div>

            </div>


        </>
    );
}


export default Homepage;