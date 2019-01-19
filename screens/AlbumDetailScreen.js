import React from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  ActivityIndicator,
  Linking
} from "react-native";
import { Icon, Avatar, Divider, List, ListItem } from "react-native-elements";
import * as actions from "../actions/";

export default class AlbumDetailScreen extends React.Component {
  static navigationOptions = {
    title: "Album Detail Screen"
  };

  constructor() {
    super();
    this.state = {
      isFetching: true,
      tracks: []
    };
  }
  componentDidMount() {
    const album = this.props.navigation.getParam("album", []);
    actions.getAlbumTracks(album.id).then(tracks => {
      this.setState({
        tracks,
        album,
        isFetching: false
      });
    });
  }

  async saveTrackToFavorites(album, track) {
    const favoritesAlbum =
      (await actions.retrieveData("favoritesAlbums")) || {};

    let albumData = favoritesAlbum[album.id];

    if (!albumData) {
      albumData = album;
    }

    if (!albumData["tracks"]) {
      albumData["tracks"] = {};
    }

    albumData["tracks"][track.id] = track;

    favoritesAlbum[album.id] = albumData;
    const success = await actions.storeData("favoritesAlbums", favoritesAlbum);

    if (success) {
      console.log("OK!");
    }
  }

  renderTracks() {
    const { tracks, album } = this.state;
    if (tracks && tracks.length > 0) {
      return tracks.map((track, index) => {
        return (
          <ListItem
            key={index}
            title={track.title}
            leftIcon={{ name: "play-arrow" }}
            leftIconOnPress={() => Linking.openURL(track.preview)}
            rightIcon={
              <Icon
                raised
                name="star"
                type="font-awesome"
                color="#f50"
                onPress={() => this.saveTrackToFavorites(album, track)}
              />
            }
          />
        );
      });
    }
  }

  render() {
    const { isFetching, tracks } = this.state;
    const { navigation } = this.props;
    const album = navigation.getParam("album", []);
    const artist = navigation.getParam("artist", "");
    if (album.id) {
      return (
        <ScrollView>
          {!isFetching && (
            <View style={styles.container}>
              <View style={styles.header}>
                <View style={styles.avatar}>
                  <Avatar xlarge rounded source={{ uri: album.cover_medium }} />
                </View>
                <View style={styles.headerRight}>
                  <Text style={styles.mainText} h4>
                    {album.title}
                  </Text>
                  <Text h4 style={styles.subText}>
                    {artist}
                  </Text>
                  <Icon
                    raised
                    name="play"
                    type="font-awesome"
                    color="#f50"
                    onPress={() => {}}
                  />
                </View>
              </View>
              <Divider style={{ backgroundColor: "black" }} />
              <List containerStyle={{ marginTop: 0 }}>
                {this.renderTracks()}
              </List>
            </View>
          )}
          {isFetching && <ActivityIndicator size="large" />}
        </ScrollView>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 20
  },
  avatar: {
    flex: 1,
    marginRight: 20
  },
  headerRight: {
    flex: 1,
    flexWrap: "wrap",
    justifyContent: "flex-end",
    flexDirection: "column"
  },
  mainText: {
    fontWeight: "bold",
    color: "#3a3a3a",
    fontSize: 17
  },
  subText: {
    color: "#3a3a3a",
    fontSize: 17
  }
});
