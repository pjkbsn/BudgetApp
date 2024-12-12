import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MonthlyScreen from "../screens/Monthly/MonthlyScreen";
import MonthlyDetails from "../screens/Monthly/MonthlyDetails";
import { MaterialIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function MonthlyTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Summary"
        component={MonthlyScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="insert-chart" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Details"
        component={MonthlyDetails}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="details" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
