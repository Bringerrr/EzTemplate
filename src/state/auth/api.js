import { post, get } from '../../helpers/http';

export const postSignIn = async (data) => post(`/api/v1/token/obtain/`, data);

export const getUser = async (data) => get(`/api/v1/token/obtain/`);
