const pushBtn = document.getElementById('btn');

const newText = 'ボタンをクリックしました'

pushBtn.addEventListener('click', () => {
  document.getElementById('text').textContent = newText;
});