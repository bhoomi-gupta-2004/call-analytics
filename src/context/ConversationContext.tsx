import { createContext, useReducer, useContext, useEffect, ReactNode } from "react";
import { Conversation } from "../types/conversations";
import { mockConversations } from "../data/mockData";

type State = {
  conversations: Conversation[];
  searchQuery: string;
  filterType: string;
};

const initialState: State = {
  conversations: [],
  searchQuery: "",
  filterType: ""
};

type Action =
  | { type: "SET_CONVERSATIONS"; payload: Conversation[] }
  | { type: "SET_SEARCH_QUERY"; payload: string }
  | { type: "SET_FILTER_TYPE"; payload: string };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_CONVERSATIONS":
      return { ...state, conversations: action.payload };
    case "SET_SEARCH_QUERY":
      return { ...state, searchQuery: action.payload };
    case "SET_FILTER_TYPE":
      return { ...state, filterType: action.payload };
    default:
      return state;
  }
};

const ConversationContext = createContext<{ state: State; dispatch: React.Dispatch<Action> } | undefined>(undefined);

export const ConversationProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "SET_CONVERSATIONS", payload: mockConversations });
  }, []);

  return <ConversationContext.Provider value={{ state, dispatch }}>{children}</ConversationContext.Provider>;
};

export const useConversationContext = () => {
  const context = useContext(ConversationContext);
  if (!context) throw new Error("useConversationContext must be used within a Provider");
  return context;
};

