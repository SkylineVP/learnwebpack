import _ from 'lodash';
import styles from './style.css';
import Icon from './img.jpeg';
function component() {
    const element = document.createElement('div');


    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add(styles.hello);
    const img=document.createElement("img");
    img.src=Icon;
    element.appendChild(img);
    return element;
}

document.body.appendChild(component());