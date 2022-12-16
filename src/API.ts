/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateConfigurationInput = {
  id?: string | null,
  name?: string | null,
  value?: string | null,
  _version?: number | null,
  configurationBoardGameId?: string | null,
};

export type ModelConfigurationConditionInput = {
  name?: ModelStringInput | null,
  value?: ModelStringInput | null,
  and?: Array< ModelConfigurationConditionInput | null > | null,
  or?: Array< ModelConfigurationConditionInput | null > | null,
  not?: ModelConfigurationConditionInput | null,
  configurationBoardGameId?: ModelIDInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Configuration = {
  __typename: "Configuration",
  id: string,
  name?: string | null,
  value?: string | null,
  BoardGame?: BoardGame | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  configurationBoardGameId?: string | null,
};

export type BoardGame = {
  __typename: "BoardGame",
  id: string,
  name: string,
  minPlayers?: number | null,
  maxPlayers?: number | null,
  Scorings?: ModelScoringConnection | null,
  Games?: ModelGameConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelScoringConnection = {
  __typename: "ModelScoringConnection",
  items:  Array<Scoring | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Scoring = {
  __typename: "Scoring",
  id: string,
  name?: string | null,
  pointValue?: number | null,
  boardgameID: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelGameConnection = {
  __typename: "ModelGameConnection",
  items:  Array<Game | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Game = {
  __typename: "Game",
  id: string,
  created?: string | null,
  completed?: string | null,
  Players?: ModelPlayerConnection | null,
  boardgameID: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelPlayerConnection = {
  __typename: "ModelPlayerConnection",
  items:  Array<Player | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Player = {
  __typename: "Player",
  id: string,
  name: string,
  gameID: string,
  isOwner?: boolean | null,
  isWinner?: boolean | null,
  score?: number | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateConfigurationInput = {
  id: string,
  name?: string | null,
  value?: string | null,
  _version?: number | null,
  configurationBoardGameId?: string | null,
};

export type DeleteConfigurationInput = {
  id: string,
  _version?: number | null,
};

export type CreateGameInput = {
  id?: string | null,
  created?: string | null,
  completed?: string | null,
  boardgameID: string,
  _version?: number | null,
};

export type ModelGameConditionInput = {
  created?: ModelStringInput | null,
  completed?: ModelStringInput | null,
  boardgameID?: ModelIDInput | null,
  and?: Array< ModelGameConditionInput | null > | null,
  or?: Array< ModelGameConditionInput | null > | null,
  not?: ModelGameConditionInput | null,
};

export type UpdateGameInput = {
  id: string,
  created?: string | null,
  completed?: string | null,
  boardgameID?: string | null,
  _version?: number | null,
};

export type DeleteGameInput = {
  id: string,
  _version?: number | null,
};

export type CreatePlayerInput = {
  id?: string | null,
  name: string,
  gameID: string,
  isOwner?: boolean | null,
  isWinner?: boolean | null,
  score?: number | null,
  _version?: number | null,
};

export type ModelPlayerConditionInput = {
  name?: ModelStringInput | null,
  gameID?: ModelIDInput | null,
  isOwner?: ModelBooleanInput | null,
  isWinner?: ModelBooleanInput | null,
  score?: ModelIntInput | null,
  and?: Array< ModelPlayerConditionInput | null > | null,
  or?: Array< ModelPlayerConditionInput | null > | null,
  not?: ModelPlayerConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdatePlayerInput = {
  id: string,
  name?: string | null,
  gameID?: string | null,
  isOwner?: boolean | null,
  isWinner?: boolean | null,
  score?: number | null,
  _version?: number | null,
};

export type DeletePlayerInput = {
  id: string,
  _version?: number | null,
};

export type CreateScoringInput = {
  id?: string | null,
  name?: string | null,
  pointValue?: number | null,
  boardgameID: string,
  _version?: number | null,
};

export type ModelScoringConditionInput = {
  name?: ModelStringInput | null,
  pointValue?: ModelIntInput | null,
  boardgameID?: ModelIDInput | null,
  and?: Array< ModelScoringConditionInput | null > | null,
  or?: Array< ModelScoringConditionInput | null > | null,
  not?: ModelScoringConditionInput | null,
};

export type UpdateScoringInput = {
  id: string,
  name?: string | null,
  pointValue?: number | null,
  boardgameID?: string | null,
  _version?: number | null,
};

export type DeleteScoringInput = {
  id: string,
  _version?: number | null,
};

export type CreateBoardGameInput = {
  id?: string | null,
  name: string,
  minPlayers?: number | null,
  maxPlayers?: number | null,
  _version?: number | null,
};

export type ModelBoardGameConditionInput = {
  name?: ModelStringInput | null,
  minPlayers?: ModelIntInput | null,
  maxPlayers?: ModelIntInput | null,
  and?: Array< ModelBoardGameConditionInput | null > | null,
  or?: Array< ModelBoardGameConditionInput | null > | null,
  not?: ModelBoardGameConditionInput | null,
};

export type UpdateBoardGameInput = {
  id: string,
  name?: string | null,
  minPlayers?: number | null,
  maxPlayers?: number | null,
  _version?: number | null,
};

export type DeleteBoardGameInput = {
  id: string,
  _version?: number | null,
};

export type ModelConfigurationFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  value?: ModelStringInput | null,
  and?: Array< ModelConfigurationFilterInput | null > | null,
  or?: Array< ModelConfigurationFilterInput | null > | null,
  not?: ModelConfigurationFilterInput | null,
  configurationBoardGameId?: ModelIDInput | null,
};

export type ModelConfigurationConnection = {
  __typename: "ModelConfigurationConnection",
  items:  Array<Configuration | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelGameFilterInput = {
  id?: ModelIDInput | null,
  created?: ModelStringInput | null,
  completed?: ModelStringInput | null,
  boardgameID?: ModelIDInput | null,
  and?: Array< ModelGameFilterInput | null > | null,
  or?: Array< ModelGameFilterInput | null > | null,
  not?: ModelGameFilterInput | null,
};

export type ModelPlayerFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  gameID?: ModelIDInput | null,
  isOwner?: ModelBooleanInput | null,
  isWinner?: ModelBooleanInput | null,
  score?: ModelIntInput | null,
  and?: Array< ModelPlayerFilterInput | null > | null,
  or?: Array< ModelPlayerFilterInput | null > | null,
  not?: ModelPlayerFilterInput | null,
};

export type ModelScoringFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  pointValue?: ModelIntInput | null,
  boardgameID?: ModelIDInput | null,
  and?: Array< ModelScoringFilterInput | null > | null,
  or?: Array< ModelScoringFilterInput | null > | null,
  not?: ModelScoringFilterInput | null,
};

export type ModelBoardGameFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  minPlayers?: ModelIntInput | null,
  maxPlayers?: ModelIntInput | null,
  and?: Array< ModelBoardGameFilterInput | null > | null,
  or?: Array< ModelBoardGameFilterInput | null > | null,
  not?: ModelBoardGameFilterInput | null,
};

export type ModelBoardGameConnection = {
  __typename: "ModelBoardGameConnection",
  items:  Array<BoardGame | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelSubscriptionConfigurationFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionConfigurationFilterInput | null > | null,
  or?: Array< ModelSubscriptionConfigurationFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionGameFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  created?: ModelSubscriptionStringInput | null,
  completed?: ModelSubscriptionStringInput | null,
  boardgameID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionGameFilterInput | null > | null,
  or?: Array< ModelSubscriptionGameFilterInput | null > | null,
};

export type ModelSubscriptionPlayerFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  gameID?: ModelSubscriptionIDInput | null,
  isOwner?: ModelSubscriptionBooleanInput | null,
  isWinner?: ModelSubscriptionBooleanInput | null,
  score?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionPlayerFilterInput | null > | null,
  or?: Array< ModelSubscriptionPlayerFilterInput | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionScoringFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  pointValue?: ModelSubscriptionIntInput | null,
  boardgameID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionScoringFilterInput | null > | null,
  or?: Array< ModelSubscriptionScoringFilterInput | null > | null,
};

export type ModelSubscriptionBoardGameFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  minPlayers?: ModelSubscriptionIntInput | null,
  maxPlayers?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionBoardGameFilterInput | null > | null,
  or?: Array< ModelSubscriptionBoardGameFilterInput | null > | null,
};

export type CreateConfigurationMutationVariables = {
  input: CreateConfigurationInput,
  condition?: ModelConfigurationConditionInput | null,
};

export type CreateConfigurationMutation = {
  createConfiguration?:  {
    __typename: "Configuration",
    id: string,
    name?: string | null,
    value?: string | null,
    BoardGame?:  {
      __typename: "BoardGame",
      id: string,
      name: string,
      minPlayers?: number | null,
      maxPlayers?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    configurationBoardGameId?: string | null,
  } | null,
};

export type UpdateConfigurationMutationVariables = {
  input: UpdateConfigurationInput,
  condition?: ModelConfigurationConditionInput | null,
};

export type UpdateConfigurationMutation = {
  updateConfiguration?:  {
    __typename: "Configuration",
    id: string,
    name?: string | null,
    value?: string | null,
    BoardGame?:  {
      __typename: "BoardGame",
      id: string,
      name: string,
      minPlayers?: number | null,
      maxPlayers?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    configurationBoardGameId?: string | null,
  } | null,
};

export type DeleteConfigurationMutationVariables = {
  input: DeleteConfigurationInput,
  condition?: ModelConfigurationConditionInput | null,
};

export type DeleteConfigurationMutation = {
  deleteConfiguration?:  {
    __typename: "Configuration",
    id: string,
    name?: string | null,
    value?: string | null,
    BoardGame?:  {
      __typename: "BoardGame",
      id: string,
      name: string,
      minPlayers?: number | null,
      maxPlayers?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    configurationBoardGameId?: string | null,
  } | null,
};

export type CreateGameMutationVariables = {
  input: CreateGameInput,
  condition?: ModelGameConditionInput | null,
};

export type CreateGameMutation = {
  createGame?:  {
    __typename: "Game",
    id: string,
    created?: string | null,
    completed?: string | null,
    Players?:  {
      __typename: "ModelPlayerConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    boardgameID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateGameMutationVariables = {
  input: UpdateGameInput,
  condition?: ModelGameConditionInput | null,
};

export type UpdateGameMutation = {
  updateGame?:  {
    __typename: "Game",
    id: string,
    created?: string | null,
    completed?: string | null,
    Players?:  {
      __typename: "ModelPlayerConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    boardgameID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteGameMutationVariables = {
  input: DeleteGameInput,
  condition?: ModelGameConditionInput | null,
};

export type DeleteGameMutation = {
  deleteGame?:  {
    __typename: "Game",
    id: string,
    created?: string | null,
    completed?: string | null,
    Players?:  {
      __typename: "ModelPlayerConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    boardgameID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreatePlayerMutationVariables = {
  input: CreatePlayerInput,
  condition?: ModelPlayerConditionInput | null,
};

export type CreatePlayerMutation = {
  createPlayer?:  {
    __typename: "Player",
    id: string,
    name: string,
    gameID: string,
    isOwner?: boolean | null,
    isWinner?: boolean | null,
    score?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdatePlayerMutationVariables = {
  input: UpdatePlayerInput,
  condition?: ModelPlayerConditionInput | null,
};

export type UpdatePlayerMutation = {
  updatePlayer?:  {
    __typename: "Player",
    id: string,
    name: string,
    gameID: string,
    isOwner?: boolean | null,
    isWinner?: boolean | null,
    score?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeletePlayerMutationVariables = {
  input: DeletePlayerInput,
  condition?: ModelPlayerConditionInput | null,
};

export type DeletePlayerMutation = {
  deletePlayer?:  {
    __typename: "Player",
    id: string,
    name: string,
    gameID: string,
    isOwner?: boolean | null,
    isWinner?: boolean | null,
    score?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateScoringMutationVariables = {
  input: CreateScoringInput,
  condition?: ModelScoringConditionInput | null,
};

export type CreateScoringMutation = {
  createScoring?:  {
    __typename: "Scoring",
    id: string,
    name?: string | null,
    pointValue?: number | null,
    boardgameID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateScoringMutationVariables = {
  input: UpdateScoringInput,
  condition?: ModelScoringConditionInput | null,
};

export type UpdateScoringMutation = {
  updateScoring?:  {
    __typename: "Scoring",
    id: string,
    name?: string | null,
    pointValue?: number | null,
    boardgameID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteScoringMutationVariables = {
  input: DeleteScoringInput,
  condition?: ModelScoringConditionInput | null,
};

export type DeleteScoringMutation = {
  deleteScoring?:  {
    __typename: "Scoring",
    id: string,
    name?: string | null,
    pointValue?: number | null,
    boardgameID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateBoardGameMutationVariables = {
  input: CreateBoardGameInput,
  condition?: ModelBoardGameConditionInput | null,
};

export type CreateBoardGameMutation = {
  createBoardGame?:  {
    __typename: "BoardGame",
    id: string,
    name: string,
    minPlayers?: number | null,
    maxPlayers?: number | null,
    Scorings?:  {
      __typename: "ModelScoringConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Games?:  {
      __typename: "ModelGameConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateBoardGameMutationVariables = {
  input: UpdateBoardGameInput,
  condition?: ModelBoardGameConditionInput | null,
};

export type UpdateBoardGameMutation = {
  updateBoardGame?:  {
    __typename: "BoardGame",
    id: string,
    name: string,
    minPlayers?: number | null,
    maxPlayers?: number | null,
    Scorings?:  {
      __typename: "ModelScoringConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Games?:  {
      __typename: "ModelGameConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteBoardGameMutationVariables = {
  input: DeleteBoardGameInput,
  condition?: ModelBoardGameConditionInput | null,
};

export type DeleteBoardGameMutation = {
  deleteBoardGame?:  {
    __typename: "BoardGame",
    id: string,
    name: string,
    minPlayers?: number | null,
    maxPlayers?: number | null,
    Scorings?:  {
      __typename: "ModelScoringConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Games?:  {
      __typename: "ModelGameConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetConfigurationQueryVariables = {
  id: string,
};

export type GetConfigurationQuery = {
  getConfiguration?:  {
    __typename: "Configuration",
    id: string,
    name?: string | null,
    value?: string | null,
    BoardGame?:  {
      __typename: "BoardGame",
      id: string,
      name: string,
      minPlayers?: number | null,
      maxPlayers?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    configurationBoardGameId?: string | null,
  } | null,
};

export type ListConfigurationsQueryVariables = {
  filter?: ModelConfigurationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListConfigurationsQuery = {
  listConfigurations?:  {
    __typename: "ModelConfigurationConnection",
    items:  Array< {
      __typename: "Configuration",
      id: string,
      name?: string | null,
      value?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      configurationBoardGameId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncConfigurationsQueryVariables = {
  filter?: ModelConfigurationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncConfigurationsQuery = {
  syncConfigurations?:  {
    __typename: "ModelConfigurationConnection",
    items:  Array< {
      __typename: "Configuration",
      id: string,
      name?: string | null,
      value?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      configurationBoardGameId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetGameQueryVariables = {
  id: string,
};

export type GetGameQuery = {
  getGame?:  {
    __typename: "Game",
    id: string,
    created?: string | null,
    completed?: string | null,
    Players?:  {
      __typename: "ModelPlayerConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    boardgameID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListGamesQueryVariables = {
  filter?: ModelGameFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGamesQuery = {
  listGames?:  {
    __typename: "ModelGameConnection",
    items:  Array< {
      __typename: "Game",
      id: string,
      created?: string | null,
      completed?: string | null,
      boardgameID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncGamesQueryVariables = {
  filter?: ModelGameFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncGamesQuery = {
  syncGames?:  {
    __typename: "ModelGameConnection",
    items:  Array< {
      __typename: "Game",
      id: string,
      created?: string | null,
      completed?: string | null,
      boardgameID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetPlayerQueryVariables = {
  id: string,
};

export type GetPlayerQuery = {
  getPlayer?:  {
    __typename: "Player",
    id: string,
    name: string,
    gameID: string,
    isOwner?: boolean | null,
    isWinner?: boolean | null,
    score?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListPlayersQueryVariables = {
  filter?: ModelPlayerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPlayersQuery = {
  listPlayers?:  {
    __typename: "ModelPlayerConnection",
    items:  Array< {
      __typename: "Player",
      id: string,
      name: string,
      gameID: string,
      isOwner?: boolean | null,
      isWinner?: boolean | null,
      score?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncPlayersQueryVariables = {
  filter?: ModelPlayerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncPlayersQuery = {
  syncPlayers?:  {
    __typename: "ModelPlayerConnection",
    items:  Array< {
      __typename: "Player",
      id: string,
      name: string,
      gameID: string,
      isOwner?: boolean | null,
      isWinner?: boolean | null,
      score?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetScoringQueryVariables = {
  id: string,
};

export type GetScoringQuery = {
  getScoring?:  {
    __typename: "Scoring",
    id: string,
    name?: string | null,
    pointValue?: number | null,
    boardgameID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListScoringsQueryVariables = {
  filter?: ModelScoringFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListScoringsQuery = {
  listScorings?:  {
    __typename: "ModelScoringConnection",
    items:  Array< {
      __typename: "Scoring",
      id: string,
      name?: string | null,
      pointValue?: number | null,
      boardgameID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncScoringsQueryVariables = {
  filter?: ModelScoringFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncScoringsQuery = {
  syncScorings?:  {
    __typename: "ModelScoringConnection",
    items:  Array< {
      __typename: "Scoring",
      id: string,
      name?: string | null,
      pointValue?: number | null,
      boardgameID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetBoardGameQueryVariables = {
  id: string,
};

export type GetBoardGameQuery = {
  getBoardGame?:  {
    __typename: "BoardGame",
    id: string,
    name: string,
    minPlayers?: number | null,
    maxPlayers?: number | null,
    Scorings?:  {
      __typename: "ModelScoringConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Games?:  {
      __typename: "ModelGameConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListBoardGamesQueryVariables = {
  filter?: ModelBoardGameFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBoardGamesQuery = {
  listBoardGames?:  {
    __typename: "ModelBoardGameConnection",
    items:  Array< {
      __typename: "BoardGame",
      id: string,
      name: string,
      minPlayers?: number | null,
      maxPlayers?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncBoardGamesQueryVariables = {
  filter?: ModelBoardGameFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncBoardGamesQuery = {
  syncBoardGames?:  {
    __typename: "ModelBoardGameConnection",
    items:  Array< {
      __typename: "BoardGame",
      id: string,
      name: string,
      minPlayers?: number | null,
      maxPlayers?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateConfigurationSubscriptionVariables = {
  filter?: ModelSubscriptionConfigurationFilterInput | null,
};

export type OnCreateConfigurationSubscription = {
  onCreateConfiguration?:  {
    __typename: "Configuration",
    id: string,
    name?: string | null,
    value?: string | null,
    BoardGame?:  {
      __typename: "BoardGame",
      id: string,
      name: string,
      minPlayers?: number | null,
      maxPlayers?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    configurationBoardGameId?: string | null,
  } | null,
};

export type OnUpdateConfigurationSubscriptionVariables = {
  filter?: ModelSubscriptionConfigurationFilterInput | null,
};

export type OnUpdateConfigurationSubscription = {
  onUpdateConfiguration?:  {
    __typename: "Configuration",
    id: string,
    name?: string | null,
    value?: string | null,
    BoardGame?:  {
      __typename: "BoardGame",
      id: string,
      name: string,
      minPlayers?: number | null,
      maxPlayers?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    configurationBoardGameId?: string | null,
  } | null,
};

export type OnDeleteConfigurationSubscriptionVariables = {
  filter?: ModelSubscriptionConfigurationFilterInput | null,
};

export type OnDeleteConfigurationSubscription = {
  onDeleteConfiguration?:  {
    __typename: "Configuration",
    id: string,
    name?: string | null,
    value?: string | null,
    BoardGame?:  {
      __typename: "BoardGame",
      id: string,
      name: string,
      minPlayers?: number | null,
      maxPlayers?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    configurationBoardGameId?: string | null,
  } | null,
};

export type OnCreateGameSubscriptionVariables = {
  filter?: ModelSubscriptionGameFilterInput | null,
};

export type OnCreateGameSubscription = {
  onCreateGame?:  {
    __typename: "Game",
    id: string,
    created?: string | null,
    completed?: string | null,
    Players?:  {
      __typename: "ModelPlayerConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    boardgameID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateGameSubscriptionVariables = {
  filter?: ModelSubscriptionGameFilterInput | null,
};

export type OnUpdateGameSubscription = {
  onUpdateGame?:  {
    __typename: "Game",
    id: string,
    created?: string | null,
    completed?: string | null,
    Players?:  {
      __typename: "ModelPlayerConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    boardgameID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteGameSubscriptionVariables = {
  filter?: ModelSubscriptionGameFilterInput | null,
};

export type OnDeleteGameSubscription = {
  onDeleteGame?:  {
    __typename: "Game",
    id: string,
    created?: string | null,
    completed?: string | null,
    Players?:  {
      __typename: "ModelPlayerConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    boardgameID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreatePlayerSubscriptionVariables = {
  filter?: ModelSubscriptionPlayerFilterInput | null,
};

export type OnCreatePlayerSubscription = {
  onCreatePlayer?:  {
    __typename: "Player",
    id: string,
    name: string,
    gameID: string,
    isOwner?: boolean | null,
    isWinner?: boolean | null,
    score?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdatePlayerSubscriptionVariables = {
  filter?: ModelSubscriptionPlayerFilterInput | null,
};

export type OnUpdatePlayerSubscription = {
  onUpdatePlayer?:  {
    __typename: "Player",
    id: string,
    name: string,
    gameID: string,
    isOwner?: boolean | null,
    isWinner?: boolean | null,
    score?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeletePlayerSubscriptionVariables = {
  filter?: ModelSubscriptionPlayerFilterInput | null,
};

export type OnDeletePlayerSubscription = {
  onDeletePlayer?:  {
    __typename: "Player",
    id: string,
    name: string,
    gameID: string,
    isOwner?: boolean | null,
    isWinner?: boolean | null,
    score?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateScoringSubscriptionVariables = {
  filter?: ModelSubscriptionScoringFilterInput | null,
};

export type OnCreateScoringSubscription = {
  onCreateScoring?:  {
    __typename: "Scoring",
    id: string,
    name?: string | null,
    pointValue?: number | null,
    boardgameID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateScoringSubscriptionVariables = {
  filter?: ModelSubscriptionScoringFilterInput | null,
};

export type OnUpdateScoringSubscription = {
  onUpdateScoring?:  {
    __typename: "Scoring",
    id: string,
    name?: string | null,
    pointValue?: number | null,
    boardgameID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteScoringSubscriptionVariables = {
  filter?: ModelSubscriptionScoringFilterInput | null,
};

export type OnDeleteScoringSubscription = {
  onDeleteScoring?:  {
    __typename: "Scoring",
    id: string,
    name?: string | null,
    pointValue?: number | null,
    boardgameID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateBoardGameSubscriptionVariables = {
  filter?: ModelSubscriptionBoardGameFilterInput | null,
};

export type OnCreateBoardGameSubscription = {
  onCreateBoardGame?:  {
    __typename: "BoardGame",
    id: string,
    name: string,
    minPlayers?: number | null,
    maxPlayers?: number | null,
    Scorings?:  {
      __typename: "ModelScoringConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Games?:  {
      __typename: "ModelGameConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateBoardGameSubscriptionVariables = {
  filter?: ModelSubscriptionBoardGameFilterInput | null,
};

export type OnUpdateBoardGameSubscription = {
  onUpdateBoardGame?:  {
    __typename: "BoardGame",
    id: string,
    name: string,
    minPlayers?: number | null,
    maxPlayers?: number | null,
    Scorings?:  {
      __typename: "ModelScoringConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Games?:  {
      __typename: "ModelGameConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteBoardGameSubscriptionVariables = {
  filter?: ModelSubscriptionBoardGameFilterInput | null,
};

export type OnDeleteBoardGameSubscription = {
  onDeleteBoardGame?:  {
    __typename: "BoardGame",
    id: string,
    name: string,
    minPlayers?: number | null,
    maxPlayers?: number | null,
    Scorings?:  {
      __typename: "ModelScoringConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Games?:  {
      __typename: "ModelGameConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
