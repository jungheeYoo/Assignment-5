const changeBackgroundColor = document.querySelector('body');

function handleBackgroundColor() {
  const windowWidth = window.innerWidth;
  const big = 'width__big';
  const medium = 'width__medium';
  const small = 'width__small';

  if (windowWidth >= 1200) {
    changeBackgroundColor.classList.add(big);
    changeBackgroundColor.classList.remove(medium);
  } else if (windowWidth >= 800) {
    changeBackgroundColor.classList.add(medium);
    changeBackgroundColor.classList.remove(small);
  } else {
    changeBackgroundColor.classList.add(small);
    changeBackgroundColor.classList.remove(medium);
  }
}

window.addEventListener('resize', handleBackgroundColor);
