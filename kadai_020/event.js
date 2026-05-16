const pushBtn = document.getElementById('btn');
const newText = document.getElementById('text');

pushBtn.addEventListener('click', () => {
  newText.textContent = 'ボタンをクリックしました';
});
