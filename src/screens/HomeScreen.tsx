import React from 'react';
import {FlatList, Pressable, StyleSheet, Text} from 'react-native';

const Item = ({launch, onPress}) => {
  const {name} = launch;
  return (
    <Pressable style={styles.item} onPress={onPress}>
      <Text style={styles.header}>{name}</Text>
    </Pressable>
  );
};

const HomeScreen = () => {
  const DATA = [
    {
      id: 1,
      name: 'Rakesh Mishra',
    },
    {
      id: 2,
      name: 'Manoj Mishra',
    },
    {
      id: 3,
      name: 'Amit Pandey',
    },
  ];

  const onPressAction = () => {
    console.log('action pressed');
  };

  return (
    <FlatList
      data={DATA}
      renderItem={({item}) => <Item launch={item} onPress={onPressAction} />}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 20,
    paddingRight: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  header: {
    fontWeight: 'bold',
  },
  subheader: {
    paddingTop: 10,
  },
});

export default HomeScreen;
