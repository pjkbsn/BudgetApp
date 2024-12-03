import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen";
import DailyTabNavigator from "./DailyTabNavigator";
import WeeklyTabNavigator from "./WeeklyTabNavigator";
import MonthlyTabNavigator from "./MonthlyTabNavigator";
import YearlyTabNavigator from "./YearlyTabNavigator";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Daily" component={DailyTabNavigator} />
      <Drawer.Screen name="Weekly" component={WeeklyTabNavigator} />
      <Drawer.Screen name="Monthly" component={MonthlyTabNavigator} />
      <Drawer.Screen name="Yearly" component={YearlyTabNavigator} />
    </Drawer.Navigator>
  );
}
