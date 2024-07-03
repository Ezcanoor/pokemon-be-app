

## Configuration

Variables for the environment

| Option | Description |
| ------ | ------ |
| SERVER_PORT | Port the server will run on |
| SERVER_JWT | true or false |
| SERVER_JWT_SECRET | JWT secret |
| SERVER_JWT_TIMEOUT | JWT duration time |
| DB_DIALECT | "mysql", "postgresql", among others |
| DB_HOST | Database host |
| DB_USER | Database username |
| DB_PASS | Database password |
| DB_NAME | Database name |


## Commands for sequelize 
```bash
# Creates the database
yarn sequelize db:create 

# Drops the database
yarn sequelize db:drop 

# Load migrations
yarn sequelize db:migrate 

# Undo migrations
yarn sequelize db:migrate:undo:all 

# Load seeders
yarn sequelize db:seed:all

Here is the mini project for pokemon apps. I already prepare the data seed and migration, all you need to do is 
 - create env files based on env.example
 - create database ( sequelize db:create )
 - migrate database ( sequelize db:migrate:all )
 - seed database ( sequelize db:seed:all )
 - dont forget to install all packages and dependencies

for default username and password you can use dangko@mail.com for email and nahasihbeutkitu for password and the jwtsecret is inirahasia, of course you have to run seed command first.
I also attached the postman docs in json format in case you want to try it.
There should be 3 REST API delivered as a backend service:
• REST API to return probability is 50% when catching Pokemon.
• REST API to release pokemon. This API should return a prime number, if the number returned by the API
  is not a prime number, then release will fail and vice versa.
• REST API to rename pokemon. This function should return a combination of first name assigned combined
  with Fibonacci sequence, e.g.:
  • First name assigned is “Mighty Pikachu”, first time renamed should be: “Mighty Pikachu-0”
  • Second time renamed should be: “Mighty Pikachu-1”
  • Third time renamed should be: “Mighty Pikachu-1”
  • Fourth time renamed should be: “Mighty Pikachu-2”, and so on.

```


## License
[MIT](https://choosealicense.com/licenses/mit/)



<h5 align="center">
  ☕ Code and Coffee
</h5>
