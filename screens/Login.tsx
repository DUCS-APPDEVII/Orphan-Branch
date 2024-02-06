/* File: Login.tsx           Date: 1/25/2024

   Defines the login screen for the MyWeather app.

   Modification Log
   02/01/2024 Adapted the code to use types from a project
              types file located at ../navigation/types.ts
              S. Sigman
 */
import { View, Text, StyleSheet, Button, SafeAreaView } from 'react-native';
//import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackNavParamsList } from '../navigation/types';
import { StackProps } from '../navigation/types'

/* type RootStackNavParamsList = {
  Login: undefined,
  AuthWeatherApp: undefined,
} 
type StackProps = NativeStackScreenProps<RootStackNavParamsList, 'Login'>
*/

function Login( { route, navigation }: StackProps ) {
  return (
    <View style={styles.container}>
        <Text style={styles.textStyle}>Login Screen</Text>
        <Button title="Sign In" onPress={() => navigation.navigate("AuthWeatherApp")} />
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textStyle: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 16,
    }
  });

export default Login