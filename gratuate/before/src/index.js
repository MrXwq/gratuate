import _ from 'lodash';
import './style.css';
import Icon from './kanbudong.jpg';

function component() {
  var element = document.createElement('div');
  let app = document.getElementById('app')
  app.innerHTML = '嗷嗷嗷熬奥'
  // Lodash，现在由此脚本导入
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  // 将图像添加到我们现有的 div。
  let myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());