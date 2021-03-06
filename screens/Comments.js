import PropTypes from "prop-types";
import React from "react";
import { SafeAreaView, ViewPropTypes } from "react-native";
import CommentInput from "../components/CommentInput";
import CommentList from "../components/CommentList";
import NavigationBar from "../components/NavigationBar";

const Comments = (
  { style, comments, onClose, onSubmitContent } = { style: null }
) => {
  return (
    <SafeAreaView style={style}>
      <NavigationBar
        title="Comments"
        leftText="Close"
        onPressLeftText={onClose}
      />
      <CommentInput placeholder="Leave a comment" onSubmit={onSubmitContent} />
      <CommentList items={comments} />
    </SafeAreaView>
  );
};

Comments.propTypes = {
  style: ViewPropTypes.style,
  comments: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmitContent: PropTypes.func.isRequired,
};

export default Comments;
