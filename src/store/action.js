import * as actions from "./actionTypes";

export const bugAdded = (description) => ({
  type: actions.addBug,
  payload: {
    description,
  },
});

export const bugResolved = (id) => ({
  type: actions.resolveBug,
  payload: {
    id,
  },
});
