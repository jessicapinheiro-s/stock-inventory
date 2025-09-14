const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// List all products
const getProducts = async (req, res) => {
  try {
    const products = await prisma.product.findMany();
    console.log(`[GET] ${products.length} products retrieved`);
    res.json(products);
  } catch (error) {
    console.error('[GET] Error fetching products:', error.message);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
};

// Add a new product
const addProduct = async (req, res) => {
  try {
    const { name, quantity, price } = req.body;
    const product = await prisma.product.create({
      data: { name, quantity, price },
    });
    console.log(`[POST] Product created: ${product.name} (ID: ${product.id})`);
    res.status(201).json(product);
  } catch (error) {
    console.error('[POST] Error adding product:', error.message);
    res.status(500).json({ error: 'Failed to add product' });
  }
};

// Update a product
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, quantity, price } = req.body;
    const product = await prisma.product.update({
      where: { id: Number(id) },
      data: { name, quantity, price },
    });
    console.log(`[PUT] Product updated: ID ${id}`);
    res.json(product);
  } catch (error) {
    console.error(`[PUT] Error updating product ID ${req.params.id}:`, error.message);
    res.status(500).json({ error: 'Failed to update product' });
  }
};

// Delete a product
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.product.delete({ where: { id: Number(id) } });
    console.log(`[DELETE] Product deleted: ID ${id}`);
    res.json({ message: 'Product deleted' });
  } catch (error) {
    console.error(`[DELETE] Error deleting product ID ${req.params.id}:`, error.message);
    res.status(500).json({ error: 'Failed to delete product' });
  }
};

module.exports = { getProducts, addProduct, updateProduct, deleteProduct };
