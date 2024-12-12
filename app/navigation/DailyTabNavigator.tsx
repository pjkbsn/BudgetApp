import DailyScreen from "../screens/Daily/DailyScreen";
import DailyDetails from "../screens/Daily/DailyDetails";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function DailyTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Summary"
        component={DailyScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="insert-chart" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Details"
        component={DailyDetails}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="details" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
