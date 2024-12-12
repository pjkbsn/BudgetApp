import { createDrawerNavigator } from "@react-navigation/drawer";
import TransactionsScreen from "../screens/TransactionsScreen";
import DailyTabNavigator from "./DailyTabNavigator";
import WeeklyTabNavigator from "./WeeklyTabNavigator";
import MonthlyTabNavigator from "./MonthlyTabNavigator";
import YearlyTabNavigator from "./YearlyTabNavigator";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <>
      <Drawer.Navigator initialRouteName="Daily">
        <Drawer.Screen name="Daily" component={DailyTabNavigator} />
        <Drawer.Screen name="Weekly" component={WeeklyTabNavigator} />
        <Drawer.Screen name="Monthly" component={MonthlyTabNavigator} />
        <Drawer.Screen name="Yearly" component={YearlyTabNavigator} />
        <Drawer.Screen name="Transactions" component={TransactionsScreen} />
      </Drawer.Navigator>
    </>
  );
}
