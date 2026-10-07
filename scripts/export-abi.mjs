import {readFile,writeFile,mkdir} from "node:fs/promises";
await mkdir("abi",{recursive:true});
for(const name of ["DeadManSwitch","DeadManSwitchFactory"]){const a=JSON.parse(await readFile("out/"+name+".sol/"+name+".json","utf8"));await writeFile("abi/"+name+".json",JSON.stringify(a.abi,null,2)+"\n");}
