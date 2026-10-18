let person: {firstName: string; lastName?: string; age: number;};
person = {firstName: "AWS", lastName: "太郎", age: 23};

// // objectName.propertyNameによるアクセス
// console.log(`私の名前は${person.firstName} ${person.lastName}です。`);
// // objectName["propertyName"]によるアクセス
// // キー名は二重引用符で囲わなければならない。一重引用符不可。
// console.log(`${person["age"]}歳です`);

// オブジェクトのプロパティを更新する
// person.lastName = "二郎"	// lastNameを更新
// console.log(person);

// オブジェクトのプロパティを削除する
// lastName プロパティの末尾に ? を追加する必要がある。
delete person.lastName; // lastNameを削除
console.log(person); 