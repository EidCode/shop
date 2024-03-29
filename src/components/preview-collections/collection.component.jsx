import React from "react";
import "./preview-collection.styles.scss";
import CollectionIitem from "../collection-item/collection-item.component";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map(item => {
            return <CollectionIitem key={item.id} item={item} />;
          })}
      </div>
    </div>
  );
};

export default CollectionPreview;
