import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Axios from 'axios';

import styles from './style';

const Component = props => {
  const [result, setResult] = React.useState('');
  const url = 'http://192.168.99.1:8000/';
  const getMsg = () => {
    Axios.get(url)
      .then(result => setResult(result.data?.msg))
      .catch(err => console.log(err));
  };
  return (
    <View>
      <Text>Profile</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => props.navigation.navigate('Home')}>
        <Text style={styles.text}>Go To Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={getMsg}>
        <Text style={styles.text}>Get Message</Text>
      </TouchableOpacity>
      <Text style={styles.text}>{result}</Text>
    </View>
  );
};

export default Component;
