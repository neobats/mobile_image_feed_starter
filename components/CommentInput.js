import PropTypes from "prop-types";
import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

const CommentInput = ({ onSubmit, placeholder }) => {
  const [input, setInput] = useState("");

  const handleChange = (val) => setInput(val);
  const handleSubmit = () => {
    if (!input) {
      return;
    }
    onSubmit(input);
    setInput("");
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={input}
        onChangeText={handleChange}
        onSubmitEditing={handleSubmit}
        underlineColorAndroid="transparent"
      />
    </View>
  );
};

CommentInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "rgba(0,0,0,0.1)",
    paddingHorizontal: 20,
    height: 60,
  },
  input: { flex: 1 },
});

export default CommentInput;
