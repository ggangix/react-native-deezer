import React from "react";
import { Card, Button } from "react-native-elements";
import { BottomCard } from "./BottomCard";

export class CardList extends React.Component {
  renderData() {
    const {
      data,
      imageKey,
      titleKey,
      infoButton,
      artist,
      favFunction
    } = this.props;
    return data.map((item, index) => {
      return (
        <Card
          key={index}
          title={item[titleKey]}
          image={{ uri: item[imageKey] }}
        >
          <BottomCard
            artist={artist}
            album={item}
            infoButton={infoButton}
            favFunction={favFunction}
          />
        </Card>
      );
    });
  }

  render() {
    const { data } = this.props;
    if (data && data.length > 0) {
      return this.renderData();
    }
  }
}
