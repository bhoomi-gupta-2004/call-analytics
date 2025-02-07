import { MenuItem, Select } from "@mui/material";
import { useConversationContext } from "../context/ConversationContext";

const Filters = () => {
  const { dispatch } = useConversationContext();

  return (
    <Select
      onChange={(e) => dispatch({ type: "SET_FILTER_TYPE", payload: e.target.value })}
      defaultValue=""
    >
      <MenuItem value="">All</MenuItem>
      <MenuItem value="Sales">Sales</MenuItem>
      <MenuItem value="Marketing">Marketing</MenuItem>
    </Select>
  );
};

export default Filters;
