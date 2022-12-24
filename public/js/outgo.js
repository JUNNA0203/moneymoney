//----------------------------------------------------------------------
//受け取る処理(表示用)
//----------------------------------------------------------------------
window.addEventListener("load",function() {
   const searchParams = new URLSearchParams(window.location.search);
   document.getElementById("year").value = searchParams.get('year');
   document.getElementById("month").value = searchParams.get('month');
   document.getElementById("day").value = searchParams.get('day');

});
//----------------------------------------------------------------------
//登録処理
//----------------------------------------------------------------------


function clickDisplayAlert() {  
   var Goods = document.getElementById("goods").value;
   var Yen = document.getElementById("yen").value;
   var YenYen = Yen.replace(/[,]/g, "");
   var Kosuu = document.getElementById("kosuu").value;
   var year = ( '0000' + document.getElementById("year").value).slice(-4);
   // 桁数を二けたに合わせるために↓の書き方いしている　00の部分は桁数によって変える
   var month = ( '00' + document.getElementById("month").value).slice(-2);
   var day = ( '00' + document.getElementById("day").value).slice(-2);
   var Ymd = year + month + day;
   var Member = document.getElementById("member").value;

   //入力チェック呼び出し
   if (checkData(Ymd, Member, Goods, Yen, Kosuu) == true) {
      alert("登録できませんでした");
      return
   }else {

               //  var tableElem = document.getElementById("hyou");
               //  var trElem = tableElem.tBodies[0].insertRow(-1);
               //  var cellElem1 = trElem.insertCell(0);
               //  var cellElem2 = trElem.insertCell(1);
               //  var cellElem3 = trElem.insertCell(2);
               //  var cellElem4 = trElem.insertCell(3);
               //  var price = 0;
               //  var rowElems = tableElem.rows;
  
               //  cellElem1.appendChild(document.createTextNode(Goods))
               //  cellElem2.appendChild(document.createTextNode(Yen))
               //  cellElem3.appendChild(document.createTextNode(Kosuu))
               //  cellElem4.appendChild(document.createTextNode( Yen * Kosuu))
                touroku(Ymd,Member,Goods,YenYen,Kosuu);
  
                document.getElementById("goods").value = null;
                document.getElementById("yen").value = null; 
                document.getElementById("kosuu").value = null;
  
                for (i = 1, len = rowElems.length -1; i < len; i++) {
                var data = rowElems[i].cells[3].innerText;
                   price +=parseInt(data.replace(/[^0-9]/g, ""));
                } 
                 
                 document.getElementById('goukei').innerText = "-" + price + "円";
                 alert("登録しました");
              }
}
//入力チェック定義
function checkData (A,B,C,D,E) {
   let checkFlug = false;
   if (A == '') {checkFlug = true;}
   if (B == '') {checkFlug = true;}
   // if (C == '') {checkFlug = true;}
   if (D == '') {checkFlug = true;}
   // if (E == '') {checkFlug = true;}
   return checkFlug;
}   

function touroku (A,B,C,D,E){
window.location.href='/touroku?ymd='+ A +'&member='+ B +'&name='+ C +'&yen='+ D + '&kosuu='+ E;
alert(D);

}

//高橋のやつ-----------------
function yenReo(){
   document.getElementById("goods").value = "りんご";
   document.getElementById("yen").value = 150;
   document.getElementById("kosuu").value = 2;
   
}
//---------------------------   
function sanketa() {
   // onniputイベントが発生した時の処理を記述する
   var num = document.getElementById("yen").value.replace(",", "");
   document.getElementById("yen").value = Number(num).toLocaleString();


 };