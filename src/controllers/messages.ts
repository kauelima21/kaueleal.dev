import { httpClient } from '../config/httpClient';

export interface Message {
  name: string;
  email: string;
  message: string;
}

export async function sendMessage(data: Message) {
  const response = await httpClient.post('/messages', data);

  return response.data;
}
