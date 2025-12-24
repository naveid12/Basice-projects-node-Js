import { readFile } from "fs/promises";
import { createServer} from "http";
import path from "path";
const PORT = 3002;
const server = createServer(async(req, res) =>{
    console.log(req.url);
    if(res.method === "GET"){
        if(res.url === "/"){
            try{
                const data = await readFile(path.join("public","index.html"));
                res.writeHead(200, { "Content-Type": "text/html"});
                res.end(data);
            } catch (error) {
                res.writeHead(404, {"Content-Type": "text/html"});
                res.end("404 page not found");
            }
    
        } else if(res.method === "GET"){
          if(res.url === "/style.css"){
            try{
                const data = await readFile(path.join("public","style.css"));
                res.writeHead(200, { "Content-Type": "text/css"});
                res.end(data);
            } catch (error) {
                res.writeHead(404, {"Content-Type": "text/html"});
                res.end("404 page not found");
            }
        } 
    } 
 }

});
server.listen(PORT, () =>{
    console.log(`server runing at http://localhost:${PORT}`);
});