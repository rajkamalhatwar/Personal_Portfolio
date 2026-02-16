import apiClient from "../../common/services/apiClient";
import conf from "../../conf/conf";

export const creativeWorksLoader = async () => {
  try {
    const response = await apiClient.get(
      "/CreativeWorks/GetCreativeWork",
      {
        params: { userId: conf.userId },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Creative Works Loader Error:", error);
    throw error;
  }
};
