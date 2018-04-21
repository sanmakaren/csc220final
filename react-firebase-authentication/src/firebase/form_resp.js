import { form_resp } from './firebase';

export const createResponse = (mood, time) =>
  form_resp.push({mood, time});
