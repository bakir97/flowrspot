import React from "react";
import FlowersCard from "./FlowersCard";
import styles from "./FlowersList.module.scss";
const FlowersList = ({ flowers }) => {
  const flowersRender = () =>
    flowers.map(flower => <FlowersCard flower={flower} />);
  return <div className={styles.container}>{flowersRender()}</div>;
};

export default FlowersList;
