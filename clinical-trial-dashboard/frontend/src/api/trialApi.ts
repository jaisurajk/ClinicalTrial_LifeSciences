import axios from 'axios';

export interface Trial {
  id: number;
  name: string;
  phase: string;
  status: string;
  sponsor: string;
}

const API_URL = 'http://localhost:8080/api/trials';

export const getTrials = async (): Promise<Trial[]> => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createTrial = async (trial: Omit<Trial, 'id'>): Promise<Trial> => {
  const response = await axios.post(API_URL, trial);
  return response.data;
};
