## 1. Select
```
    SELECT 
    sd_product.productId,
    sd_product.product_name,
    sd_product.product_desc,
    sd_product.product_status,
    sd_product.product_attrs,
    sku.sku_no,
    sku.sku_name,
    sku.sku_description,
    sku.sku_stock,
    sku.sku_price,
    sku_attr.sku_attrs,
    sku_specs.sku_specs
FROM 
    sd_product
JOIN 
    sku ON sd_product.productId = sku.id
JOIN 
    sku_attr ON sku.sku_no = sku_attr.sku_no
JOIN 
    sku_specs ON sku.sku_type = sku_specs.id
WHERE 
    sd_product.product_name = 'Quần jean nam';
```