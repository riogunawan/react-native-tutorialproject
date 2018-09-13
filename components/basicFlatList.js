/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text, FlatList,
  StyleSheet,
  Image, Alert,
  Platform, TouchableHighlight
} from 'react-native';
import flatListData from '../data/flatListData';
import Swipeout from 'react-native-swipeout';

import AddModal from './AddModal';
import EditModal from './EditModal';


class FlatListItem extends Component {
    constructor(props) {
      super(props);
      this.state = {
          activeRowKey: null,
          numberOfRefresh: 0,
      };
    }
    //REFRESH SETELAH DI EDIT
    refreshFlatListItem = () => {
        this.setState((prevState) => {
            return {
                numberOfRefresh: prevState.numberOfRefresh + 1
            };
        });
    }
    render() {
        const swipeSettings = {
            autoClose: true,
            onClose: (secId, rowId, direction) => {
                if (this.state.activeRowKey != null) {
                    this.setState({ activeRowKey: null });
                }
            },
            onOpen: (secId, rowId, direction) => {
                this.setState({ activeRowKey: this.props.item.key });
            },
            right: [
                {
                    onPress: () => {
                        // alert("update");
                        this.props.parentFlatList.refs.editModal.showEditModal(flatListData[this.props.index], this);
                    },
                    text: 'Edit', type: 'primary'
                },
                {
                    onPress: () => {
                        const deletingRow = this.state.activeRowKey;
                        Alert.alert(
                            'Peringatan',
                            'Apakah kamu yakin ingin menghapus?',
                            [
                                {text: 'Tidak', onPress: () => console.log('Tekan Tidak'), style: 'cancel'},
                                {text: 'Ya', onPress: () => {
                                    flatListData.splice(this.props.index, 1);
                                    // REFRESH FlatList
                                    this.props.parentFlatList.refreshFlatList(deletingRow);
                                }},
                            ],
                            { cancelable: true }
                        );
                    },
                    text: 'Hapus', type: 'delete'
                }
            ],
            rowId: this.props.index,
            sectionId: 1
        }
        return (
            <Swipeout {...swipeSettings}>
                <View style={ [
                    styles.container,
                    {backgroundColor: this.props.index % 2 == 0 ? 'mediumseagreen':'tomato',
                    flexDirection: 'row'}
                ] }>
                <Image
                    source={ {uri: this.props.item.image} }
                    style={ {width: 100, height: 100, margin: 5} }
                />
                <View
                    style={ [styles.container, {height: 100}] }
                    >
                        <Text style={ styles.FlatListItem }>{ this.props.item.name }</Text>
                        <Text style={ styles.FlatListItem }>{ this.props.item.foodDescription }</Text>
                    </View>
                </View>

            </Swipeout>
        );
    }
}

export default class basicFlatList extends Component {
    constructor(props) {
      super(props);
      this.state = ({
          deletedRowKey: null,
      });
      this._onPressAdd = this._onPressAdd.bind(this);
    }
    // REFRESH SETELAH DI TAMBAH
    refreshFlatList = (activeKey) => {
        this.setState( (prevState) => {
            return {
                deletedRowKey: activeKey
            };
        } );
        this.refs.flatList.scrollToEnd();
    }

    _onPressAdd () {
        // alert('Menambahkan Item');
        this.refs.addModal.showAddModal();
    }
  render() {
    return (
      <View style={ [styles.container, {marginTop: Platform.OS === 'ios' ? 34 : 0} ]}>
          <View
              style={{
                  backgroundColor: '#fff',
                  height: 64,
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  alignItems: 'center'
              }}>
              <TouchableHighlight
                  style={{marginRight: 10}}
                  underlayColor='#eee'
                  onPress={ this._onPressAdd }
                  >
                  <Image
                      style={{width: 35, height: 35}}
                      source={require('../images/icons/add.png')}/>
              </TouchableHighlight>

          </View>
          <FlatList
              ref={"flatList"}
              data={flatListData}
              renderItem={ ({item, index}) => {
                  // console.log(`Item = ${JSON.stringify(item)}, index = ${index}`);
                  return (
                      <FlatListItem item={item} index={index} parentFlatList={this}>

                      </FlatListItem>
                  );
              }}
              >

          </FlatList>
          <AddModal ref={'addModal'} parentFlatList={this}>

          </AddModal>
          <EditModal ref={'editModal'} parentFlatList={this}>

          </EditModal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  FlatListItem: {
      color: '#fff',
      padding: 10,
      fontSize: 16,
  }
});
