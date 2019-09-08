/*anime({
  targets: 'div',
  translateX: 250,
  rotate: '1turn',
  backgroundColor: '#FFF',
  duration: 800
});*/

function handler(e) {
    e = e || window.event;

    var pageX = e.pageX;
    var pageY = e.pageY;

    // IE 8
    if (pageX === undefined) {
        pageX = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        pageY = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }

    console.log(pageX - 8, pageY - 8);
}

// attach handler to the click event of the document
if (document.attachEvent) document.attachEvent('onclick', handler);
else document.addEventListener('click', handler);