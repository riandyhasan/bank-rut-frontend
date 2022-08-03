import axios from 'axios';
import { CreateTransaction } from '@src/types/transaction';
import API from '@src/utils/api';


export const getAllTransactions = async (authToken: string) => {
  const response = (await axios.get(
    'https://bankrut.herokuapp.com' + API.transaction.allTransactions, {
        headers: {
          'Authorization': `${authToken}` 
      }
    })
  )
  return response;
};

export const getUserTransactions = async (id: number, authToken: string) => {
  const response = (await axios.get(
    'https://bankrut.herokuapp.com' + API.transaction.userTransaction(id), {
        headers: {
          'Authorization': `${authToken}` 
      }
    })
  )
  return response;
};

export const createTransaction = async (payload: CreateTransaction) => {
    const response = (await axios(
      {
        method: 'POST',
        url: 'https://bankrut.herokuapp.com' + API.transaction.create,
        data: payload,
      },
    ))
    return response;
};