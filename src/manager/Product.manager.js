import fs from "fs";

const fsPromise = fs.promises;

class ProductManager {
  constructor(path) {
    this.path = path;
  }

  async addProduct() {}

  async getProducts() {}

  async getProductById(pid) {}

  async updateProduct(pid) {}

  async deleteProduct(pid) {}
}

export default ProductManager;
