// Greeter.js

// var config = require('./config.json');
// module.exports = function() {
//     var greet = document.createElement('div');
//     // greet.textContent = "Hi there and greetings!";
//     greet.textContent = config.greetText;
//     return greet;
// };


//使用ES6的语法，更新Greeter.js并返回一个React组件
import React, {Component} from 'react'
import config from './config.json';
import styles from './Greeter.css';//导入

class Greeter extends Component{
  render() {
    return (
      <div className={styles.root}>//添加类名
        {config.greetReact}
      </div>
    );
  }
}

export default Greeter
