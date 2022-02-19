import React from "react";
import CollectionCard from "./CollectionCard";
import "./Punklist.css";

const Punklist = ({ punkListData, setSelectedPunk }) => {
  return (
    <div className="punkList">
      {punkListData.map((punk) => (
        <div onClick={() => setSelectedPunk(5-punk.token_id)}>
          <CollectionCard
            key={5 - punk.token_id}
            id={5 - punk.token_id}
            name={punk.name}
            traits={punk.traits}
            image={punk.image_preview_url}
          />
        </div>
      ))}
    </div>
  );
};

export default Punklist;
