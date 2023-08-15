import configDevelopment from "./config.development";
import configNotion from "./config.notion";
 
const Config = () => {
  switch(process.env.NEXT_PUBLIC_RUN_MODE) {
    case 'development': return configDevelopment;
    case 'notion': return configNotion;
    default: return configDevelopment;
  }
};
 
export default Config;