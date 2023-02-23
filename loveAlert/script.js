const buttonNo = document.querySelector('.button-no');

buttonNo.addEventListener('click', () => {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const buttonWidth = buttonNo.offsetWidth;
  const buttonHeight = buttonNo.offsetHeight;
  const newLeft = Math.floor(Math.random() * (screenWidth - buttonWidth));
  const newTop = Math.floor(Math.random() * (screenHeight - buttonHeight));
  buttonNo.style.position = 'absolute';
  buttonNo.style.left = `${newLeft}px`;
  buttonNo.style.top = `${newTop}px`;
});

const buttonYes = document.querySelector('.button-yes');

buttonYes.addEventListener('click', () => {
  document.body.innerHTML = '<div style="font-size: 100px; text-align: center; margin-top: 50vh; ">&hearts;</div>';
});