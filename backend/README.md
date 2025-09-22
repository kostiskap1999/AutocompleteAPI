# Grading System Backend

## Setting up the Database
1. Download and install [MySQL Workbench](https://dev.mysql.com/downloads/workbench/). You can also download it from snap.
2. Once installed, open it and navigate to MySQL Connections. Create a new connection named `AdChallenge`. Leave everything as default. If just installed, you will be prompted to put in your root credentials. The credentials may be empty, or on linux it may request for the default password. If it asks for  password, go to step 3, else to step 4.
3. The default password is temporary. To learn it, run on a bash terminal the following command: `sudo grep 'temporary password' /var/log/mysqld.log`
4. During the first login you will be requested to place a new password. For the purposes of this project, the password is included in the .env in DB_PASSWORD.
5. After creating the Connection, navigate to home and then to models, where you can upload the mwb file under the project's `./database` folder.
6. Open the model and from the top bar select `Database > Forward Engineer`. Make sure the selected connection is the one you made earlier. Then hit Next every time until you finish.
7. Open the Connection. Create a new query and paste the inserts from `db.sql` found under the project's `./database` folder.
8. Finally, create a new query and run the following commands.
   * ##### `ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '{DB_PASSWORD}';`
   * ##### `flush privileges;`
This ensures you won't run into an `ER_NOT_SUPPORTED_AUTH_MODE` error after running the backend.


## Setting up the backend

### `npm install`

To install all the dependencies. A few dependencies may or may not get installed automatically, in which case the backend will crash upon launch. If this happens, see the console logs and install them manually for now (this will be fixed in the final version).


## Available Scripts

### `npm start`

Runs the app in development mode for windows. Uses [http://localhost:3001](http://localhost:3001).
