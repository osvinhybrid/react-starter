import React from 'react';
import { View, Text, TextInput, TouchableOpacity,StyleSheet, Button} from 'react-native';
import { StackNavigator } from 'react-navigation';
import  nav from './src/login'
import HomeScreen from './src/home';



export default class App extends React.Component {
  constructor(props){
    super(props);
  }
  static navigationOptions = {
     title: "Welcome"
   }
  onButtonPress(){
    this.props.navigatio.navigate("HomeScreen")
    console.log(HomeScreen)
  }

  render() {
const { navigate } = this.props.navigation;
    return (
      <View style = {styles.container}>
        <TouchableOpacity>
          <Button title="Login" onPress={() => this.onButtonPress()}/>
        </TouchableOpacity>
      </View>
);
}}
// define your styles
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
