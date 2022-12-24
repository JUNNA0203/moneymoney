var year;
var month;
var day;
//----------------------------------------------------------------------
//受け取る処理
//----------------------------------------------------------------------
window.onload = function () {
  //ページ読み込み時にカレンダーから受けとったクエリストリングをselectDayにぶち込む
  const searchParams = new URLSearchParams(window.location.search);
  document.querySelector("#selectDay").innerHTML =
    searchParams.get("year") +
    "年 " +
    searchParams.get("month") +
    "月" +
    searchParams.get("day") +
    "日";
  //ついでに次の画面に渡す年月日をセットする
  year = searchParams.get("year");
  month = searchParams.get("month");
  day = searchParams.get("day");
};
//----------------------------------------------------------------------
//渡す処理
//----------------------------------------------------------------------
function clickOutgo() {
  //次の支出画面に遷移させる処理(クエリパラメータで年月日をセットしてあげる　　?以降)
  window.location.href =
    "./outgo?year=" + year + "&month=" + month + "&day=" + day;
}
