// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Game, Player, Scoring, BoardGame } = initSchema(schema);

export {
  Game,
  Player,
  Scoring,
  BoardGame
};