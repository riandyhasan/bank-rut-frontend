import axios from 'axios';
import { UserLogin, UserRegister } from '@src/types/users';
import API from '@src/utils/api';

export const register = async (payload: UserRegister) => {
    const response = (await axios(
      {
        method: 'POST',
        url: 'https://bankrut.herokuapp.com' + API.user.register,
        data: payload,
      },
    ))
    return response.data;
};

export const login = async (payload: UserLogin) => {
  const response = (await axios(
    {
      method: 'POST',
      url: 'https://bankrut.herokuapp.com' + API.user.login,
      data: payload,
    },
  ))
  return response.data;
};

export const getAllUsers = async (authToken: string) => {
  const response = (await axios.get(
    'https://bankrut.herokuapp.com' + API.user.allUsers, {
        headers: {
          'Authorization': `${authToken}` 
      }
    })
  )
  return response;
};

export const getUser = async (id: number, authToken: string) => {
  const response = (await axios.get(
    'https://bankrut.herokuapp.com' + API.user.user(id), {
        headers: {
          'Authorization': `${authToken}` 
      }
    })
  )
  return response;
};

export const verifyUser = async (id: number, authToken: string) => {
  const response = (await axios.put(
    'https://bankrut.herokuapp.com' + API.user.verify(id), {
        headers: {
          'Authorization': `${authToken}` 
      }
    })
  )
  return response;
};