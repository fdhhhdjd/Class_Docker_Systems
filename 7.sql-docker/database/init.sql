-- Creating table sd_product
CREATE TABLE sd_product (
    productId BIGSERIAL PRIMARY KEY,
    product_name VARCHAR(64),
    product_desc VARCHAR(256),
    product_status SMALLINT, -- tinyint typically translates to SMALLINT in PostgreSQL
    product_attrs JSON, -- PostgreSQL supports JSON and JSONB types
    product_shopId BIGINT,
    is_deleted BOOLEAN DEFAULT FALSE, -- BOOLEAN type is used instead of tinyint(1)
    sort INT,
    create_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- Creating table sku
CREATE TABLE sku (
    id SERIAL PRIMARY KEY,
    sku_no VARCHAR(32) UNIQUE,
    sku_name VARCHAR(50),
    sku_description VARCHAR(256),
    sku_type SMALLINT,
    status SMALLINT,
    sort INT,
    sku_stock INT DEFAULT 0,
    sku_price NUMERIC(10, 2), -- DECIMAL translates to NUMERIC in PostgreSQL
    create_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);



-- Creating table sku_attr
CREATE TABLE sku_attr (
    id BIGSERIAL PRIMARY KEY,
    sku_no VARCHAR(32) DEFAULT '',
    sku_stock INT DEFAULT 0,
    sku_price DECIMAL(8,2) DEFAULT NULL,
    sku_attrs JSON DEFAULT NULL,
    create_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- Creating table sku_specs
CREATE TABLE sku_specs (
    id BIGSERIAL PRIMARY KEY,
    sku_specs JSON -- PostgreSQL supports JSON and JSONB types
);


-- Chèn một số sản phẩm vào bảng sd_product
INSERT INTO sd_product (product_name, product_desc, product_status, product_attrs, product_shopId, sort) 
VALUES 
('Áo thun nam', 'Áo thun cotton dành cho nam giới', 1, '{"color": "blue", "size": "M"}', 1, 1),
('Áo sơ mi nữ', 'Áo sơ mi dài tay cho phụ nữ', 1, '{"color": "white", "size": "S"}', 1, 2),
('Quần jean nam', 'Quần jean nam dáng slim fit', 1, '{"color": "black", "size": "L"}', 2, 3);


-- Chèn một số SKU vào bảng sku
INSERT INTO sku (sku_no, sku_name, sku_description, sku_type, status, sort, sku_stock, sku_price) 
VALUES 
('SKU001', 'Áo thun nam size M', 'Áo thun nam cotton size M', 1, 1, 1, 50, 19.99),
('SKU002', 'Áo sơ mi nữ size S', 'Áo sơ mi nữ dài tay size S', 2, 1, 2, 30, 29.99),
('SKU003', 'Quần jean nam size L', 'Quần jean nam dáng slim fit size L', 3, 1, 3, 20, 39.99);


-- Chèn một số thuộc tính SKU vào bảng sku_attr
INSERT INTO sku_attr (sku_no, sku_stock, sku_price, sku_attrs) 
VALUES 
('SKU001', 50, 19.99, '{"color": "blue", "size": "M"}'),
('SKU002', 30, 29.99, '{"color": "white", "size": "S"}'),
('SKU003', 20, 39.99, '{"color": "black", "size": "L"}');


-- Chèn một số thông số SKU vào bảng sku_specs
INSERT INTO sku_specs (sku_specs) 
VALUES 
('{"material": "cotton", "weight": "200g"}'),
('{"material": "silk", "weight": "150g"}'),
('{"material": "denim", "weight": "300g"}');
