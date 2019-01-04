import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";

export default class AlbumDetailScreen extends React.Component {
  static navigationOptions = {
    title: "Album Detail Screen"
  };

  render() {
    const album = this.props.navigation.getParam("album", []);
    return (
      <ScrollView style={styles.container}>
        {album && <Text>{album.title}</Text>}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});
