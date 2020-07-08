import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, SafeAreaView, FlatList } from "react-native";
import { getFriends } from "../utils/api";
import EachFriend from "./EachFriend";
import Loading from "./Loading";

/* Loops through all the friends returned by the API and pass the
 data for each friend as a prop to  EachFriend component to render */
const FriendsList = () => {
  // Save the data fetched from the API
  const [data, setData] = useState(null);

  // Make an API call to fetch the required data
  useEffect(() => {
    getFriends().then(data => setData(data));
  }, []);

  if (data === null) {
    return <Loading />;
  }
  return (
    <View style={styles.listContainer}>
      <Text style={styles.pageTitle}>My friends</Text>
      <SafeAreaView>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <EachFriend
              id={item.id}
              email={item.email}
              name={`${item.first_name} ${item.last_name}`}
              avatar={item.avatar}
            />
          )}
          keyExtractor={item => item.id.toString()}
        />
      </SafeAreaView>
    </View>
  );
};
const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    marginBottom: 80
  },
  pageTitle: {
    fontSize: 30,
    marginRight: 30,
    marginLeft: 30,
    marginTop: 10,
    marginBottom: 10
  }
});
export default FriendsList;
