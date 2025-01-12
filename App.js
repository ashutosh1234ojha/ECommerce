import { NavigationContainer } from "@react-navigation/native"
import { Text, View } from "react-native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./screens/HomeScreen";
import ProductDetailsScreen from "./screens/ProductDetailsScreen";


const App = () => {
  const Stack = createNativeStackNavigator()

  return <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
      name="PRODUCT_DETAILS"
      component={ProductDetailsScreen}
    />
    </Stack.Navigator>
  </NavigationContainer>
}
export default App