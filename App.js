import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default class App extends Component{
 
  constructor (props) {
    super(props)

  }
  componentDidMount() {
    const data = require('./db.json');
  }

  render() {  
  const data = require('./db.json');
  console.log(data.posts)
  

  return (
    <ScrollView>
        <View>
          {data.posts
            .slice(0, data.posts.id)
            .map(({ name, cargo, data, telefone, id }, index) => (
              <View styles={{ flex: 1 }} key={index.toString()}>
                {console.log(name)}
                <Text>{id}</Text>
                 <Text>{name}</Text>
                 <Text>{telefone}</Text>
                 <Text>{data}</Text>
                 <Text>{cargo}</Text>
              </View>
            ))}
        </View>
      </ScrollView>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
});
