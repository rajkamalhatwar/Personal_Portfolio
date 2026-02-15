import apiClient from "../../common/services/apiClient";
import conf from "../../conf/conf.js";

export const resumeLoader = async () => {
  try {
    const userId = conf.userId;

    const [skillsRes, experienceRes, educationRes] = await Promise.all([
      apiClient.get(`/Education/GetSkills?userId=${userId}`),
      apiClient.get(`/Experiance/GetExperiance?userId=${userId}`),
      apiClient.get(`/Education/GetEducation?userId=${userId}`),
    ]);

    return {
      skills: skillsRes.data,
      experiences: experienceRes.data,
      educations: educationRes.data,
    };
  } catch (error) {
    console.error("Resume Loader Error:", error);
    throw error;
  }
};
