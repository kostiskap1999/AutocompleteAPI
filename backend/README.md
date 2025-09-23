# Ad Challenge Backend

## Setting up the Database
1. Download and install [MySQL Workbench](https://dev.mysql.com/downloads/workbench/). You can also download it from snap.
2. If it's a first install, you may need to download [MySQL Community Server](https://dev.mysql.com/downloads/mysql/). Place a password you remember if prompted. On linux, it may request for a temporary default password. If it asks for password, go to step 3, else to step 4.
3. To learn the temporary password, run on a bash terminal the following command: `sudo grep 'temporary password' /var/log/mysqld.log`
4. Once installed, open Workbench and navigate to MySQL Connections. Create a new connection named `AdChallenge`. Leave everything as default. Put the password when asked and put the same password in the project's `./backend/.env` in `DB_PASSWORD`.
5. Open the connection and import the database schems. Frpm the top bar select `Server > Data Import`, make sure you choose `Import from Self-Contained File` and choose the file in the project's `./backend/database/schema.sql`.
6. Finally, create a new query and run the following commands.
   * ##### `ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '{DB_PASSWORD}';`
   * ##### `flush privileges;`
This ensures you won't run into an `ER_NOT_SUPPORTED_AUTH_MODE` error after running the backend.


## Setting up the backend

### `npm install`

To install all the dependencies.


## Available Scripts

### `npm start`

Runs the app in development mode. Uses [http://localhost:3001](http://localhost:3001).
