import { useContext, createContext } from "react";
import { types } from "mobx-state-tree";
import { ResultsModel } from "./ResultsModel";

const RootModel = types.model({
  Results: ResultsModel,
});

const RootModelInstance = RootModel.create({
  Results: ResultsModel.create({
    gangAbilities: [""],
  }),
});

const rootStoreContext = createContext(RootModelInstance);
export const useRootStore = () => useContext(rootStoreContext);