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

export default class EditModal extends Component {
    constructor(props) {
      super(props);
      this.state = {
          foodName: '',
          foodDescription: '',
      }
    }

    showEditModal = (editingFood, flatListItem) => {
        // console.log(`editingFood = ${JSON.stringify(editingFood)}`);
        this.setState({
            key: editingFood.key,
            foodName: editingFood.name,
            foodDescription: editingFood.foodDescription,
            flatListItem: flatListItem,
        })
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
              this.state = {
                  foodName: '',
                  foodDescription: '',
              }
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
                  onChangeText={ (text) => this.setState({ foodName: text})}
                  placeholder="Masukkan nama food.."
                  value={this.state.foodName}
               />
               <TextInput
                   style={{
                       marginLeft: 30,
                       marginRight: 30,
                       marginBottom: 10,
                   }}
                   onChangeText={ (text) => this.setState({ foodDescription: text})}
                   placeholder="Masukkan Deskripsi food.."
                   value={this.state.foodDescription}
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
                      if (this.state.foodName.length == 0) {
                        alert('Nama Food harus diisi!!');
                        return;
                      }
                      if (this.state.foodDescription.length == 0) {
                        alert('Deskripsi Food harus diisi!!');
                        return;
                      }
                      //UPDATE EXISTING DATA
                      var foundIndex = flatListData.findIndex(item => this.state.key == item.key);
                      if (foundIndex < 0) {
                          return; //NOT FOUND
                      }
                      flatListData[foundIndex].name = this.state.foodName;
                      flatListData[foundIndex].foodDescription = this.state.foodDescription;

                      // REFRESH FlatList ITEM
                      this.state.flatListItem.refreshFlatListItem();
                      this.refs.myModal.close();
                      Alert.alert(
                          `Berhasil mengedit data!! ` + this.state.foodName,
                      );
                  }}
                >
                    save
                </Button>
      </Modal>
    );
  }
}
