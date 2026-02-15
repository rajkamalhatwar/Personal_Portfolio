import homeService from "./HomeServices";
import conf from "../../conf/conf";  

export const homeLoader = async () => { 
  try {
  
    const homeData = await homeService.getUserById(conf.userId);
    console.log("load data",homeData);
    return homeData || [];
  } catch (error) {
    console.error("Loader Error:", error);
    return null;
  }
};
