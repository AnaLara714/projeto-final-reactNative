import { ContextProvider } from "./context/context";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Search from "./components/search";
import ItemDetail from "./components/itemDetail";
import ItemList from "./components/itemList";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <ContextProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Search">
          <Stack.Screen
            name="Search"
            component={Search}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ItemList"
            component={ItemList}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ItemDetail"
            component={ItemDetail}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ContextProvider>
  );
}
