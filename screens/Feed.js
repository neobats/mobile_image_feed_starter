import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { ViewPropTypes } from "react-native";
import CardList from "../components/CardList";
import { fetchImages } from "../utils/api";

const Feed = (props = { style: null }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const fetchedItems = await fetchImages();

        setLoading(false);
        setItems(fetchedItems);
      } catch (e) {
        setLoading(false);
        setError(true);
        console.error(e);
      }
    })();
  }, []);

  return <CardList {...props} items={items} />;
};

Feed.propTypes = {
  style: ViewPropTypes.style,
  commentsForItem: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string))
    .isRequired,
  onPressComments: PropTypes.func.isRequired,
};

export default Feed;
