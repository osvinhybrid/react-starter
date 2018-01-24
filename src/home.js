import React from 'react';
import {StatusBar, ToolbarAndroid,View, Text, TextInput, TouchableOpacity,StyleSheet} from 'react-native';

export default class HomeScreen extends React.Component {

  render() {

    return (
      <View>
          <Text>Chat with Lucy</Text>
          <TouchableOpacity style={styles.buttonContainer}>
           <Text  style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
        </View>
);
}
}
//define your styles
const styles = StyleSheet.create({
    container: {
     padding: 20,
     marginTop:40
    },
    input:{
        height: 40,
        backgroundColor: 'rgba(225,225,225,0.2)',
        marginBottom: 10,
        padding: 10,
        color: '#000'
    },
    buttonContainer:{
        backgroundColor: '#2980b6',
        paddingVertical: 15
    },
    buttonText:{
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700'
    }
  })
