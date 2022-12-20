import React from "react";
import AudioComponent from "../components/Audio/AudioComponent";
import Landing from "../components/Landing/Landing";
import Layout from "../components/Layout/Layout";
import Release from "../components/Releases/Release";

const Home = () => {
  return (
    <Layout>
      <Landing />
      <Release />
      <AudioComponent />
    </Layout>
  );
};

export default Home;
