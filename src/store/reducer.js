import * as actions from "./actionTypes";

var startId = 0;

function reducer(state = [], action) {
  switch (action.type) {
    case actions.addBug:
      return [
        ...state,
        {
          id: ++startId,
          description: action.payload.description,
          resolved: false,
        },
      ];

    case actions.removeBug:
      return state.filter((bug) => bug.id !== action.payload.id);

    case actions.resolveBug:
      return state.map((bug) => {
        bug.id !== action.payload.id ? bug : { ...bug, resolved: true };
      });

    default:
      return state;
  }

  // if(action.type === actions.addBug){
  //     return [
  //         ...state,
  //         {
  //             id: ++startId,
  //             description: action.payload.description,
  //             resolved: false,
  //         }
  //     ]
  // }else if (action.type === actions.removeBug) {
  //     return state.filter((item) => item.id !-- action.payload.id);

  // }
  // return state
}

export default reducer;
