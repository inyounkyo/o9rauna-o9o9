import React from "react";
import { Children } from "react";
import styles from "../styles/Home.module.css";
import { useNavigate } from "react-router-dom";

const HomeSection = ({ children }) => {
  return <section className={styles.home}>{children}</section>;
};

function BtnBox({ children }) {
  return <div className={styles["btn-box"]}>{children}</div>;
}

const Home = () => {
  const navigate = useNavigate();
  const goTo = (url) => {
    navigate(`/${url}`);
  };

  return (
    <HomeSection>
      <div className={styles["home-content"]}>
        <h1>Hi, O9RAUNA</h1>
        <h3>Frontend Devloper</h3>
        <p>
          Personal Portfolio Website using HTML and CSS, Personal Portfolio
          Website HTML CSS, Personal Portfolio HTML CSS, Personal Website HTML
          CSS, Personal Website using HTML and CSS Only
        </p>
        <BtnBox>
          <a href="#" onClick={() => goTo("o9o9_list")}>
            List
          </a>
          <a href="#" onClick={() => goTo("o9o9_contact")}>
            Content
          </a>
        </BtnBox>
      </div>
    </HomeSection>
  );
};

export default Home;
