
print('===============JAVASCRIPT===============');
db = db.getSiblingDB("class02");

db.students.insertMany([
  { name: "Nguyen Van A", age: 20, major: "Computer Science" },
  { name: "Le Thi B", age: 22, major: "Information Systems" },
  { name: "Tran Van C", age: 21, major: "Data Science" }
]);

print('===============AFTER JS INSERT==========');
