const el = document.querySelector('.circle1pa');

el.addEventListener('animationstart', function (){
  console.log('開始');
});

el.addEventListener('animationend', function () {
  console.log('終了');
});
