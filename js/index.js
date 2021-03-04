// $(".box").each(function() {
//     var str = $(this).html();
//     var subStr = str.substring(0, 10);
//     $(this).html(subStr + (str.length > 10 ? '...' + "<a href='#' class='active'>查看更多</a>" : ''));
// });
window.onload = function() {
  formatNews()
  carousel()
}
function formatNews() {
  var news = document.getElementsByClassName('news')[0]
  var str = news.textContent
  var substr = str.substring(0, 110)
  if(str.length > 100){
    news.innerHTML = `<p class="news">${substr}...<a href='javascript:void(0)' style='color: red' onclick='openNews()'>[详细]</a></p>`
  }
}
function openNews() {
  console.log(123);
}
function carousel() {
  // clearInterval(timer)
  var car = document.querySelector('.carousel-list')
  var leftNum = 0;
  timer = setInterval(() => {
    if(car.style.left == '-2560px'){
      leftNum = 0
    }
    leftNum -= 640
    car.style.left = leftNum + 'px'    
  },2000)
}
