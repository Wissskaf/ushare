// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// // import {NavigationContainer} from '@react-navigation/native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Hello World</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
// App.js
import React from 'react';
import AppNavigator from './navigation/AppNavigator';
import 'react-native-reanimated';
// import { StatusBar } from 'react-native';


export default function App() {
  // <StatusBar hidden={true} />
  return <AppNavigator />;
}