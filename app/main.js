//main.js
// var greeter = require('./Greeter.js');
// document.getElementById('root').appendChild(greeter());

// 使用ES6的模块定义
import React from 'react';
import {render} from 'react-dom';
import Greeter from './Greeter';

import './main.css';//使用require导入css文件

render(<Greeter />, document.getElementById('root'));
