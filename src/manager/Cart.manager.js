import fs from "fs";

const fsPromise = fs.promises;

class CartManager {
  constructor(path) {
    this.path = path;
  }

  async createCart() {}

  async getCartById(cid) {}

  async addProductToCart(cid, pid) {}
}

export default CartManager;
