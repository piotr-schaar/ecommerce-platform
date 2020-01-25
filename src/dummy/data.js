import uuid from 'uuid';
import sofa1 from './img/sofa1';
import sofa2 from './img/sofa1';
import table1 from './img/sofa1';
import chair1 from './img/sofa1';
import drawer1 from './img/sofa1';
import bed1 from './img/sofa1';
import accessories1 from './img/sofa1';
import accessories2 from './img/sofa1';

const data = [
  {
    id: uuid(),
    name: 'Sofa Loremowa',
    price: '399',
    image: sofa1,
  },
  {
    id: uuid(),
    name: 'Sofa Hesofajstos',
    price: '499',
    image: sofa2,
  },
  {
    id: uuid(),
    name: 'Stół Stolick',
    price: '129',
    image: table1,
  },
  {
    id: uuid(),
    name: 'Szuflada Shoovlad',
    price: '699',
    image: drawer1,
  },
  {
    id: uuid(),
    name: 'Krzesło Czermen',
    price: '399',
    image: chair1,
  },
  {
    id: uuid(),
    name: 'Łóżko Pierzyn',
    price: '399',
    image: bed1,
  },
  {
    id: uuid(),
    name: 'Akcesorium 1',
    price: '399',
    image: accessories1,
  },
  {
    id: uuid(),
    name: 'Akcesorium 2',
    price: '399',
    image: accessories2,
  },
];
