const express = require("express");
const cors = require("cors");


const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req:any, res: any) => {
  res.send("Hello from Express!");
});

// Topics API
app.get("/api/topics", (req: any, res: any) => {
  res.json([
    { id: "1", title: "Topic 1", parentId: null },
    { id: "2", title: "Topic 2", parentId: null },
  ]);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
