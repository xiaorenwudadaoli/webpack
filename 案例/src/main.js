import $ from "jquery";
import './css/index.css'
import "./less/index.less";

import imgObj from './asset/1.gif'
import './asset/fonts/iconfont.css'

$('#myul li:nth-child(odd)').css('color', 'red')
$('#myul li:nth-child(even)').css('color', 'skyblue')

let theImg = document.createElement('img')
theImg.src = imgObj
document.body.appendChild(theImg)

let thei = document.createElement('i')
thei.className = 'iconfont icon-qq'
document.body.appendChild(thei)

const fn = () => { console.log(111); }
console.log(fn);