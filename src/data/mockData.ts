import { Conversation } from "../types/conversations";

export const mockConversations: Conversation[] = [
  {
    id: "C001",
    timestamp: "2024-02-05",
    duration: "10m",
    owner: "John Doe",
    talkRatio: 70,
    tags: ["Sales"],
    summary: "Client interested in product."
  },
  {
    id: "C002",
    timestamp: "2024-02-06",
    duration: "15m",
    owner: "Jane Smith",
    talkRatio: 50,
    tags: ["Marketing"],
    summary: "Discussed new marketing campaign."
  },
  {
    id: "C003",
    timestamp: "2024-02-07",
    duration: "20m",
    owner: "Michael Brown",
    talkRatio: 60,
    tags: ["Sales"],
    summary: "Customer requested product demo."
  }
];
