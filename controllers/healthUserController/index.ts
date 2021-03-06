import {Abc2Request, Abc2Response, AbcRequest, AbcResponse} from './models';
import {makeController, makeRequest} from '../../utils/httpUtils';

export const Controller = makeController({
  name: 'HealthUserController',
  route: 'health/user',
});

export const doThis = makeRequest({
  request: AbcRequest,
  response: AbcResponse,
  route: '/abc',
  method: 'GET',
  callback: async (request) => {
    console.log(request.name);
    return request;
  },
});

export const doThat = makeRequest({
  request: Abc2Request,
  response: Abc2Response,
  route: '/abc',
  method: 'POST',
  callback: async (request) => {
    console.log(request.name2);
    return request;
  },
});
