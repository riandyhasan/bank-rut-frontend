import axios from 'axios';
import { CreateRequest } from '@src/types/request';
import API from '@src/utils/api';


export const getAllRequests = async (authToken: string) => {
  const response = (await axios.get(
    'https://bankrut.herokuapp.com' + API.request.allRequest, {
        headers: {
          'Authorization': `${authToken}` 
      }
    })
  )
  return response;
};

export const getUserRequest = async (id: number, authToken: string) => {
  const response = (await axios.get(
    'https://bankrut.herokuapp.com' + API.request.request(id), {
        headers: {
          'Authorization': `${authToken}` 
      }
    })
  )
  return response;
};

export const createRequest = async (payload: CreateRequest) => {
    const response = (await axios(
      {
        method: 'POST',
        url: 'https://bankrut.herokuapp.com' + API.request.create,
        data: payload,
      },
    ))
    return response;
};


export const approveRequest = async (id: number, authToken: string) => {
  const response = (await axios.put(
    'https://bankrut.herokuapp.com' + API.request.approve(id), {
        headers: {
          'Authorization': `${authToken}` 
      }
    })
  )
  return response;
};

export const declineRequest = async (id: number, authToken: string) => {
  const response = (await axios.put(
    'https://bankrut.herokuapp.com' + API.request.decline(id), {
        headers: {
          'Authorization': `${authToken}` 
      }
    })
  )
  return response;
};