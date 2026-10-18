// 同じ構造のオブジェクトを作成する
// let staff: { firstName: string; lastName: string }; // オブジェクトの宣言
// staff = { firstName: "AWS", lastName: "太郎" }; // 値の代入

// let boss: { firstName: string; lastName: string }; // オブジェクトの宣言
// boss = { firstName: "Amazon", lastName: "二郎" }; // 値の代入

// console.log(`${staff.firstName} ${staff.lastName}の上司は${boss.firstName} ${boss.lastName}です。`);
//オブジェクトに別のプロパティを追加する場合は、オブジェクトの宣言時に追加する
//プロパティを複数追加したり、変更を複数の変数に対して行う場合、保守性が低い

//型エイリアス
//型の宣言
// type Staff = {
// 	firstName: string;
// 	lastName: string;
// 	jobTitle: string
// };

// const staff: Staff = {firstName: "AWS", lastName: "太郎", jobTitle: "インフラエンジニア"};
// const boss: Staff = {firstName: "Amazon", lastName: "二郎"};

// console.log(`${staff.firstName} ${staff.lastName}の役職は${staff.jobTitle}で、${boss.firstName} ${boss.lastName}です。`)

//　プロパティのオプション
// 型エイリアスで宣言したプロパティの最後に?をつけることで、プロパティをオプションにできる
// type Staff = {
// 	firstName: string;
// 	lastName: string;
// 	jobTitle?: string
// };

// const staff: Staff = {firstName: "AWS", lastName: "太郎", jobTitle: "インフラエンジニア"};
// const boss: Staff = {firstName: "Amazon", lastName: "二郎"};


// console.log(`${staff.firstName} ${staff.lastName}の役職は${staff.jobTitle}で、${boss.firstName} ${boss.lastName}です。`)

//　＜発展＞typeとinterfaceの違い
// interfaceではメソッドが定義できる
// interfaceは継承ができる
// 同名のinterfaceが複数定義された場合、自動的にマージされ、プロパティが結合される
// 同じ名前のtypeを宣言することはできない