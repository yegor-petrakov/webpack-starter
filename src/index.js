import './index.html';
import './index.scss';
import { sayHello } from './modules/sayHello';
import { me } from './images/me_default.jpg';

sayHello();

const img = new Image();
img.src = me_default;