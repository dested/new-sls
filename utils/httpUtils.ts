import {Static, TObject, TProperties, Type} from '@sinclair/typebox';

export function makeRequest<TRequest extends TObject<TProperties>, TResponse extends TObject<TProperties>>(request: {
  request: TRequest;
  response: TResponse;
  route: string;
  method: 'POST' | 'GET';
  callback: (request: Static<TRequest>) => Promise<Static<TResponse>>;
}): {
  request: TRequest;
  response: TResponse;
  route: string;
  method: 'POST' | 'GET';
  callback: (request: Static<TRequest>) => Promise<Static<TResponse>>;
} {
  return request;
}

export function makeController({name, route}: {name: string; route: string}): {
  name: string;
  route: string;
} {
  return {name, route};
}
