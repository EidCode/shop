import React, { Component } from "react";
import Shop_data from "./shop.data";
import CollectionPreview from "../../components/preview-collections/collection.component";

class Shop extends Component {
  constructor() {
    super();
    this.state = {
      collections: Shop_data
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherProps }) => {
          return <CollectionPreview key={id} {...otherProps} />;
        })}
      </div>
    );
  }
}

export default Shop;
