import React from "react";
import { ScrollView, StyleSheet, View, Linking } from "react-native";
import {
  Card,
  Button,
  List,
  Text,
  ListItem,
  Icon
} from "react-native-elements";
import _ from "lodash";
import * as actions from "../actions";

export default class FavoritesScreen extends React.Component {
  static navigationOptions = {
    title: "Favorites"
  };

  constructor() {
    super();
    this.state = {
      favoritesAlbums: []
    };
    this.getFavoritesAlbums();
  }

  async getFavoritesAlbums() {
    const favoritesAlbums = await actions.retrieveData("favoritesAlbums");
    if (favoritesAlbums) {
      this.setState({
        favoritesAlbums
      });
    }
  }

  async deleteAlbum(albumId) {
    const { favoritesAlbums } = this.state;
    delete favoritesAlbums[albumId];
    const success = await actions.storeData("favoritesAlbums", favoritesAlbums);
    if (success) {
      this.setState({
        favoritesAlbums
      });
    }
  }

  renderFavoritesTracks(tracks) {
    if (tracks) {
      return _.map(tracks, (track, id) => {
        return (
          <View key={id}>
            <ListItem
              title={track.title}
              leftIcon={{ name: "play-arrow" }}
              rightIcon={
                <Icon
                  raised
                  name="music"
                  type="font-awesome"
                  color="#f50"
                  onPress={() => Linking.openURL(track.preview)}
                />
              }
            />
          </View>
        );
      });
    }
  }

  renderFavoriteAlbums() {
    const { favoritesAlbums } = this.state;

    if (favoritesAlbums) {
      return _.map(favoritesAlbums, (album, id) => {
        return (
          <View key={id}>
            <Card title={album.title}>
              <Button
                title="Delete Album"
                raised
                backgroundColor="#f50"
                name="trash"
                onPress={() => {
                  this.deleteAlbum(album.id);
                }}
              />
              {this.renderFavoritesTracks(album.tracks)}
            </Card>
          </View>
        );
      });
    }
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <List containerStyle={styles.listContainer}>
          {this.renderFavoriteAlbums()}
        </List>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  },
  listContainer: {
    backgroundColor: "#eaeaea"
  }
});
