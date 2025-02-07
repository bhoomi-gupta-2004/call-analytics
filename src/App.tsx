import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  TextField,
  Select,
  MenuItem,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  CircularProgress,
  Chip,
  Paper,
  Container,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { mockConversations } from "./data/mockData";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("");
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [open, setOpen] = useState(false);

  const handleViewClick = (conversation) => {
    setSelectedConversation(conversation);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedConversation(null);
  };

  const filteredConversations = mockConversations.filter(
    (conv) =>
      conv.owner.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (filterType ? conv.tags.includes(filterType) : true)
  );

  return (
    <Container maxWidth="md" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <Paper elevation={3} style={{ padding: "20px", borderRadius: "12px", width: "100%" }}>
        <AppBar position="static" color="primary" style={{ borderRadius: "8px" }}>
          <Toolbar>
            <Typography variant="h6">VOX Gauge - Call Center Analytics</Typography>
          </Toolbar>
        </AppBar>
        <div style={{ display: "flex", gap: "10px", margin: "20px 0" }}>
          <TextField
            label="Search by Owner"
            fullWidth
            variant="outlined"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            displayEmpty
            variant="outlined"
            style={{ minWidth: "150px" }}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="Sales">Sales</MenuItem>
            <MenuItem value="Marketing">Marketing</MenuItem>
          </Select>
        </div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>ID</strong></TableCell>
              <TableCell><strong>Owner</strong></TableCell>
              <TableCell><strong>Talk Ratio</strong></TableCell>
              <TableCell><strong>Type</strong></TableCell>
              <TableCell><strong>Action</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredConversations.map((conv) => (
              <TableRow key={conv.id} hover>
                <TableCell>{conv.id}</TableCell>
                <TableCell>{conv.owner}</TableCell>
                <TableCell>
                  <CircularProgress variant="determinate" value={conv.talkRatio} /> {conv.talkRatio}%
                </TableCell>
                <TableCell>
                  {conv.tags.map((tag) => (
                    <Chip
                      key={tag}
                      label={tag}
                      color={tag === "Sales" ? "primary" : "secondary"}
                    />
                  ))}
                </TableCell>
                <TableCell>
                  <Button variant="contained" color="primary" onClick={() => handleViewClick(conv)}>
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Dialog for Viewing Details */}
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Conversation Details</DialogTitle>
          <DialogContent>
            {selectedConversation && (
              <>
                <Typography><strong>ID:</strong> {selectedConversation.id}</Typography>
                <Typography><strong>Owner:</strong> {selectedConversation.owner}</Typography>
                <Typography><strong>Duration:</strong> {selectedConversation.duration}</Typography>
                <Typography><strong>Talk Ratio:</strong> {selectedConversation.talkRatio}%</Typography>
                <Typography><strong>Summary:</strong> {selectedConversation.summary}</Typography>
              </>
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">Close</Button>
          </DialogActions>
        </Dialog>
      </Paper>
    </Container>
  );
};

export default App;
