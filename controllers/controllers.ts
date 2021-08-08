import * as HealthUserController1 from './healthUserController';
import * as HealthUserController2 from './healthUserController';
import * as HealthUserController3 from './healthUserController';

const {Controller: healthUserController1, ...healthUserMethods1} = HealthUserController1;
const {Controller: healthUserController2, ...healthUserMethods2} = HealthUserController2;
const {Controller: healthUserController3, ...healthUserMethods3} = HealthUserController3;

export const Controllers = [
  {
    controller: healthUserController1,
    methods: healthUserMethods1,
  },
  {
    controller: healthUserController2,
    methods: healthUserMethods2,
  },
  {
    controller: healthUserController3,
    methods: healthUserMethods3,
  },
];
