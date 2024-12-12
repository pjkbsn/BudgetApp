import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import YearlyScreen from "../screens/Yearly/YearlyScreen";
import YearlyDetails from "../screens/Yearly/YearlyDetails";
import { MaterialIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function YearlyTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Summary"
        component={YearlyScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="insert-chart" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Details"
        component={YearlyDetails}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="details" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
