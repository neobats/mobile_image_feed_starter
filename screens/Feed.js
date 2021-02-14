import React, { useEffect, useState } from "react";
import { ViewPropTypes } from "react-native";
import CardList from "../components/CardList";
import { fetchImages } from "../utils/api";

const Feed = ({ style } = { style: null }) => {
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

  return <CardList items={items} />;
};

Feed.propTypes = ViewPropTypes.style;

export default Feed;
