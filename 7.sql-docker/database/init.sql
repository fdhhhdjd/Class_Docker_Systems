-- create a table
CREATE TABLE test(
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT NOT NULL,
  archived BOOLEAN NOT NULL DEFAULT FALSE
);

-- add test data
INSERT INTO test (name, archived)
  VALUES ('Nguyen Tien Tai', true),
  ('Sieu cap vip 1', false);