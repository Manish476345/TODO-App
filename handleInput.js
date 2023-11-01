import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const Activity = () => {
    const [text, setText] = useState('');
    return (
      <View style={style.container}>
        <TextInput
          style={style.containerText}
          placeholder="Type activity!"
          onChangeText={newText => setText(newText)}
          defaultValue={text}
        />
        <Text style={style.Output}>
          {text
            .split(' ')
            .map(word => word)
            .join(' ')}
        </Text>
      </View>
    );
  }

  const style = StyleSheet.create({
    container:{
        padding: 10,
    },
    containerText:{
        height: 40,
    },
    Output:{
        padding:10,
        fontSize:34,
    }
  });
  export default Activity;