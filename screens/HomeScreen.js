import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Button,
  TouchableOpacity,
  View
} from "react-native";
import { WebBrowser } from "expo";

import { MonoText } from "../components/StyledText";
import { List, ListItem, Card, Text, Icon } from "react-native-elements";

const menuList = [
  {
    title: "Search Albums",
    subTitle: "Search your favorite music",
    icon: "music",
    navigateTo: "Albums"
  },
  {
    title: "Favorite Collections",
    subTitle: "Access to your favorites albums",
    icon: "heart",
    navigateTo: "Favorites"
  }
];

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Home"
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <List
          containerStyle={{
            backgroundColor: "#eaeaea",
            marginTop: 0,
            height: 465
          }}
        >
          {menuList.map((item, index) => {
            return (
              <Card key={index} title={item.title}>
                <View style={styles.cardView}>
                  <Text style={{ marginBottom: 10 }}> {item.subTitle} </Text>
                  <Icon
                    raised
                    name={item.icon}
                    type="font-awesome"
                    color="#f50"
                    size={30}
                    onPress={() => {
                      this.props.navigation.navigate(item.navigateTo);
                    }}
                  />
                </View>
              </Card>
            );
          })}
        </List>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  cardView: {
    alignItems: "center"
  }
});
