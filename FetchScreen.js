import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  Alert,
  StatusBar,
  StyleSheet,
  TouchableHighlight,
} from "react-native";

export default FetchScreen = ({ navigation, route }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState("");
  const { pageBeforeName } = route.params;

  const getMovies = async () => {
    try {
      const response = await fetch("https://reactnative.dev/movies.json");
      const data = await response.json();
      setData(data.movies);
    } catch (error) {
      Alert.alert(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text>This page is open from {JSON.stringify(pageBeforeName)}</Text>
      <TouchableHighlight
        style={styles.button}
        onPress={() => {
          navigation.navigate("Flexbox", { defaultButtonState: true });
        }}
      >
        <Text style={styles.buttonLabel}>Back to FlexboxScreen</Text>
      </TouchableHighlight>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          style={{ marginTop: StatusBar.currentHeight }}
          data={data}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => (
            <Text>
              {item.title}, {item.releaseYear}
            </Text>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    minWidth: "48%",
    backgroundColor: "oldlace",
    borderRadius: 5,
    marginHorizontal: "1%",
    marginBottom: 5,
    paddingVertical: 10,
  },
  buttonLabel: {
    color: "coral",
    textAlign: "center",
  },
});
