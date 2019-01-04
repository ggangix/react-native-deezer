import React from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  ActivityIndicator
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
        isFetching: false
      });
    });
  }

  renderTracks() {
    const { tracks } = this.state;
    if (tracks && tracks.length > 0) {
      return tracks.map((track, index) => {
        return (
          <ListItem
            key={index}
            title={track.title}
            leftIcon={{ name: "play-arrow" }}
            onPress={() => {}}
            rightIcon={
              <Icon
                raised
                name="star"
                type="font-awesome"
                color="#f50"
                onPress={() => {}}
              />
            }
          />
        );
      });
    }
  }

  render() {
    const { isFetching } = this.state;
    const { navigation } = this.props;
    const album = navigation.getParam("album", []);
    const artist = navigation.getParam("artist", "");
    if (album.id) {
      return (
        <ScrollView style={styles.container}>
          {!isFetching && (
            <View>
              <Avatar xlarge rounded source={{ uri: album.cover_medium }} />

              <View>
                <Text h4>{album.title}</Text>
                <Text h4>{artist}</Text>
                <Icon
                  raised
                  name="play"
                  type="font-awesome"
                  color="#f50"
                  onPress={() => {}}
                />
              </View>
              <Divider style={{ backgroundColor: "black" }} />
              <List>{this.renderTracks()}</List>
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
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});
