import { PieChart } from "react-native-gifted-charts";
import { Text, View } from "react-native";

type Props = {
  data: any[];
  centerLabel?: string;
};

export const TransactionPieChart = ({ data, centerLabel }: Props) => {
  return (
    <PieChart
      textSize={16}
      donut
      textColor="white"
      radius={140}
      extraRadius={5}
      showTooltip
      strokeWidth={2}
      strokeColor="#333"
      innerCircleBorderWidth={2}
      innerCircleBorderColor="#333"
      data={data}
      centerLabelComponent={() => {
        return (
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 22,
                color: "black",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              {centerLabel}
            </Text>
          </View>
        );
      }}
    />
  );
};
