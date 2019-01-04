import React from "react";
import { Icon } from "react-native-elements";
import { StyleSheet, View } from "react-native";

export class BottomCard extends React.Component {
  render() {
    const { album, infoButton } = this.props;
    return (
      <View style={styles.albumMenu}>
        <Icon
          onPress={() => {}}
          raised
          name="play"
          type="font-awesome"
          color="#f50"
          size={30}
        />
        <Icon
          onPress={() => {
            infoButton(album);
          }}
          raised
          name="info"
          type="font-awesome"
          color="#f50"
          size={30}
        />
        <Icon
          onPress={() => {}}
          raised
          name="heart"
          type="font-awesome"
          color="#f50"
          size={30}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  albumMenu: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
});