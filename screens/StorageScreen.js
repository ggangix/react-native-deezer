import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import { Button } from "react-native-elements";
import * as actions from "../actions";

export default class StorageScreen extends React.Component {
  static navigationOptions = {
    title: "Storage"
  };

  constructor() {
    super();

    this.state = {
      value: ""
    };
  }

  async storeData() {
    this.setState({
      value: ""
    });

    const data = {
      value: "Testing Data"
    };
    const value = await actions.storeData("testKey", data);
    if (value) {
      console.log(value);
    }
  }

  async retrieveData() {
    const data = await actions.retrieveData("favoritesAlbums");
    console.log(data);
  }

  async removeData() {
    const success = await actions.clearStorage();
    if (success) {
      this.setState({ value: "" });
    }
  }

  render() {
    const { value } = this.state;
    return (
      <ScrollView style={styles.container}>
        <Text>I am a Storage Screen {value}</Text>
        <Button
          title="Store Data"
          onPress={() => {
            this.storeData();
          }}
        />
        <Button
          title="Retrieve Data"
          onPress={() => {
            this.retrieveData();
          }}
        />
        <Button
          title="Remove Data"
          onPress={() => {
            this.removeData();
          }}
        />
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
