import { Text } from "react-native";
import { Card } from "@aws-amplify/ui-react";
import cardStyles from "../../common/styles/Card";

const RecentGamesWidget = () => {
  return (
    <Card variation="elevated" style={cardStyles.container}>
      <Text>Recent Games Widget</Text>
    </Card>
  );
};

export default RecentGamesWidget;