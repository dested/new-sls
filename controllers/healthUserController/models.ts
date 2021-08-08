import {Type} from '@sinclair/typebox';

export const AbcRequest = Type.Object({
  id: Type.String(),
  name: Type.String(),
  timestamp: Type.Integer(),
});

export const AbcResponse = Type.Object({
  id: Type.String(),
  name: Type.String(),
  timestamp: Type.Integer(),
});
export const Abc2Request = Type.Object({
  id2: Type.String(),
  name2: Type.String(),
  timestamp2: Type.Integer(),
});
export const Abc2Response = Type.Object({
  id2: Type.String(),
  name2: Type.String(),
  timestamp2: Type.Integer(),
});
