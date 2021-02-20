import PropTypes from "prop-types";
import React from "react";
import { FlatList } from "react-native";
import { getImageFromId } from "../utils/api";
import Card from "./Card";

const CardList = ({ items, commentsForItem, onPressComments }) => {
  const keyExtractor = ({ id }) => id.toString();
  const renderItem = ({ item: { id, author } }) => {
    const comments = commentsForItem[id];
    const onPressLinkText = () => onPressComments(id);
    return (
      <Card
        authorName={author}
        image={{
          uri: getImageFromId(id),
        }}
        linkText={`${comments ? comments.length : 0} Comments`}
        onPressLinkText={onPressLinkText}
      />
    );
  };

  return (
    <FlatList
      data={items}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      extraData={commentsForItem}
    />
  );
};

CardList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      author: PropTypes.string.isRequired,
    })
  ).isRequired,
  commentsForItem: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string))
    .isRequired,
  onPressComments: PropTypes.func.isRequired,
};

export default CardList;
