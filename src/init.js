import "regenerator-runtime";
// import "dotenv/config";
import server from "./app";
import "./models/userModel";
import "./db";

const port = 5000;

server.listen(port, () => console.log(`server is running on ${port}`));
