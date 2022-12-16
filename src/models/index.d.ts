import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";

type ConfigurationMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BoardGameMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ScoringMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type GameMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PlayerMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerConfiguration = {
  readonly id: string;
  readonly name?: string | null;
  readonly value?: string | null;
  readonly BoardGame?: BoardGame | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly configurationBoardGameId?: string | null;
}

type LazyConfiguration = {
  readonly id: string;
  readonly name?: string | null;
  readonly value?: string | null;
  readonly BoardGame: AsyncItem<BoardGame | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly configurationBoardGameId?: string | null;
}

export declare type Configuration = LazyLoading extends LazyLoadingDisabled ? EagerConfiguration : LazyConfiguration

export declare const Configuration: (new (init: ModelInit<Configuration, ConfigurationMetaData>) => Configuration) & {
  copyOf(source: Configuration, mutator: (draft: MutableModel<Configuration, ConfigurationMetaData>) => MutableModel<Configuration, ConfigurationMetaData> | void): Configuration;
}

type EagerBoardGame = {
  readonly id: string;
  readonly name: string;
  readonly minPlayers?: number | null;
  readonly maxPlayers?: number | null;
  readonly Scorings?: (Scoring | null)[] | null;
  readonly Games?: (Game | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBoardGame = {
  readonly id: string;
  readonly name: string;
  readonly minPlayers?: number | null;
  readonly maxPlayers?: number | null;
  readonly Scorings: AsyncCollection<Scoring>;
  readonly Games: AsyncCollection<Game>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type BoardGame = LazyLoading extends LazyLoadingDisabled ? EagerBoardGame : LazyBoardGame

export declare const BoardGame: (new (init: ModelInit<BoardGame, BoardGameMetaData>) => BoardGame) & {
  copyOf(source: BoardGame, mutator: (draft: MutableModel<BoardGame, BoardGameMetaData>) => MutableModel<BoardGame, BoardGameMetaData> | void): BoardGame;
}

type EagerScoring = {
  readonly id: string;
  readonly name?: string | null;
  readonly pointValue?: number | null;
  readonly boardgameID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyScoring = {
  readonly id: string;
  readonly name?: string | null;
  readonly pointValue?: number | null;
  readonly boardgameID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Scoring = LazyLoading extends LazyLoadingDisabled ? EagerScoring : LazyScoring

export declare const Scoring: (new (init: ModelInit<Scoring, ScoringMetaData>) => Scoring) & {
  copyOf(source: Scoring, mutator: (draft: MutableModel<Scoring, ScoringMetaData>) => MutableModel<Scoring, ScoringMetaData> | void): Scoring;
}

type EagerGame = {
  readonly id: string;
  readonly created?: string | null;
  readonly completed?: string | null;
  readonly Players?: (Player | null)[] | null;
  readonly boardgameID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyGame = {
  readonly id: string;
  readonly created?: string | null;
  readonly completed?: string | null;
  readonly Players: AsyncCollection<Player>;
  readonly boardgameID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Game = LazyLoading extends LazyLoadingDisabled ? EagerGame : LazyGame

export declare const Game: (new (init: ModelInit<Game, GameMetaData>) => Game) & {
  copyOf(source: Game, mutator: (draft: MutableModel<Game, GameMetaData>) => MutableModel<Game, GameMetaData> | void): Game;
}

type EagerPlayer = {
  readonly id: string;
  readonly name: string;
  readonly gameID: string;
  readonly isOwner?: boolean | null;
  readonly isWinner?: boolean | null;
  readonly score?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPlayer = {
  readonly id: string;
  readonly name: string;
  readonly gameID: string;
  readonly isOwner?: boolean | null;
  readonly isWinner?: boolean | null;
  readonly score?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Player = LazyLoading extends LazyLoadingDisabled ? EagerPlayer : LazyPlayer

export declare const Player: (new (init: ModelInit<Player, PlayerMetaData>) => Player) & {
  copyOf(source: Player, mutator: (draft: MutableModel<Player, PlayerMetaData>) => MutableModel<Player, PlayerMetaData> | void): Player;
}