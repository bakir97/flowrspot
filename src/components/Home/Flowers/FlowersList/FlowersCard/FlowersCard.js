import React from "react";
import Content from "./Content";
import Star from "./Star";
import styles from "./FlowersCard.module.scss";
const FlowersCard = ({
  flower: { name, profile_picture, latin_name, sightings, id, favorite },
  user,
  addFavFlower
}) => {
  return (
    <div className={styles.card}>
      {user && (
        <Star
          addFavFlower={addFavFlower}
          user={user}
          id={id}
          favorite={favorite}
        />
      )}
      <Content
        name={name}
        latin_name={latin_name}
        sightings={sightings}
        favorite={favorite}
      />
      <img src={profile_picture} alt={name} className={styles.image} />
    </div>
  );
};

export default FlowersCard;
