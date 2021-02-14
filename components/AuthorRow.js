import PropTypes from "prop-types";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const AuthorRow = ({ authorName, children, onPressLinkText, linkText }) => (
  <View style={styles.container}>
    {children}
    <Text style={styles.text} numberOfLines={1}>
      {authorName}
    </Text>
    {!!linkText && (
      <TouchableOpacity onPress={onPressLinkText}>
        <Text numberOfLines={1}>{linkText}</Text>
      </TouchableOpacity>
    )}
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  text: {
    flex: 1,
    marginHorizontal: 6,
  },
});

AuthorRow.propTypes = {
  authorName: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  onPressLinkText: PropTypes.func.isRequired,
};

export default AuthorRow;
