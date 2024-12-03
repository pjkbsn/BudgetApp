import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WeeklyScreen from "../screens/Weekly/WeeklyScreen";
import WeeklyDetails from "../screens/Weekly/WeeklyDetails";

const Tab = createBottomTabNavigator();

export default function WeeklyTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Summary" component={WeeklyScreen} />
      <Tab.Screen name="Details" component={WeeklyDetails} />
    </Tab.Navigator>
  );
}
