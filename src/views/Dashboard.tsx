import { Button, Flex } from "@aws-amplify/ui-react";
import { View, StyleSheet } from "react-native";
import { Gi3DMeeple } from "react-icons/gi";
import HighScoresWidget from "../components/Widgets/HighScores";
import RecentGamesWidget from "../components/Widgets/RecentGames";
import { FC } from "react";

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    marginTop: '2rem',
    width: '80%',
    maxWidth: '500px',
  },
  icon: {
    marginRight: '1rem',
  },
  startButton: {
    alignItems: 'center',
    display: 'flex',
    fontSize: '1.25rem',
  },
  widgets: {
    marginTop: '1rem',
  }
});

const Dashboard: FC = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        variation="primary"
        onClick={() => navigation.navigate('SelectGame')}
      >
        <Gi3DMeeple style={styles.icon} /> Start New Game
      </Button>
      <Flex
        direction="column"
        style={styles.widgets}
      >
        <HighScoresWidget />
        <RecentGamesWidget />
      </Flex>
    </View>
  );
};

export default Dashboard;