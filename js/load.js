const el = document.querySelector('.circle1pa');
let now = 0;
el.addEventListener('animationstart', function (){
  now++;
  const main = document.querySelector('.main');
  main.classList.remove('show');
  main.classList.add('hide');
});

el.addEventListener('animationend', function () {
  now--;
  if(now == 0){
    main.classList.remove('hide');
    main.classList.add('show');
  }
});
