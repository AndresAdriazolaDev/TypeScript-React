class Product {
  getDetails() {
    //getDetails method
  }
  displayInFrontend() {
    //displayInFrontend method
  }
}

class PhysicalProduct extends Product {
  saveToDb() {
    //saveToDb method
  }
  //esta clase hereda los métodos de la clase padre (Products) y además adhiere un nuevo método (saveToDb)
}

class DigitalProduct extends Product {
  //esta clase hereda los métodos de la clase padre (Products)
}

