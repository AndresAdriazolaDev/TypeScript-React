/*
class MySqlConnection {
  connect() {}
}

class PasswordReminder {
  constructor() {
    this.dbConnection = new MySqlConnection();
  }
} */

class MySqlConnection {
  connect() {}
}

class MongoDBConnection {
  connect() {}
}

class PasswordReminder {
  constructor(dbConnection) {
    this.dbConnection = dbConnection;
  }
}

//esta es la forma de aplicar Dependency inversion principle.
