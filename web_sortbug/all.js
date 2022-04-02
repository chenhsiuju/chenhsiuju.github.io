const oNumsUl = document.querySelector('.nums'); // ul.nums

// 產生 min 到 max 之間的亂數
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const numArr = [];     // 將隨機數存到陣列numArr (所有比較的其他函式都是用此陣列的資料)
const initNumArr = []; // 原始排序陣列

function init() {
  numArr.splice(0, numArr.length);         // 清空陣列
  initNumArr.splice(0, initNumArr.length); // 清空陣列

  // 產生8個 (i <= 8) 隨機數，並存放到陣列
  for (i = 1; i <= 8; i++) {
    numArr.push(getRandom(1, 100));  // 使用getRandom函式，產生1~100隨機數，並存放到陣列numArr
  };

  let str = '';
  numArr.forEach(function (item) {
    str += `<li>${item}</li>`;
    initNumArr.push(item); // 原始排序陣列
  });
  oNumsUl.innerHTML = str;
};
init(); // 預設載入 + 重設開獎號碼

// 循序查詢，查詢有沒有中獎
function showAns() {
  // oAnsValue = 取得 input.ans 輸入框的值，並轉為數字
  let oAnsValue = Number(document.getElementById('ans').value);
  numStatus = 1;
  if (oAnsValue == null || oAnsValue == '' || oAnsValue == undefined || oAnsValue == 'NaN') {
    alert(`未填寫號碼或填寫錯誤，請輸入1 ~ 100之間的數字。`);
    return;
  } else if (oAnsValue >= 1 && oAnsValue <= 100) {
    numArr.forEach(function (item) {
      let itemValue = Number(item);    // 將item的值轉為數字
      if (itemValue == oAnsValue) {
        numStatus = 0;
        alert(`恭喜你中獎了，號碼是: ${oAnsValue}`);
      };
    });
  } else {
    alert('未填寫號碼或填寫錯誤，請輸入1 ~ 100之間的數字。');
    return;
  }
  if (numStatus == 1) {
    alert('很可惜未中獎，再接再厲！');
  }
};

// 找最小
function findMin() {
  min = 101;
  numArr.forEach(function (item, index) {
    let itemValue = Number(item);    // 將item的值轉為數字
    if (itemValue < min) {
      min = itemValue;
      minPosition = index + 1;
    }
  });
  alert(`最小數字是${min}，位置在第${minPosition}位。`);
};

// 找最大
function findMax() {
  max = 0;
  numArr.forEach(function (item, index) {
    let itemValue = Number(item);    // 將item的值轉為數字
    if (itemValue > max) {
      max = itemValue;
      maxPosition = index + 1;
    }
  });
  alert(`最大數字是${max}，位置在第${maxPosition}位。`);
};

// 打散
function randPos() {
  let str = '';
  numArr.sort(function () {
    return Math.random() > .5 ? -1 : 1;
  });
  numArr.forEach(function (item) {
    str += `<li>${item}</li>`;
  });
  oNumsUl.innerHTML = str;
}

// 原始排序
function initNum() {
  let str = '';
  numArr.splice(0, numArr.length); // 清空numArr陣列

  // 把在initNumArr裡的預設排序陣列放回去numArr
  initNumArr.forEach(function (item) {
    str += `<li>${item}</li>`;
    numArr.push(item);
  });
  oNumsUl.innerHTML = str;
};

// 遞增排序
function sortInc() {
  let str = '';
  numArr.sort(function (a, b) {
    return a - b;
  });
  numArr.forEach(function (item) {
    str += `<li>${item}</li>`;
  });
  oNumsUl.innerHTML = str;
};

// 遞減排序
function sortDec() {
  let str = '';
  numArr.sort(function (a, b) {
    return b - a;
  });
  numArr.forEach(function (item) {
    str += `<li>${item}</li>`;
  });
  oNumsUl.innerHTML = str;
};

// 二元搜尋 (陣列必須是已排序的陣列)
function binarySearch() {
  // 將陣列做排序
  // sortedArray = numArr.sort(function (a, b) {
  //   return a - b;
  // });

  // oAnsValue = 取得 input.ans 輸入框的值，並轉為數字
  oAnsValue = Number(document.getElementById('ans').value);
  numStatus = 1;
  console.log(numArr);

  if (oAnsValue == null || oAnsValue == '' || oAnsValue == undefined || oAnsValue == 'NaN') {
    alert(`未填寫號碼或填寫錯誤，請輸入1 ~ 100之間的數字。`);
    return;
  } else if (oAnsValue >= 1 && oAnsValue <= 100) {
    let [start, end] = [0, numArr.length - 1];

    while (start <= end) {
      const mid = Math.floor((start + end) / 2);

      if (oAnsValue > numArr[mid]) {
        start = mid + 1;
      } else {
        if (oAnsValue < numArr[mid]) {
          end = mid - 1;
        } else {
          numStatus = 0;
          alert(`恭喜你中獎了，號碼是: ${numArr[mid]}`);
          // alert(`恭喜你中獎了，號碼是: ${oAnsValue}`);
          return;
        }
      }
    };
  } else {
    alert('未填寫號碼或填寫錯誤，請輸入1 ~ 100之間的數字。');
    return;
  };
  
  if (numStatus == 1) {
    alert('很可惜未中獎，再接再厲！');
  };
};