import DailyScreen from "../screens/Daily/DailyScreen";
import DailyDetails from "../screens/Daily/DailyDetails";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function DailyTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Summary" component={DailyScreen} />
      <Tab.Screen name="Details" component={DailyDetails} />
    </Tab.Navigator>
  );
}
