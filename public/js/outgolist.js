var goukei = 0;
// APIからJSONを取得する
fetch("./1234")
  .then((response) => response.json())
  .then((ABC) => {
    // table要素を生成
    var table = document.createElement("table");

    // ヘッダーを作成
    var tr = document.createElement("tr");
    for (key in ABC[0]) {
      // th要素を生成
      var th = document.createElement("th");
      // th要素内にテキストを追加
      th.textContent = key;
      // th要素をtr要素の子要素に追加
      tr.appendChild(th);
    }
    // tr要素をtable要素の子要素に追加
    table.appendChild(tr);

    // テーブル本体を作成
    for (var i = 0; i < ABC.length; i++) {
      // tr要素を生成
      var tr = document.createElement("tr");
      goukei += parseInt(ABC[i].yen);
      // th・td部分のループ
      for (key in ABC[0]) {
        // td要素を生成
        var td = document.createElement("td");
        // td要素内にテキストを追加
        td.textContent = ABC[i][key];
        // td要素をtr要素の子要素に追加
        tr.appendChild(td);
      }
      // tr要素をtable要素の子要素に追加
      table.appendChild(tr);
    }
    // 生成したtable要素を追加する
    document.getElementById("maintable").appendChild(table);
    alert(goukei);
  });
