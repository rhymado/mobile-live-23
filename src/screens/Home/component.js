import React from 'react';
import {View, Text, TouchableOpacity, ScrollView, FlatList} from 'react-native';
import styles from './style';

const page1 = [
  {
    firstName: 'Akbar',
    lastName: 'Ramadhan',
  },
  {
    firstName: 'Berlian',
    lastName: 'Gymnastiar',
  },
  {
    firstName: 'Sulthan',
    lastName: 'Qintara',
  },
  {
    firstName: 'Candra',
    lastName: 'Dermawan',
  },
];
const page2 = [
  {
    firstName: 'Fakhri',
    lastName: 'Ridho',
  },
  {
    firstName: 'Faela',
    lastName: 'Shufa',
  },
];

const Component = props => {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    setData(prevState => [...prevState, ...page1]);
  }, [setData]);
  return (
    <>
      <Text>Home</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          props.navigation.navigate('Profile', {
            id: 1,
            vehicleName: 'Honda KLX',
          })
        }>
        <Text style={styles.buttonText}>Go To Profile (Honda)</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          props.navigation.push('Profile', {
            id: 2,
            vehicleName: 'Onthel',
          })
        }>
        <Text style={styles.buttonText}>Go To Profile (Onthel)</Text>
      </TouchableOpacity>
      {/* <ScrollView>
        {page1.concat(page2).map((person, index) => {
          return (
            <View style={styles.cardContainer} key={index}>
              <Text style={styles.cardText}>{person.firstName}</Text>
              <Text style={styles.cardText}>{person.lastName}</Text>
            </View>
          );
        })}
      </ScrollView> */}
      <FlatList
        data={data}
        renderItem={({item: person}) => {
          return (
            <View style={styles.cardContainer}>
              <Text style={styles.cardText}>{person.firstName}</Text>
              <Text style={styles.cardText}>{person.lastName}</Text>
            </View>
          );
        }}
        keyExtractor={(_, index) => index}
        onEndReached={() => {
          // pageInfo.currentPage < pageInfo.totalPage
          // pageInfo.nextPage !== null
          setData(prevState => [...prevState, ...page2]);
        }}
        onEndReachedThreshold={0.1}
      />
    </>
  );
};

export default Component;
