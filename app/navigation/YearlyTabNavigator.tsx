import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import YearlyScreen from "../screens/Yearly/YearlyScreen";
import YearlyDetails from "../screens/Yearly/YearlyDetails";

const Tab = createBottomTabNavigator();

export default function YearlyTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Summary" component={YearlyScreen} />
      <Tab.Screen name="Details" component={YearlyDetails} />
    </Tab.Navigator>
  );
}
