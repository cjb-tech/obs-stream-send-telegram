import YAML from 'yaml'
import fs from 'fs'


(async function() {
    
    
    const file = fs.readFileSync("./config.yml", 'utf8')
    const res = YAML.parse(file);
    console.log(res);
    
})();