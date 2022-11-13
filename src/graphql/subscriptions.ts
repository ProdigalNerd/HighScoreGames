/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateGame = /* GraphQL */ `
  subscription OnCreateGame($filter: ModelSubscriptionGameFilterInput) {
    onCreateGame(filter: $filter) {
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
export const onUpdateGame = /* GraphQL */ `
  subscription OnUpdateGame($filter: ModelSubscriptionGameFilterInput) {
    onUpdateGame(filter: $filter) {
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
export const onDeleteGame = /* GraphQL */ `
  subscription OnDeleteGame($filter: ModelSubscriptionGameFilterInput) {
    onDeleteGame(filter: $filter) {
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
export const onCreatePlayer = /* GraphQL */ `
  subscription OnCreatePlayer($filter: ModelSubscriptionPlayerFilterInput) {
    onCreatePlayer(filter: $filter) {
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
export const onUpdatePlayer = /* GraphQL */ `
  subscription OnUpdatePlayer($filter: ModelSubscriptionPlayerFilterInput) {
    onUpdatePlayer(filter: $filter) {
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
export const onDeletePlayer = /* GraphQL */ `
  subscription OnDeletePlayer($filter: ModelSubscriptionPlayerFilterInput) {
    onDeletePlayer(filter: $filter) {
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
export const onCreateScoring = /* GraphQL */ `
  subscription OnCreateScoring($filter: ModelSubscriptionScoringFilterInput) {
    onCreateScoring(filter: $filter) {
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
export const onUpdateScoring = /* GraphQL */ `
  subscription OnUpdateScoring($filter: ModelSubscriptionScoringFilterInput) {
    onUpdateScoring(filter: $filter) {
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
export const onDeleteScoring = /* GraphQL */ `
  subscription OnDeleteScoring($filter: ModelSubscriptionScoringFilterInput) {
    onDeleteScoring(filter: $filter) {
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
export const onCreateBoardGame = /* GraphQL */ `
  subscription OnCreateBoardGame(
    $filter: ModelSubscriptionBoardGameFilterInput
  ) {
    onCreateBoardGame(filter: $filter) {
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
export const onUpdateBoardGame = /* GraphQL */ `
  subscription OnUpdateBoardGame(
    $filter: ModelSubscriptionBoardGameFilterInput
  ) {
    onUpdateBoardGame(filter: $filter) {
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
export const onDeleteBoardGame = /* GraphQL */ `
  subscription OnDeleteBoardGame(
    $filter: ModelSubscriptionBoardGameFilterInput
  ) {
    onDeleteBoardGame(filter: $filter) {
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
