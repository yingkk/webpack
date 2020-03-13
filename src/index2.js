function page2() {
  let element = document.createElement('div');
  element.innerHTML = '我是222文件';
  return element;
}

document.querySelector('.root').appendChild(page2());