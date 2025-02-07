import { Table, TableHead, TableRow, TableCell, TableBody, CircularProgress, Chip } from "@mui/material";
import { useConversationContext } from "../context/ConversationContext";

const ConversationList = () => {
  const { state } = useConversationContext();

  const filteredConversations = state.conversations.filter((conv) =>
    conv.owner.toLowerCase().includes(state.searchQuery.toLowerCase()) &&
    (state.filterType ? conv.tags.includes(state.filterType) : true)
  );

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>Owner</TableCell>
          <TableCell>Talk Ratio</TableCell>
          <TableCell>Type</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {filteredConversations.map((conv) => (
          <TableRow key={conv.id}>
            <TableCell>{conv.id}</TableCell>
            <TableCell>{conv.owner}</TableCell>
            <TableCell>
              <CircularProgress variant="determinate" value={conv.talkRatio} />
            </TableCell>
            <TableCell>
              {conv.tags.map((tag) => (
                <Chip key={tag} label={tag} color={tag === "Sales" ? "primary" : "secondary"} />
              ))}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ConversationList;
