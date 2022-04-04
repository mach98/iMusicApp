import React from 'react';
import {
  StyleSheet,
  Text,
  StatusBar,
  View,
} from 'react-native';

import MusicPlayer from './component/MusicPlayer';

const App= () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle='light-content'/>
      <MusicPlayer/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
