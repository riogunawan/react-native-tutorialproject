import React, { Component } from 'react';
import {
  View, ScrollView,
  Text, TextInput, Alert, Button,
  StyleSheet, Keyboard,
  TouchableHighlight, TouchableNativeFeedback, TouchableOpacity,
  TouchableWithoutFeedback, Image, ImageBackground,
  Dimensions
} from 'react-native';

export default class inputan extends Component {
  constructor(props) {
    super(props);
    this.state = {
        typedText: 'Masukkan Text nya di input',
        typedPassword: '',
        typedDescription: '',
    }
  }

  componentWillMount () {
      this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', ()=>{
          this.setState(() => {
              return {typedText: 'Keyboard digunakan'}
          })
      });
      this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', ()=>{
          this.setState(() => {
              return {typedText: 'Keyboard tidak digunakan'}
          })
      });
  }

  componentWillUnmount () {
      this.keyboardDidShowListener.remove();
      this.keyboardDidHideListener.remove();
  }

  _onPressButton = () => {
      Alert.alert('Tekan ni!')
  }

  render() {
      let screenWidth = Dimensions.get('window').width;
      let screenHeight = Dimensions.get('window').height;
    return (
      <ScrollView
          keyboardDismissMode='on-drag'
          // contentContainerStyle={{paddingVertical:20}}
          horizontal={true}
          pagingEnabled={true}
       >
           <ScrollView>
              <View style={ {
                    flex: 1,
                    width: screenWidth
                } }>
                  <View style={{flex: 30}}>
                      <TextInput style={ {
                          marginLeft: 20,
                          marginRight: 20,
                            } }
                            keyboardType='email-address'
                            placeholder='masukan alamat email anda..'
                            placeholderTextColor='red'
                            onChangeText={
                                (text) => {
                                    this.setState(
                                        (previousState) => {
                                            return {
                                                typedText: text
                                            };
                                        }
                                    )
                                }
                            }
                      />
                      <Text style={ {color: 'black'} }>{ this.state.typedText }</Text>
                      <TextInput style={ {
                          marginLeft: 20,
                          marginRight: 20,
                            } }
                            keyboardType='default'
                            placeholder='masukan password anda..'
                            secureTextEntry= {true}
                            // returnKeyLabel='custom' //custom tombol enter
                            returnKeyType='done' //default tombol enter
                            onChangeText={
                                (text) => {
                                    this.setState(
                                        (previousState) => {
                                            return {
                                                typedPassword: text
                                            };
                                        }
                                    )
                                }
                            }
                      />
                      <TextInput
                            style={ {
                                  margin: 20,
                                  padding: 10,
                                  height: 100,
                                  borderColor: 'gray',
                                  borderWidth: 1,
                                } }
                            // placeholder='masukan deskripsi anda..'
                            multiline={ true }
                            borderBottomColor='green'
                            borderBottomWidth={3}
                            borderLeftColor='green'
                            borderLeftWidth={3}
                            borderRightColor='green'
                            borderRightWidth={3}
                            editable={ true }
                            // autoFocus={ true }
                            returnKeyType='done'
                            onSubmitEditing={ Keyboard.dismiss }
                            onChangeText={
                                (text) => {
                                    this.setState(
                                        (previousState) => {
                                            return {
                                                typedDescription: text
                                            };
                                        }
                                    )
                                }
                            }
                      />
                  </View>
                  <View style={ {
                      flex: 70,
                      justifyContent: 'center',
                      alignItems: 'center'
                  } }>
                    <Button
                        onPress={ this._onPressButton }
                        title="This is Button"
                        color="#1aad5b"
                        accessibilityLabel="YourLabelHere"
                    />
                    <TouchableHighlight
                        style={ {
                            backgroundColor: 'blue', margin: 20, borderRadius: 5
                        }}
                        onPress={ this._onPressButton }
                        underlayColor='red'
                        // onShowUnderlay={ ()=>{
                        //     alert('show underlay!!')
                        // }}
                    >
                        {/* <ImageBackground
                            style={{width: 100, height: 40}}
                            source={require('../images/small-button-hi.png')}
                            >
                                <Text style={ {
                                    color: 'white', padding: 10, fontSize: 14
                                } }>
                                    TouchableHighlight
                                </Text>
                        </ImageBackground> */}
                        {/* <Image
                            style={ {width: 100, height: 40} }
                            source={require('../images/small-button-hi.png')}
                        /> */}
                          <Text style={ {
                              color: 'white', padding: 10, fontSize: 14
                          } }>
                              TouchableHighlight
                          </Text>
                    </TouchableHighlight>

                    <TouchableNativeFeedback
                        style={ {
                            margin: 20, borderRadius: 5
                        }}
                        onPress={ this._onPressButton }
                        // useForeground={true}
                    >
                        <Text style={ {
                            color: 'black', padding: 10, fontSize: 14
                        } }>
                            TouchableNativeFeedback
                        </Text>
                    </TouchableNativeFeedback>

                    <TouchableOpacity
                        style={ {
                            margin: 20, borderRadius: 5, backgroundColor: 'yellow'
                        }}
                        onPress={ this._onPressButton }
                        // activeOpacity={0.7}
                    >
                        <Text style={ {
                            color: 'black', padding: 10, fontSize: 14
                        } }>
                            TouchableOpacity
                        </Text>
                    </TouchableOpacity>

                    <TouchableWithoutFeedback
                        style={ {
                            margin: 20, borderRadius: 5
                        }}
                        // onPress={ this._onPressButton }
                        onLongPress={ ()=>{
                            alert('onLongPress')
                        }}
                        onPressIn={ ()=>{
                            alert('onPressIn')
                        }}
                        onPressOut={ ()=>{
                            alert('onPressOut')
                        }}
                        disabled={false}

                    >
                        <View>
                            <Text style={ {
                                padding: 10, fontSize: 14, color: 'white', backgroundColor: 'purple'
                            } }>
                                TouchableWithoutFeedback
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>

                  </View>
              </View>
              <View style={{flex: 1, width: screenWidth}}>
                  <Image
                      source={require('../images/keyboard.jpg')}
                      style={ {
                          width: screenWidth,
                          height: screenWidth * 1800/4000,
                          marginTop: 20
                      }}
                  />
                  <Text
                      style={ {
                          fontSize: 20,
                          padding: 15,
                          color: 'white',
                          textAlign: 'center',
                          backgroundColor: 'green'
                      }}>
                      This is text
                  </Text>
                  <Image
                      source={require('../images/keyboard.jpg')}
                      style={ {
                          width: screenWidth,
                          height: screenWidth * 0.46
                      }}
                  />

              </View>
          </ScrollView>
          <View
              style={{
                  flex: 1,
                  backgroundColor: 'tomato',
                  width: screenWidth,
                  justifyContent: 'center',
                  alignItems: 'center'
              }}
          >
              <Text style={{color: '#fff', fontSize: 20}}>
                  Layar ke 2
              </Text>
          </View>
      </ScrollView>
    );
  }
}
