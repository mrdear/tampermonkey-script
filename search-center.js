// ==UserScript==
// @name         搜索结果居中
// @namespace    http://tampermonkey.net/
// @version 1.0
// @description  Center the search results.
// @author       屈定
// @match        https://www.google.com/search*
// @match        https://www.dogedoge.com/result*
// @run-at       document-start
// @grant        none
// ==/UserScript==

function css(cssStyle) {
    var style = document.createElement('style');
    style.innerText = cssStyle;
    document.querySelector('head').appendChild(style);
}

(function () {
    'use strict';
    var href = window.location.host;
    // google
    if (href.indexOf("google") > 0) {
        css(`#searchform .tsf {margin: 0 auto} #main{display:flex;justify-content:center;}`)
        return;
    }
    // dogedoge
    if (href.indexOf("dogedoge")) {
        css(`#header{margin: 0 auto;}.cw{margin: 0 auto;}`)
    }
})();
