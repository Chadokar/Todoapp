import React from 'react';
import Page from './components/page';
import {View, StyleSheet, Text, Dimensions, Button, TouchableOpacity} from 'react-native';

const deviceHeight = Dimensions.get("window").height


const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header} >
        <Text style={{fontSize:20, fontWeight:'700'}} >Food List</Text>
      </View>
      <Page/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',
    justifyContent: 'flex-start',
    
  },
  header:{
    alignItems:'center',
    paddingTop:40,
    backgroundColor:'white',
    elevation:5,
    width:'100%',
    height: deviceHeight*0.11,
  },



});

export default App;
