import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { CardList } from "../components/CardList";
import * as actions from "../actions/";

export default class AlbumsScreen extends React.Component {
  static navigationOptions = {
    title: "AlbumsScreen"
  };

  constructor() {
    super();
    this.state = {
      albums: []
    };
  }
  componentDidMount() {
    actions.searchTracks("gorilazz").then(albums => {
      this.setState({ albums });
    });
  }

  render() {
    const { albums } = this.state;
    return (
      <ScrollView style={styles.container}>
        {albums.length > 0 && (
          <CardList
            data={albums}
            imageKey={"cover_big"}
            titleKey={"title"}
            buttonText={"See Details"}
          />
        )}
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