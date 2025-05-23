const a = document.getElementById('input1');
const b = document.getElementById('div1');
const c = document.getElementById('p1');
const d = document.getElementById('button1');

const getValue = () => {
  console.log(a.value.length);
};

const onClick = () => {
  console.log('버튼1 동작');
};

a.addEventListener('keyup', getValue);
b.innerHTML = '안녕!';

d.addEventListener('click', onClick);

// // 얼럿은 확인만 나옴. 안내문구
// alert('이건 얼럿이야');
// // 컨펌은 확인, 취소가 있다. true, false 값이 있다. if문 적기 좋다.
// const isOk = confirm('이건 컨펌이야');
// console.log(isOk);
// // 프롬프트. 입력값을 받을 때 사용
// const txt = prompt('이건 프롬프트야');
// console.log(txt);
