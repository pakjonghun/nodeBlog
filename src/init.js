import "dotenv/config";
import server from "./app";
import "./models/userModel";
import "./db";

const port = process.env.PORT || 4000;

server.listen(port, () => console.log(`server is running on ${port}`));
