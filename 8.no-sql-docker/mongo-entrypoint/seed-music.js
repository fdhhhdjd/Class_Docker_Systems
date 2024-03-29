print('===============JAVASCRIPT===============');
print('Count of rows in test collection: ' + db.test.count());

db.test.insert({ fullname: 'Nguyen Tien Tai', age: 24 });
db.test.insert({ fullname: 'Dang Thi Ngoc Tuyen', age: 23 });

print('===============AFTER JS INSERT==========');
print('Count of rows in test collection: ' + db.test.count());

alltest = db.test.find();
while (alltest.hasNext()) {
  printjson(alltest.next());
}