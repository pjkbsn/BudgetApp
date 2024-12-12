import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WeeklyScreen from "../screens/Weekly/WeeklyScreen";
import WeeklyDetails from "../screens/Weekly/WeeklyDetails";
import { MaterialIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function WeeklyTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Summary"
        component={WeeklyScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="insert-chart" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Details"
        component={WeeklyDetails}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="details" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
