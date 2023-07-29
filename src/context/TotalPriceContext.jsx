import { createContext, useContext, useReducer } from "react";

const TotalPriceContext = createContext(null);

const TotalDispatchContext = createContext(null);

const totalPriceReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE":
      return {
        total: action.payload.total
      };
    default: {
      throw Error("Unknown action" + action.type);
    }
  }
};
export default function TotalPriceProvider({ children }) {
  const [totalPrice, dispatch] = useReducer(totalPriceReducer, { total: 0 });
  return (
    <TotalPriceContext.Provider value={totalPrice}>
      <TotalDispatchContext.Provider value={dispatch}>
        {children}
      </TotalDispatchContext.Provider>
    </TotalPriceContext.Provider>
  );
}

export function useTotalPrice() {
  return useContext(TotalPriceContext);
}

export function useTotalPriceDispatch() {
  return useContext(TotalDispatchContext);
}
