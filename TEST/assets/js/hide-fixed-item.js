// JavaScript 문제1
// 1)	버튼을 누르면 확인 메시지로 “광고 내용에 대해 만족하십니까?”를 띄우세요. (10점)
// 2)	“확인”을 누를 시 요소가 사라지고, “취소”를 누를 시 요소가 사라지지 않게 하세요. (10점)
window.onload = function () {
const ad = document.getElementById('closeAdButton');
const adItem = document.getElementById('fixedItem');

ad.addEventListener('click',()=>{
  const a = confirm('광고 내용에 대해 만족하십니까?');
        if (a) {
          adItem.style.visibility = 'hidden';
        }else{
          adItem.style.visibility = 'visible';
        }
    });
}