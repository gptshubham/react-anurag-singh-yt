const root = document.querySelector('section');

const leftBasket = document.querySelector('#left-basket');

const rightBasket = document.querySelector('#right-basket');

root.addEventListener('click', (e) => {
  if (e.target.id === 'right-btn') {
    // console.log(parseInt(rightBasket.innerHTML) + 1);
    const numberOfApplesRight = parseInt(rightBasket.innerHTML);
    if (numberOfApplesRight !== 10) {
      rightBasket.innerHTML = `${numberOfApplesRight + 1} Apples`;

      const numberOfApplesLeft = parseInt(leftBasket.innerHTML);
      leftBasket.innerHTML = `${numberOfApplesLeft - 1} Apples`;
    }
  }
  if (e.target.id === 'left-btn') {
    const numberOfApplesRight = parseInt(rightBasket.innerHTML);
    if (numberOfApplesRight !== 0) {
      // console.log(parseInt(rightBasket.innerHTML) + 1);
      rightBasket.innerHTML = `${numberOfApplesRight - 1} Apples`;

      const numberOfApplesLeft = parseInt(leftBasket.innerHTML);
      leftBasket.innerHTML = `${numberOfApplesLeft + 1} Apples`;
    }
  }
});
