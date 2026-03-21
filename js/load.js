const el = document.querySelector('.circle1pa');
const main = document.querySelector('.main');
let now = 0;
el.addEventListener('animationstart', function (){
  now++;
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

function restartAnimation(el) {
  for(let e of el){
    e.classList.remove('active');
    void e.offsetWidth;
    e.classList.add('active');
  }
}
const all = document.querySelectorAll('.active');
