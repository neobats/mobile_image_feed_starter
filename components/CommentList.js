import PropTypes from "prop-types";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const CommentList = ({ items }) => {
  return (
    <ScrollView>
      {items.map((item, index) => (
        <View key={`${index}${item}`} style={styles.comment}>
          <Text>{item}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

CommentList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const styles = StyleSheet.create({
  comment: {
    marginLeft: 20,
    paddingVertical: 20,
    paddingRight: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "rgba(0,0,0,0.5)",
  },
});

export default CommentList;
