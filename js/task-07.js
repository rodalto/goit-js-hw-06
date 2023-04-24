const fontControl = document.getElementById('font-size-control');
const text = document.getElementById('text');

fontControl.addEventListener('input', function() {
  text.style.fontSize = fontControl.value + 'px';
});
