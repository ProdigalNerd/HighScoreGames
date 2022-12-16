import BaseTemplate from "../base-template";
import { ChallengeMode } from "./challenge-mode";
import { Henchmen } from "./henchmen";
import { Hero } from "./hero";
import { Mastermind } from "./mastermind";
import { Scheme } from "./scheme";
import { VillainGroup } from "./villain-group";

class MarvelLegendary extends BaseTemplate {
  selectedHeroes: Hero[];
  selectedMastermind: Mastermind;
  selectedScheme: Scheme;
  selectedVillainGroups: VillainGroup[];
  selectedChallengeMode: ChallengeMode;
  selectedHenchmen: Henchmen[];

  constructor() {
    super();
    this.selectedHeroes = [];
    this.selectedMastermind = Mastermind.None;
    this.selectedScheme = Scheme.None;
    this.selectedVillainGroups = [];
    this.selectedChallengeMode = ChallengeMode.Normal;
    this.selectedHenchmen = [];
  }

  getListOfHeroes(): (string | Hero)[] {
    return Object.values(Hero);
  }

  getListOfMasterminds(): (string | Mastermind)[] {
    return Object.values(Mastermind);
  }

  getListOfVillainGroups(): (string | VillainGroup)[] {
    return Object.values(VillainGroup);
  }

  getListOfChallengeModes(): (string | ChallengeMode)[] {
    return Object.values(ChallengeMode);
  }
}

export default MarvelLegendary;