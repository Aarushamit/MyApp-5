import React, { Component } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
  TouchableHighlight,
  Alert,
  Image,
} from "react-native";
import db from "../config";
import firebase from "firebase";
import { RFValue } from "react-native-responsive-fontsize";
import { SearchBar, ListItem, Input } from "react-native-elements";

import MyHeader from "../components/MyHeader";
import { BookSearch } from "react-native-google-books";

export default class AddRecommendations extends Component {
  constructor() {
    super();
    this.state = {
      userId: firebase.auth().currentUser.email,
      laptopName: "",
      processor: '',
      ram: "",
      storage: "",
      graphicsCard: "",
      userType: "",
      docId: "",
    };
  }

  createUniqueId() {
    return Math.random().toString(36).substring(7);
  }

  addRecommendation = async () => {
    db.collection("recommendations").add({
      user_id: this.state.userId,
      laptop_name: this.state.laptopName,
      processor: this.state.processor,
      ram: this.state.ram,
      storage: this.state.storage,
      graphics_card: this.state.graphicsCard,
      user_type: this.state.userType
    })
    console.log("recommendation added")
    return Alert.alert("recommendation added successfully!")
  };
  /*componentDidMount() {
    this.getBookRequest();
    this.getIsBookRequestActive();
  }
*/

  render() {

    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 0.1 }}>
          <MyHeader title="Add Recommendation" navigation={this.props.navigation} />
        </View>
        <KeyboardAvoidingView>
          <ScrollView>
            <View style={{ flex: 0.9 }}>
              <Input
                style={styles.formTextInput}
                label={"Laptop Name"}
                placeholder={"Laptop Name "}
                containerStyle={{ marginTop: RFValue(60) }}
                onChangeText={(text) => {
                  this.setState({
                    laptopName: text
                  })
                }}
                value={this.state.laptopName}
              />
              <View style={{ alignItems: "center" }}>
                <Input
                  style={styles.formTextInput}
                  containerStyle={{ marginTop: RFValue(30) }}
                  label={"RAM"}
                  placeholder={"RAM in Laptop "}
                  onChangeText={(text) => {
                    this.setState({
                      ram: text,
                    });
                  }}
                  value={this.state.ram}
                />
                <Input
                  style={styles.formTextInput}
                  containerStyle={{ marginTop: RFValue(30) }}
                  label={"processor"}
                  placeholder={"Which processor is included in the laptop? "}
                  onChangeText={(text) => {
                    this.setState({
                      processor: text,
                    });
                  }}
                  value={this.state.processor}
                />
                <Input
                  style={styles.formTextInput}
                  containerStyle={{ marginTop: RFValue(30) }}
                  label={"Storage"}
                  placeholder={"Storage in Laptop "}
                  onChangeText={(text) => {
                    this.setState({
                      storage: text,
                    });
                  }}
                  value={this.state.storage}
                />
                <Input
                  style={styles.formTextInput}
                  containerStyle={{ marginTop: RFValue(30) }}
                  label={"Graphics Card"}
                  placeholder={"Is there a graphics card in this Laptop? What is the VRAM capacity? "}
                  onChangeText={(text) => {
                    this.setState({
                      graphicsCard: text,
                    });
                  }}
                  value={this.state.graphicsCard}
                />

                <Input
                  style={styles.formTextInput}
                  containerStyle={{ marginTop: RFValue(30) }}
                  label={"User Type"}
                  placeholder={"What type of user is it for? programmer, photo/video editing, general/school/college use, office use? "}
                  multiline
                  numberOfLines={10}
                  onChangeText={(text) => {
                    this.setState({
                      userType: text,
                    });
                  }}
                  value={this.state.userType}
                />

                <TouchableOpacity
                  style={[styles.button, { marginTop: RFValue(30) }]}
                  onPress={() => {
                    this.addRecommendation(
                      this.state.laptopName,
                      this.state.ram,
                      this.state.storage,
                      this.state.processor,
                      this.state.userType,
                      this.state.graphicsCard
                    );
                  }}
                >
                  <Text
                    style={styles.requestbuttontxt}
                  >
                    Add
                </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>

    );
  }
}


const styles = StyleSheet.create({
  keyBoardStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  formTextInput: {
    width: "75%",
    height: RFValue(35),
    borderWidth: 1,
    padding: 10,
  },
  ImageView: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20
  },
  imageStyle: {
    height: RFValue(150),
    width: RFValue(150),
    alignSelf: "center",
    borderWidth: 5,
    borderRadius: RFValue(10),
  },
  bookstatus: {
    flex: 0.4,
    alignItems: "center",

  },
  requestedbookName: {
    fontSize: RFValue(30),
    fontWeight: "500",
    padding: RFValue(10),
    fontWeight: "bold",
    alignItems: 'center',
    marginLeft: RFValue(60)
  },
  status: {
    fontSize: RFValue(20),
    marginTop: RFValue(30),
  },
  bookStatus: {
    fontSize: RFValue(30),
    fontWeight: "bold",
    marginTop: RFValue(10),
  },
  buttonView: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center",
  },
  buttontxt: {
    fontSize: RFValue(18),
    fontWeight: "bold",
    color: "#fff",
  },
  touchableopacity: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    width: "90%",
  },
  requestbuttontxt: {
    fontSize: RFValue(20),
    fontWeight: "bold",
    color: "#fff",
  },
  button: {
    width: "75%",
    height: RFValue(60),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: RFValue(50),
    backgroundColor: "#32867d",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },
});
