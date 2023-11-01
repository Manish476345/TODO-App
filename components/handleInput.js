import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import Header from './header';

const Activity = () => {
    const [text, setText] = useState([
      {text: 'Hi I am Manish', id:'1'},
      {text: 'This is going to be my first app', id:'2'},
      {text: 'I am really excited to work upon this', id: '3'}
    ]);


    return (
      <View style={style.container}>
        <Header/>
         <View style={style.content}>
          <View style={style.list}>
            <FlatList 
              data = {text}
              renderItem={({item}) => 
              <Text>{item.text}</Text>
            }
            /> 
          </View>
         </View>
      </View>
    );
  }

  const style = StyleSheet.create({
    container:{
        paddingTop:40,
        flex:1,
        textAlign: 'center',
        backgroundColor: '#fff',
    },
    content:{
         color: 'red',
         padding: 40,
    },
    list:{
         marginTop:20,
    }
  });
  export default Activity;