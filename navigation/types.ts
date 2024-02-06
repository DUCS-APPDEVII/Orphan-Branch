/* File: types.ts            Date: 2/1/2024
   This file exports a collection of types that are
   specific to the MyWeather Application.
 */
import type { NativeStackScreenProps } from '@react-navigation/native-stack'

// Navigation types
export type RootStackNavParamsList = {
    Login: undefined,
    AuthWeatherApp: { name: string } | undefined,
  }

export type StackProps = NativeStackScreenProps<RootStackNavParamsList, 'Login'>