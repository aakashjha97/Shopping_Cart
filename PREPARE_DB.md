```sql
create database shopdb1;
create user shopper1 identified by 'Aakash9@';
use shopdb1;
grant all privileges on shopdb1 to shopper1;
grant all privileges on shopdb1.* to shopper1;
```