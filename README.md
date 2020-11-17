# IT Tshimologong Project


### ***INSTRUCTIONS ON HOW TO RUN THE PROJECT***

**Firstly**

> 1. Please make sure you have latest **`NODEJS`** version is installed on your system(`pc`)

>  2. Please install **`Docker`** on your system terminal

>  3. Install **`postgresql server shell lastest or greater`**

> cd into cloned repo & on `Terminal` run the command:`To see all available scripts`
>
> ```bash
> npm install //then hit enter -->
> npm run //then hit enter, you should see all avail scripts -->
>
> ```
>
>Assuming that the mentioned tools are installed at this point.
 ```js

 npm run watch
 npm run test

 //package.json scripts looks like this:

"watch": "nodemon index", //starts database connection

 "test":"node index" //runs the server class/file/module named index and prints out data on the console!!!!!!!!!!!
 ```

>

***Guide Lines on how to run `Docker` & `postgresql` via `terminal (In interactive mode aka bin/bash)` if the tools are already installed and setup***

***You have to set up database on your local machine follow the bellow commands***

>- Make sure you have Docker installed on your pc

>- Open your teminal/command prompt

***Type the following in your terminal and hit enter/return key in ascending order***
    
>
    > ```bash
    > sudo service docker status
    > 
    > sudo service docker stop
    > ```
>
> ```bash
> sudo service postgresql stop
>
> sudo service postgresql status
> 
>   ```
> 
    > `choose one from options below`
    > ```bash
    > 1. sudo service docker start
    > ```   
> 
    > ```bash
    > 2. sudo service docker restart
    > ```                
>  
    > ```bash
    > 3. sudo service docker force-reload 
    > ```
>
    > `Check if docker server is up and running.`
    > ```bash
    > sudo service docker status
    > ``` 
> Pull docker image of `postgres:alpine` 
>N.B)*`This simply means smaller version of postgres which is the lastest at this time from docker hub.`*
> ```bash
> sudo docker pull postgres:alpine
> ```
>

### ***`or/`***

> ### (Recommemded) `Command`:
> ```bash
> sudo docker run --name projectdb -e POSTGRES_PASSWORD=password -d -p 5432:5432 postgres:alpine
> ```
>  `The above will try to run local image if available if not it will pull it from remote docker hub and create a container named projectdb also make it available locally.`


> **`Executing or running Interactive Docker terminal with the postgres instance or container, open terminal and do the following`**
>
> ```bash
> 
> sudo docker exec -it projectdb bin/bash
>
>```

>**`Example on how to interact or even insert new records in to postgresql`**
>
>
>```bash
>    
> bash-5.0# psql -U postgres  //you will see
>
> psql (12.3)
>Type "help" for help.
>
>``` 
>
> 
>

e.g 

>```bash
> postgres=# \l
>```

In my case i get the following:

>```sql
>                                   List of >databases
>      Name       |  Owner   | Encoding |  >Collate   |   Ctype    |   Access privileges   
>-----------------+----------+----------+------------+------------+-----------------------
> assetpostgresdb | postgres | UTF8     | en_US.utf8 | en_US.utf8 | 
>postgres        | postgres | UTF8     | en_US.utf8 | en_US.utf8 | 
>template0       | postgres | UTF8     | en_US.utf8 | en_US.utf8 | =c/postgres          +
>                 |          |          |            |            | postgres=CTc/postgres
 >template1       | postgres | UTF8     | en_US.utf8 | en_US.utf8 | =c/postgres          +
>                 |          |          |            |            | postgres=CTc/postgres
> (4 rows)
>

>```bash
>postgres=# create database survey;
>CREATE DATABASE
>
>postgres=# \c survey ;
>You are now connected to database "survey" as user "postgres".
>
>survey=# \dt
>Did not find any relations.
>```

The above was before i ran scripts i defined

>```bash
>survey=# \dt
>           List of relations
> Schema |   Name    | Type  |  Owner   
>--------+-----------+-------+----------
> public | elijah    | table | postgres
> public | elijahdb  | table | postgres
> public | undefined | table | postgres
> (3 rows)
>
>``` 
>  
>```sql
>
> survey=# SELECT * FROM elijah;
>
>       `or`
>
> survey=# SELECT * FROM elijahdb;
>
>       `or`
>
> survey=# SELECT * FROM undefined;
>
>id |  surname  | first_name | contact_numbers |        date         | age | favourite_food | indications 
>----+-----------+------------+-----------------+---------------------+-----+----------------+-------------
>  1 | Mothokwa  | Eli        | 662555894       | 2016-03-02 12:05:00 |  25 | stir fries     | {t,f,t,f}
>  2 | Motbhokwa | Elbi       | 6612555894      | 2016-03-02 12:05:00 |  25 | stir fries     | {t,f,t,f}
>
>(2 rows)
>```
> `N.B The table is popullated by the functions i defined in db/postgresqlConnection.js File you can insert or interact with the database from terminal.`
>
>:fireworks: :fireworks: :"):-)




Thanks For looking into this project    
:see_no_evil: :hear_no_evil:

Kind Regards.
Elijah Noko Sepuru :pray:

