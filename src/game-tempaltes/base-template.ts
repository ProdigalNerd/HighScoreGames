class BaseTemplate {
  numberOfPlayers: number;

  constructor() {
    this.numberOfPlayers = 1;
  }

  generateConfigurationFormControls() {}
  createScoreObjects() {}
};

export default BaseTemplate;