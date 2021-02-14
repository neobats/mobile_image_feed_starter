import PropTypes from "prop-types";
import React, { useState } from "react";
import { ActivityIndicator, Image, StyleSheet, View } from "react-native";
import getAvatarColor from "../utils/getAvatarColor";
import getInitials from "../utils/getInitials";
import AuthorRow from "./AuthorRow";
import Avatar from "./Avatar";

const Card = (
  { authorName, image, linkText, onPressLinkText } = {
    linkText: "",
    onPressLinkText: () => {},
  }
) => {
  const [loading, setLoading] = useState(true);
  const handleLoad = () => setLoading(false);
  return (
    <View>
      <AuthorRow
        authorName={authorName}
        linkText={linkText}
        onPressLinkText={onPressLinkText}
      >
        <Avatar
          initials={getInitials(authorName)}
          size={35}
          backgroundColor={getAvatarColor(authorName)}
        />
      </AuthorRow>
      <View style={styles.image}>
        {loading && (
          <ActivityIndicator style={StyleSheet.absoluteFill} size="large" />
        )}
        <Image
          style={StyleSheet.absoluteFill}
          source={image}
          onLoad={handleLoad}
        />
      </View>
    </View>
  );
};

Card.propTypes = {
  authorName: PropTypes.string.isRequired,
  image: Image.propTypes.source.isRequired,
  linkText: PropTypes.string,
  onPressLinkText: PropTypes.func,
};

const styles = StyleSheet.create({
  image: {
    aspectRatio: 1,
    backgroundColor: "rgba(0,0,0,0.02)",
  },
});

export default Card;
