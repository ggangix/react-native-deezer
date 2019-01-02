import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { CardList } from "../components/CardList";

export default class AlbumsScreen extends React.Component {
  static navigationOptions = {
    title: "AlbumsScreen"
  };

  constructor() {
    super();
    this.state = {
      albums: [
        {
          title: "Meteora",
          image:
            "https://img.discogs.com/3itmKMl-YLxgHmCpOjz2pvEvorQ=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-12471379-1535952596-6842.jpeg.jpg"
        },
        {
          title: "Meteora",
          image:
            "https://img.discogs.com/3itmKMl-YLxgHmCpOjz2pvEvorQ=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-12471379-1535952596-6842.jpeg.jpg"
        },
        {
          title: "Meteora",
          image:
            "https://img.discogs.com/3itmKMl-YLxgHmCpOjz2pvEvorQ=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-12471379-1535952596-6842.jpeg.jpg"
        },
        {
          title: "Meteora",
          image:
            "https://img.discogs.com/3itmKMl-YLxgHmCpOjz2pvEvorQ=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-12471379-1535952596-6842.jpeg.jpg"
        }
      ]
    };
  }

  render() {
    const { albums } = this.state;
    return (
      <ScrollView style={styles.container}>
        <CardList
          data={albums}
          imageKey={"image"}
          titleKey={"title"}
          buttonText={"See Details"}
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
