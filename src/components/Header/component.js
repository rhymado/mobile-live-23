import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './style';

const Component = ({text, navigation, route}) => {
  //   const extraTitle = route.params?.extraTitle || '';
  return (
    <View style={styles.headerContainer}>
      <Icon
        name="arrow-back-outline"
        size={40}
        color="#000"
        onPress={() => navigation.goBack()}
      />
      {/* <Text style={styles.headerText}>{text + ' ' + extraTitle}</Text> */}
      <Text style={styles.headerText}>
        {route.params?.vehicleName || 'Kendaraan'}
      </Text>
    </View>
  );
};

export default Component;
