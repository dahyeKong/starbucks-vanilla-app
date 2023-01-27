const searchEl = document.querySelector('.search'); // document는 html 자체
const searchInputEl = searchEl.querySelector('input'); // 찾아놓은 위치에서 찾도록

searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
   // 특정요소 class 객체에서 클래스 내용을 추가하겠다.
  // 검색 요소 부분에 focused란 클래스를 추가하겠다.
  searchInputEl.setAttribute('placeholder', '통합검색'); // setAttribute(,) -> (속성의 이름, 실제 값)
});

searchInputEl.addEventListener('blur', function () { 
  // blur -> 포커스가 해제될 때
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', ''); 
});