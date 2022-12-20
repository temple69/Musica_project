import React from "react";
import styles from "./header.module.css";
import logo from "../../assets/images/logo.svg";
import radio from "../../assets/home_icons/radio.png";
import playlist from "../../assets/home_icons/playlist.png";
import profile from "../../assets/home_icons/profile.png";
import logout from "../../assets/home_icons/Logout.png";
import videos from "../../assets/home_icons/videos.png";
import home from "../../assets/home_icons/Home.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <img src={logo} alt="music_logo" />
        <input type="search" value="" placeholder="Search artists" />
      </nav>
      <nav className={styles.nav2}>
        <ul>
          <li>
            <NavLink
              style={({ isActive }) => ({
                background: isActive ? " #FACD66" : "",
              })}
              to="home"
            >
              <img src={home} alt="home" />
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => ({
                background: isActive ? "#FACD66" : "",
              
              })}
              to="playlist"
            >
              <img src={playlist} alt="playlist" />
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => ({
                background: isActive ? "#FACD66" : "",
              })}
              to="radio"
            >
              <img src={radio} alt="radio-icon" />
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => ({
                background: isActive ? "#FACD66" : "",
              })}
              to="videos"
            >
              <img src={videos} alt="videos-icon" />
            </NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <NavLink style={({ isActive }) => ({
              
                background: isActive ? "#FACD66" : "",
              })} to="profile">
              <img src={profile} alt="profile_icon" />
            </NavLink>
          </li>
          <li>
            <NavLink style={({ isActive }) => ({
                background: isActive ? "#FACD66" : "",
              })} to="logout">
              <img src={logout} alt="logout-icon" />
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
