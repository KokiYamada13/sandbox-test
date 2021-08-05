/**
 * const,letなどの変数宣言
 */
// const val4 = {
//   name: "うふふ",
//   age: 28
// };

// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monky");
// console.log(val5);

// テンプレート
// const name = "うっふ";
// const age = 28;

// const message = `私の名前は${name}、${age}です`;
// console.log(message);

// 従来の関数
// function func1(str) {
//   return str;
// }
// const func1 = function(str) {
//   return str;
// }
// console.log(func1("うふh"));

// const func2 = (str) => {
//   return str;
// };
// console.log(func2("うふふ"));

// 分割代入
// const myProfile = ["uhhu", 34];
// const [name, age] = myProfile;
// デフォルト値
// const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん！`);
// sayHello();

/**
 * スプレッド公文
 */
// const arr1 = [1,2];
// console.log(arr1);
// console.log(...arr1);
// const arr4 = [10, 20];
// const arr5 = [30, 40];
// const arr6 = [...arr4, ...arr5];
// console.log(arr6);

// map
// const nameArr = ["田中", "山田", "ジャケぇ"];
// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);
// nameArr.map((name) => console.log(name));

// filter
// const numArr = [1, 2, 3, 4, 5];
// const xxx = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(xxx);

// const newNameArr = nameArr.map((name) => {
//   if(name === "ジャケぇ")　{
//     return name
//   } else {
//     return `${name}さん`
//   }
// })

/**
 * 参考演算し
 */
// ある条件 ?  true:false
// const val1 = 1 > 0 ? 'trueです'　: 'falseです';
// console.log(val1);
