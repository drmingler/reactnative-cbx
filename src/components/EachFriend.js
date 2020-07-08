import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { gray, lightGrey } from "../utils/colors";

// Render each of friends object returned by the API
const EachFriend = ({ name, email, id, avatar }) => {
  return (
    <TouchableOpacity key={id} >
      <View style={styles.listItem}>
        <Image
          style={styles.listImg}
          source={{
            uri: avatar
          }}
        />
        <View style={styles.listText}>
          <Text style={styles.textBold}>{name}</Text>
          <Text>{email}</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.textBold}>ID: </Text>
            <Text>{id}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: gray,
    borderRadius: 10,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 15,
    marginBottom: 15,
    width: "80%",
    alignSelf: "center",
    backgroundColor: lightGrey
  },
  listImg: {
    width: 60,
    height: 60
  },
  listText: {
    paddingLeft: 10
  },
  textBold: {
    fontWeight: "bold"
  }
});
export default EachFriend;
