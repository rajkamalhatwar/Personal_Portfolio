import apiClient from "../../common/services/apiClient"; 

const getUserById = async (userId) => {
  const response = await apiClient.get(`/UserReg/GetUserById`, {
    params: {
      userId: userId,
    },
  });
  return response.data.getUsersById[0];
}; 
const homeService = { 
  getUserById,
};

export default homeService;
