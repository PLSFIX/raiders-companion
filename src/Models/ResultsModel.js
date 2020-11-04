import { types } from "mobx-state-tree";

export const ResultsModel = types
  .model({
    weapons: "",
    gang: "",
    dice: "",
    points: "",
    offerings: "",
    gold: "",
    iron: "",
    stock: "",
    valk: "",
    gangAbilities: types.array(types.string),
  })
  .actions((self) => ({
    editField(field, val) {
      self[field] = val;
    },
    editGangAbility(index, val) {
      self.gangAbilities[index] = val;
    },
    addGangAbility() {
      self.gangAbilities.push("");
    },
    removeGangAbility() {
      self.gangAbilities.pop();
    },
    resetRaid() {
      self.weapons = "";
      self.gang = "";
      self.dice = "";
      self.gangAbilities = [""];
    },
    resetGame() {
      self.points = "";
      self.offerings = "";
      self.weapons = "";
      self.gold = "";
      self.iron = "";
      self.stock = "";
      self.valk = "";
      self.gangAbilities = [""];
    },
    calcValc(val) {
      switch (val) {
        case 0:
        case 1:
          return 0;
        case 2:
          return 1;
        case 3:
          return 2;
        case 4:
          return 4;
        case 5:
          return 7;
        case 6:
          return 10;
        case 7:
          return 15;
        default:
          return 15;
      }
    },
    calcWeapons(val) {
      switch (val) {
        case 10:
        case 9:
          return 6;
        case 8:
        case 7:
        case 6:
          return 4;
        case 5:
        case 4:
        case 3:
          return 2;
        case 2:
        case 1:
        case 0:
          return 0;
        default:
          return 6;
      }
    },
  }))
  .views((self) => ({
    get raidResult() {
      const weapons = parseInt(self.weapons);
      const gang = parseInt(self.gang);
      const dice = parseInt(self.dice);
      const calcGangAbilities = () => {
        return self.gangAbilities.reduce((prev, cur) => {
          const prevVal = parseInt(prev);
          const curVal = parseInt(cur);
          return (isNaN(prevVal) ? 0 : prevVal) + (isNaN(curVal) ? 0 : curVal);
        }, 0);
      };
      if (!!self.weapons && !!self.gang) {
        return (
          weapons + gang + (isNaN(dice) ? 0 : dice) + calcGangAbilities()
        );
      } else {
        return null;
      }
    },
    get gameResult() {
      const points = parseInt(self.points);
      const offerings = parseInt(self.offerings);
      const weapons = parseInt(self.weapons);
      const gold = parseInt(self.gold);
      const iron = parseInt(self.iron);
      const stock = parseInt(self.stock);
      const valk = parseInt(self.valk);
      const calcGangAbilities = () => {
        return self.gangAbilities.reduce((prev, cur) => {
          const prevVal = parseInt(prev);
          const curVal = parseInt(cur);
          return (isNaN(prevVal) ? 0 : prevVal) + (isNaN(curVal) ? 0 : curVal);
        }, 0);
      };
      if (
        !!self.points &&
        !!self.offerings &&
        !!self.weapons &&
        !!self.gold &&
        !!self.iron &&
        !!self.stock &&
        !!self.valk
      ) {
        const actuatStock = Math.floor(stock / 2);
        return (
          points +
          offerings +
          self.calcWeapons(weapons) +
          gold +
          iron +
          actuatStock +
          self.calcValc(valk) +
          calcGangAbilities()
        );
      } else {
        return null;
      }
    },
  }));
