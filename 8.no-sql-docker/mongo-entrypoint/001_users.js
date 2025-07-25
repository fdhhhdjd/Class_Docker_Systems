db = db.getSiblingDB("class02");

db.createUser({
  user: "taiuser",
  pwd: "password123",
  roles: [
    { role: "readWrite", db: "class02" }
  ]
});

db.createUser({
    user: "readonlyuser",
    pwd: "readonly123",
    roles: [
      { role: "read", db: "class02" }
    ]
  })

  print('====================== CREATE USER OK FILE 0001 =====================');
