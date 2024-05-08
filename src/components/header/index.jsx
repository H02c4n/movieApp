import React from 'react'
import { Link } from "react-router-dom";
import useFirebaseCall from "../../hooks/useFirebaseCall";
import { useSelector } from "react-redux";
import {FaPlayCircle} from 'react-icons/fa';


import styles from "./styles.module.css";


const Header = () => {
    
  const { currentUser } = useSelector((state) => state.auth);
  const {logOut} = useFirebaseCall();

  return (
    <header className={`${styles.header} container fluid`}>
      <div className={styles.headerWrapper}>
        <Link className={styles.logo} to="/home">
          <FaPlayCircle /> {currentUser}
        </Link>
        <nav className={styles.navigationMenu}>
        {currentUser ? (<Link onClick={() => logOut()} className="nav-link fw-bold" to="/">Logout </Link>) : (<Link className="nav-link fw-bold" to="/">Login</Link>)}
        </nav>
      </div>
    </header>
  )
}

export default Header