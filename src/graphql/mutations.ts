/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createConfiguration = /* GraphQL */ `
  mutation CreateConfiguration(
    $input: CreateConfigurationInput!
    $condition: ModelConfigurationConditionInput
  ) {
    createConfiguration(input: $input, condition: $condition) {
      id
      name
      value
      BoardGame {
        id
        name
        minPlayers
        maxPlayers
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      configurationBoardGameId
    }
  }
`;
export const updateConfiguration = /* GraphQL */ `
  mutation UpdateConfiguration(
    $input: UpdateConfigurationInput!
    $condition: ModelConfigurationConditionInput
  ) {
    updateConfiguration(input: $input, condition: $condition) {
      id
      name
      value
      BoardGame {
        id
        name
        minPlayers
        maxPlayers
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      configurationBoardGameId
    }
  }
`;
export const deleteConfiguration = /* GraphQL */ `
  mutation DeleteConfiguration(
    $input: DeleteConfigurationInput!
    $condition: ModelConfigurationConditionInput
  ) {
    deleteConfiguration(input: $input, condition: $condition) {
      id
      name
      value
      BoardGame {
        id
        name
        minPlayers
        maxPlayers
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      configurationBoardGameId
    }
  }
`;
export const createGame = /* GraphQL */ `
  mutation CreateGame(
    $input: CreateGameInput!
    $condition: ModelGameConditionInput
  ) {
    createGame(input: $input, condition: $condition) {
      id
      created
      completed
      Players {
        nextToken
        startedAt
      }
      boardgameID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateGame = /* GraphQL */ `
  mutation UpdateGame(
    $input: UpdateGameInput!
    $condition: ModelGameConditionInput
  ) {
    updateGame(input: $input, condition: $condition) {
      id
      created
      completed
      Players {
        nextToken
        startedAt
      }
      boardgameID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteGame = /* GraphQL */ `
  mutation DeleteGame(
    $input: DeleteGameInput!
    $condition: ModelGameConditionInput
  ) {
    deleteGame(input: $input, condition: $condition) {
      id
      created
      completed
      Players {
        nextToken
        startedAt
      }
      boardgameID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createPlayer = /* GraphQL */ `
  mutation CreatePlayer(
    $input: CreatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    createPlayer(input: $input, condition: $condition) {
      id
      name
      gameID
      isOwner
      isWinner
      score
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updatePlayer = /* GraphQL */ `
  mutation UpdatePlayer(
    $input: UpdatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    updatePlayer(input: $input, condition: $condition) {
      id
      name
      gameID
      isOwner
      isWinner
      score
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deletePlayer = /* GraphQL */ `
  mutation DeletePlayer(
    $input: DeletePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    deletePlayer(input: $input, condition: $condition) {
      id
      name
      gameID
      isOwner
      isWinner
      score
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createScoring = /* GraphQL */ `
  mutation CreateScoring(
    $input: CreateScoringInput!
    $condition: ModelScoringConditionInput
  ) {
    createScoring(input: $input, condition: $condition) {
      id
      name
      pointValue
      boardgameID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateScoring = /* GraphQL */ `
  mutation UpdateScoring(
    $input: UpdateScoringInput!
    $condition: ModelScoringConditionInput
  ) {
    updateScoring(input: $input, condition: $condition) {
      id
      name
      pointValue
      boardgameID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteScoring = /* GraphQL */ `
  mutation DeleteScoring(
    $input: DeleteScoringInput!
    $condition: ModelScoringConditionInput
  ) {
    deleteScoring(input: $input, condition: $condition) {
      id
      name
      pointValue
      boardgameID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createBoardGame = /* GraphQL */ `
  mutation CreateBoardGame(
    $input: CreateBoardGameInput!
    $condition: ModelBoardGameConditionInput
  ) {
    createBoardGame(input: $input, condition: $condition) {
      id
      name
      minPlayers
      maxPlayers
      Scorings {
        nextToken
        startedAt
      }
      Games {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateBoardGame = /* GraphQL */ `
  mutation UpdateBoardGame(
    $input: UpdateBoardGameInput!
    $condition: ModelBoardGameConditionInput
  ) {
    updateBoardGame(input: $input, condition: $condition) {
      id
      name
      minPlayers
      maxPlayers
      Scorings {
        nextToken
        startedAt
      }
      Games {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteBoardGame = /* GraphQL */ `
  mutation DeleteBoardGame(
    $input: DeleteBoardGameInput!
    $condition: ModelBoardGameConditionInput
  ) {
    deleteBoardGame(input: $input, condition: $condition) {
      id
      name
      minPlayers
      maxPlayers
      Scorings {
        nextToken
        startedAt
      }
      Games {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
