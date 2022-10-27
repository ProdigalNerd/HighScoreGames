import { Text } from "react-native";
import { Card } from "@aws-amplify/ui-react";
import cardStyles from "../../common/styles/Card";

const HighScoresWidget = () => {
  return (
    <Card variation="elevated" style={cardStyles.container}>
      <Text>High Scores Widget</Text>
    </Card>
  );
};

export default HighScoresWidget;