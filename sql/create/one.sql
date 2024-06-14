SELECT employee_name FROM Employees
WHERE department_id = (
    SELECT department_id
    FROM employees
    ORDER BY salary DESC
    LIMIT 1
);

SELECT
    product_id,
    sale_date,
    sales_amount,
    AVG(sales_amount) OVER (PARTITION BY product_id ORDER BY sale_date ROWS BETWEEN 6 PRECEDING AND CURRENT ROW) AS moving_avg
FROM sales;


SELECT customer_name
FROM Customers c
JOIN Purchases p ON c.customer_id = p.customer_id
GROUP BY c.customer_id, c.customer_name
HAVING COUNT(DISTINCT p.category_id) = (SELECT COUNT(*) FROM Categories);


SELECT product_name
FROM products
GROUP BY product_name
HAVING COUNT(DISTINCT price) > 1;



SELECT MAX(salary) AS second_highest_salary
FROM Employees
WHERE salary < (SELECT MAX(salary) FROM Employees);

CREATE TABLE Sales(
sales_id INT PRIMARY KEY,
customer_id INT,
sales_amount INT
);


SELECT c.customer_id, c.customer_name, COALESCE(SUM(s.sale_amount), 0) AS total_sales
FROM Customers c
LEFT JOIN Sales s ON c.customer_id = s.customer_id
GROUP BY c.customer_id, c.customer_name;


SELECT employee_name
FROM Employees
WHERE manager_id IS NULL;


UPDATE orders
SET order_date = '2023-07-23'
WHERE order_id = 2045;
COMMIT;
