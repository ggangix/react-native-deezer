import React from "react";
import { ScrollView, StyleSheet, ActivityIndicator, View } from "react-native";
import { CardList } from "../components/CardList";
import { SearchText } from "../components/SearchText";
import * as actions from "../actions/";

export default class AlbumsScreen extends React.Component {
  static navigationOptions = {
    title: "AlbumsScreen"
  };

  constructor() {
    super();
    this.state = {
      albums: [],
      isFetching: false
    };

    this.goToDetailsView = this.goToDetailsView.bind(this);
  }
  componentDidMount() {}

  searchTracks(artist) {
    this.setState({ isFetching: true, albums: [] });
    actions
      .searchTracks(artist)
      .then(albums => this.setState({ albums, isFetching: false }))
      .catch(err => this.setState({ albums: [], isFetching: false }));
  }

  goToDetailsView(album = []) {
    console.log("GO TO VIEW DETAILS");
    this.props.navigation.navigate("AlbumDetail", { album: album });
  }

  renderAlbumView() {
    const { albums, isFetching } = this.state;
    return (
      <ScrollView style={styles.container}>
        <SearchText
          submitSearch={artist => {
            this.searchTracks(artist);
          }}
        />
        {albums.length > 0 && !isFetching && (
          <CardList
            data={albums}
            imageKey={"cover_big"}
            titleKey={"title"}
            buttonText={"See Details"}
            infoButton={this.goToDetailsView}
          />
        )}
        {albums.length === 0 && isFetching && (
          <ActivityIndicator size="large" />
        )}
      </ScrollView>
    );
  }

  render() {
    return this.renderAlbumView();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});
