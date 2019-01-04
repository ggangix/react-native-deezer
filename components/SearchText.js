import React from "react";
import { StyleSheet } from "react-native";
import {
  FormLabel,
  FormInput,
  Button,
  FormValidationMessage
} from "react-native-elements";

export class SearchText extends React.Component {
  constructor() {
    super();
    this.state = {
      searchValue: ""
    };
  }

  componentDidMount() {
    this.input.focus();
  }

  onChange(searchValue) {
    this.setState({ searchValue });
  }

  onSubmitSearch() {
    const { submitSearch } = this.props;
    const { searchValue } = this.state;
    submitSearch(searchValue);
  }

  render() {
    return (
      <React.Fragment>
        <FormLabel containerStyle={styles.center}>
          Search an Artist / Band
        </FormLabel>
        <FormInput
          ref={input => (this.input = input)}
          onChangeText={event => {
            this.onChange(event);
          }}
        />
        <Button title="Search" onPress={() => this.onSubmitSearch()} />
        <FormValidationMessage />
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  center: {
    alignItems: "center"
  }
});
