import React, { Component } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import tp from './tp.json';

class DemoApp extends Component {
  render() {
    return (
      <View>

        <FlatList
          data={tp}
          showsVerticalScrollIndicator={true}
          renderItem={({ item }) =>

            <View style={styles.container}>

              <View style={styles.titleDescription}>

                <Text style={styles.description}>{item.desc}</Text>

                <Text style={styles.title}>{item.title}</Text>

              </View>

              <Image

                style={styles.image}
                source={{ uri: item.img }} />

            </View>
          }
          keyExtractor={(item, index) => index.toString()}
        />

      </View>

    );
  }
}

export default DemoApp;

const styles = StyleSheet.create({

  container: {

    padding: 15,
    alignItems: "center",
    display: "flex",
    flexDirection: "row-reverse",

  },

  titleDescription: {

    flex: 1,
    flexDirection: 'column-reverse',
    flex: 1,
    marginLeft: 10,

  },

  title:
  {
    fontWeight: "bold",
  },

  description: {

    fontSize: 10,

  },

  image: {

    flex: 1,
    width: 50,
    height: 200,
    borderWidth: 5,
    borderColor:"orange",
    
  }
});