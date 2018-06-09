function onDOMReady(){
  const theparagraph = document.getElementById('text');

  function onMouseMove(event){
    const top  = theparagraph.getBoundingClientRect().top;
    const left = theparagraph.getBoundingClientRect().left;
    const mouseX = left - event.clientX;
    const mouseY = top - event.clientY;
    const shadow = 'text-shadow: '+mouseX+'px '+mouseY+'px 2px rgba(0,0,0,0.3)';
    theparagraph.setAttribute('style',shadow);
  }
  document.addEventListener('mousemove',onMouseMove);
}
document.addEventListener('DOMContentLoaded', onDOMReady);
