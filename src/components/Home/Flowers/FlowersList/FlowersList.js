import React from "react";
import FlowersCard from "./FlowersCard";
import styles from "./FlowersList.module.scss";
const FlowersList = ({ flowers, user, addFavFlower }) => {
  const flowersRender = () =>
    flowers.map(flower => (
      <FlowersCard
        key={flower.id}
        flower={flower}
        user={user}
        addFavFlower={addFavFlower}
      />
    ));
  return <div className={styles.container}>{flowersRender()}</div>;
};

export default FlowersList;
