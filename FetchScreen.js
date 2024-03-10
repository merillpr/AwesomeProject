import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  Alert,
  StatusBar,
} from "react-native";

export default FetchScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState("");

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
