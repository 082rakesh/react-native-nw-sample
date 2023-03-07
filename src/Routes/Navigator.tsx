/* eslint-disable react/react-in-jsx-scope */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailsScreen from '../screens/DetailsScreen';
import HomeScreen from '../screens/HomeScreen';

const MainStack = createNativeStackNavigator();

function MainStackScreen() {
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen name="Home" component={HomeScreen} />
        <MainStack.Screen name="Details" component={DetailsScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

export default MainStackScreen;
