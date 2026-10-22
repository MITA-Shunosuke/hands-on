// 型エイリアスではなく、interface を使って型を定義しています。
interface Profile {
  firstName: string;
  lastName: string;
}

const aws: Profile = { firstName: "AWS", lastName: "太郎" };
const amazon: Profile = { firstName: "Amazon", lastName: "次郎" };

console.log(
  `${aws.firstName} ${aws.lastName} の上司は ${amazon.firstName} ${amazon.lastName} です。`,
);


// インターフェースの良さ
// 同じフィールドやメソッドを持つ