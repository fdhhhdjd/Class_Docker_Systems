db.createUser({
    user: "how_are_you",
    pwd: "password",
    roles: [
        { role: "readWrite", db: "class_docker" }
    ]
});


print('====================== CREATE USER OK FILE 0001 =====================');
