import { TextField } from "@mui/material";
import { useConversationContext } from "../context/ConversationContext";

const SearchBar = () => {
  const { dispatch } = useConversationContext();

  return (
    <TextField
      label="Search by Owner"
      fullWidth
      variant="outlined"
      onChange={(e) => dispatch({ type: "SET_SEARCH_QUERY", payload: e.target.value })}
    />
  );
};

export default SearchBar;
