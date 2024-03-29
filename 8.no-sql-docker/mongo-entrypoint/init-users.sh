if [ "$MONGO_INITDB_ROOT_USERNAME" ] && [ "$MONGO_INITDB_ROOT_PASSWORD" ]; then
  "${mongo[@]}" "$MONGO_INITDB_DATABASE" <<-EOJS
  db.createUser({
     user: "$MONGO_INITDB_ROOT_USERNAME",
     pwd: "$MONGO_INITDB_ROOT_PASSWORD",
     roles: [{ role: "root", db: "admin" }]
  })
EOJS
fi

echo "======================================================="
echo "Created user '$MONGO_INITDB_ROOT_USERNAME' in database '$MONGO_INITDB_DATABASE'"
echo "======================================================="