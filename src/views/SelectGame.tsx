import { FC } from "react";
import { Text, View } from "react-native";
import GamesList from "../components/Games/List";

const SelectGame: FC = ({ navigation }) => {
  const selectGame = () => {
    navigation.push('ConfigureGame');
  };

  return (
    <View>
      <GamesList
        onSelectGame={selectGame}
      />
    </View>
  )
};

export default SelectGame;