import apiClient from "../../common/services/apiClient";
import conf from "../../conf/conf";

export const projectLoader = async () => {
  try {
    const response = await apiClient.get("/Project/GetProjects", {
      params: { userId: conf.userId },
    });

    return response.data;
  } catch (error) {
    console.error("Project Loader Error:", error);
    throw error;
  }
};
