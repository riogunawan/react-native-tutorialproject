import React, { Component } from 'react';
import {
    View,
    Text, FlatList,
    StyleSheet,
    Image, Alert, Dimensions,
    Platform, TouchableHighlight, TextInput
} from 'react-native';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import flatListData from '../data/flatListData';

var screen = Dimensions.get('window');

export default class AddModal extends Component {
    constructor(props) {
      super(props);
      this.state = {
          newFoodName: '',
          newFoodDescription: '',
      }
    }

    showAddModal = () => {
        this.refs.myModal.open();
    }

    generateKey = (numberOfCharacters) => {
        return require('random-string')({length: numberOfCharacters});
    }

  render() {
    return (
      <Modal
          ref={"myModal"}
          style={{
              justifyContent: 'center',
              borderRadius: Platform.OS === 'ios' ? 30 : 10,
              shadowRadius: 10,
              width: screen.width - 80,
              height: 280
          }}
          position='center'
          backdrop={true}
          onClosed={ () => {
              // alert("Modal tertutup! ");
              this.setState({
                  newFoodName: '',
                  newFoodDescription: '',
              })
          }}
          >
              <Text
                  style={{
                      fontSize: 16,
                      fontWeight: 'bold',
                      textAlign: 'center',
                      marginBottom: 20,
                  }}
                  >
                  Tambah Food Baru
              </Text>
              <TextInput
                  style={{
                      marginLeft: 30,
                      marginRight: 30,
                      marginBottom: 10,
                  }}
                  onChangeText={ (text) => this.setState({ newFoodName: text})}
                  placeholder="Masukkan nama food.."
                  value={this.state.newFoodName}
               />
               <TextInput
                   style={{
                       marginLeft: 30,
                       marginRight: 30,
                       marginBottom: 10,
                   }}
                   onChangeText={ (text) => this.setState({ newFoodDescription: text})}
                   placeholder="Masukkan Deskripsi food.."
                   value={this.state.newFoodDescription}
                />
                <Button
                  style={{
                      fontSize: 18, color: 'white'
                  }}
                  containerStyle={{
                      padding: 8,
                      marginLeft: 70,
                      marginRight: 70,
                      marginTop: 10,
                      height: 40,
                      borderRadius: 6,
                      backgroundColor: 'mediumseagreen'
                  }}
                  onPress={ () => {
                      if (this.state.newFoodName.length == 0) {
                          alert('Nama Food harus diisi!!');
                          return;
                      }
                      if (this.state.newFoodDescription.length == 0) {
                        alert('Deskripsi Food harus diisi!!');
                        return;
                      }
                      const newKey = this.generateKey(6);
                      const newFood = {
                          key: newKey,
                          name: this.state.newFoodName,
                          image: "https://media-cdn.tripadvisor.com/media/photo-s/0a/92/de/85/new-food.jpg",
                          foodDescription: this.state.newFoodDescription
                      };
                      flatListData.push(newFood);
                      this.props.parentFlatList.refreshFlatList(newKey);
                      this.refs.myModal.close();
                      Alert.alert(
                          `Berhasil menambahkan data!!
                          ` + newFood['name'],
                      );
                  }}
                >
                    save
                </Button>
      </Modal>
    );
  }
}
