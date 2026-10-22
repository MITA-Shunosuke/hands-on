// 型エイリアスの章にてStaff型を定義し、それを用いて変数を作成した
// 今回はらクラスを用いて実装する

// // Personクラスを定義
// // インスタンス化の際に"Property "" has no initializer..."エラーを避けるため、propertyをオプションにする。
// // 型エイリアスと違い"="がない
// class Person{
// 	firstName?: string;
// 	lastName?: string;
// }

// // Personクラスからオブジェクトを定義
// const taro = new Person();

// // taroオブジェクトが持つプロパティに値を代入
// taro.firstName = "AWS";
// taro.lastName = "太郎";

// console.log(taro.firstName + taro.lastName);

// クラスに関数を持たせる
// class Person {
//   firstName?: string;
//   lastName?: string;

//   constructor(firstName: string, lastName: string) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

// greetメソッドを追加
// thisでプロパティを指すことができる
//   greet() {
//     console.log(`私は${this.firstName} ${this.lastName}です。`);
//   }
// }

// const taro = new Person("AWS", "太郎");
// const jiro = new Person("Amazon", "二郎");

// // greetメソッドを使用
// taro.greet();
// jiro.greet();

// 継承
class Person {
  firstName: string;
  lastName: string;

  constructor(firstName = "AWS", lastName = "太郎") {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greet() {
    console.log(`私は${this.firstName} ${this.lastName}です。`);
  }
}

class Teacher extends Person {
  subject: string;

  constructor(subject: string, firstName = "AWS", lastName = "太郎") {
    super(firstName, lastName);
    this.subject = subject;
  }

  greet() {
    console.log(
      `私は ${this.firstName} ${this.lastName} です。${this.subject} の先生をやっています。`,
    );
  }
}

// subject を Teacher クラスに渡し、オブジェクトを初期化します。
const taro = new Teacher("国語");

taro.greet();
