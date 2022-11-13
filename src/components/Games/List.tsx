import { GraphQLResult } from "@aws-amplify/api-graphql";
import { API, graphqlOperation } from "aws-amplify";
import { FC, useEffect, useState } from "react";
import { Pressable, SafeAreaView, ScrollView, Text, View } from "react-native";
import { BoardGame } from "../../models";
import { listBoardGames } from '../../graphql/queries';
import EStyleSheet from "react-native-extended-stylesheet";
import colors from "../../const/colors";

type ListBoardGamesResult = {
  listBoardGames: {
    items: BoardGame[],
  }
}

interface GamesListProps {
  onSlectGame(): void,
}

const styles = EStyleSheet.create({
  boardGame: {
    backgroundColor: 'white',
    borderRadius: 8,
    boxShadow: `3px 3px 10px ${colors.medium}`,
    padding: '1rem 2.25rem',
    margin: '0.75rem',
  },
  boardGameName: {
    fontSize: '1.25rem',
  }
});

const GamesList: FC<GamesListProps> = ({ onSelectGame }) => {
  const [boardGames, setBoardGames] = useState([] as BoardGame[]);

  useEffect(() => {
    (API.graphql(graphqlOperation(listBoardGames)) as Promise<object>)
      .then((result: GraphQLResult<ListBoardGamesResult>) => {
        if(result?.data?.listBoardGames?.items) {
          setBoardGames(result.data.listBoardGames.items);
        }
      })
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        {boardGames?.map((boardGame: BoardGame) => (
          <Pressable
            key={boardGame.id}
            onPress={() => onSelectGame(boardGame.id)}
            style={styles.boardGame}
          >
            <Text style={styles.boardGameName}>{boardGame.name}</Text>
          </Pressable>
        ))}
      </ScrollView>
    </SafeAreaView>
  )
};

export default GamesList;