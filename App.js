import {Text, View} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';

/* navigation */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

/****** icons ******/
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import ProductDetailsScreen from './src/screens/ProductDetailsScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Home() {
  return (
    <View>
      <Text>Hello from Home</Text>
    </View>
  );
}

function MyHomeStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="PRODUCT_DETAILS">
      <Stack.Screen name="HOME" component={HomeScreen} />
      <Stack.Screen name="PRODUCT_DETAILS" component={ProductDetailsScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
        }}>
        <Tab.Screen
          name="HOME_STACK"
          component={MyHomeStack}
          options={{
            tabBarIcon: ({size, color}) => {
              return <Entypo name={'home'} size={size} color={color} />;
            },
          }}
        />
        <Tab.Screen
          name="REORDER"
          component={Home}
          options={{
            tabBarIcon: ({size, color}) => {
              return (
                <MaterialIcons name={'reorder'} size={size} color={color} />
              );
            },
          }}
        />
        <Tab.Screen
          name="CART"
          component={Home}
          options={{
            tabBarIcon: ({size, color}) => {
              return (
                <MaterialCommunityIcons
                  name={'cart'}
                  size={size}
                  color={color}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="ACCOUNT"
          component={Home}
          options={{
            tabBarIcon: ({size, color}) => {
              return <FontAwesome6 name={'user'} size={size} color={color} />;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
