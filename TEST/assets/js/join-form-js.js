// JavaScript 문제2 이대로 주석처리를 해제하면 에러가 납니다. 코드의 비어있는 부분을 채워넣어 완성하세요.
     
window.onload = function () {
  document.querySelectorAll('required-label').forEach(input => {
        const id = input.id;
        if (label) {
          label.classList.add('required-label');
        }
      });

      const birthInput = document.getElementById('birth');
      const ageDisplay = document.getElementById('ageDisplay');
      // JavaScript 문제3-1: 입력요소의 max 속성값을 오늘 날짜로 지정
      let today = new Date();
      birthInput.max = new Date().toISOString().split("T")[0];

      // JavaScript 문제3-2: 생년월일 → 나이 자동 계산
      birthInput.addEventListener('change', () => {
        const birthDate = new Date(birthInput.value);
        const today = new Date();

        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();

        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
          age--;
        }
        ageDisplay.textContent = `나이: ${age}세`;
        ageDisplay.style.color = '#000';
      });

      // JavaScript 문제4 입력에 따른 자기소개 글자 입력 남은 수 표시
      const ip = document.getElementById('bio');
      const span = document.getElementById('bioCounter');

      ip.addEventListener('keyup', ()=>{

        const mx = 300;
        let howMany = ip.value.length;
        let lastWord = (mx - howMany);
        span.innerHTML = `${lastWord}글자 남음`

      });

      // JavaScript 문제5 폼 제출 시 유효성 검사
      const sbm = document.getElementById('submit');
      // JavaScript 문제5-2 A 관심분야 선택 유효성 검사
      sbm.addEventListener('submit', () => {

        const cb1 = document.getElementById('interest-frontend');
        const cb2 = document.getElementById('interest-backend');
        const cb3 = document.getElementById('interest-data');
        const cb4 = document.getElementById('interest-other');
        const errms = document.getElementById('interestError');

        if(cb1 == null && cb2 == null && cb3 == null && cb4 == null){
          errms.innerHTML = `관심분야를 하나 이상 선택해 주세요.`
        }

      });
      
      // JavaScript 문제5-2 B 비밀번호 유효성 검사

      const pw = document.getElementById('password');
      const errms2 = document.getElementById('passwordError');

      pw.addEventListener('keyup', ()=> {

        if(pw.value.length<8){
          errms2.innerHTML = `비밀번호는 8자 이상이며 숫자를 포함해야 합니다.`
        }else{
          errms2.innerHTML = ``
        }

      });

}
      

