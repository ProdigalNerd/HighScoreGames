// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Configuration, BoardGame, Scoring, Game, Player } = initSchema(schema);

export {
  Configuration,
  BoardGame,
  Scoring,
  Game,
  Player
};