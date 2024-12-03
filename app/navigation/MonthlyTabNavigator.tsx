import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MonthlyScreen from "../screens/Monthly/MonthlyScreen";
import MonthlyDetails from "../screens/Monthly/MonthlyDetails";

const Tab = createBottomTabNavigator();

export default function MonthlyTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Summary" component={MonthlyScreen} />
      <Tab.Screen name="Details" component={MonthlyDetails} />
    </Tab.Navigator>
  );
}
