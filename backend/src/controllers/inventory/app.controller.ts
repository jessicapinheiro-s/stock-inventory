import { PrismaClient } from "../../../node_modules/@prisma/client/default"
import type { ReqType } from "../../models/req";

const prisma = new PrismaClient();

// List all products
export const getAllProducts = async (req: ReqType, res: any) => {
  try {
    const products = await prisma.product.findMany();
    console.log(`[GET] ${products.length} products retrieved`);
    res.json(products);
  } catch (error) {
    console.error('[GET] Error fetching products:', (error instanceof Error) ? error.message : error);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
};

// Add a new product
export const addProduct = async (req: ReqType, res: any) => {
  try {
    const { name, quantity, price } = req.body;
    const product = await prisma.product.create({
      data: { name, quantity, price },
    });
    console.log(`[POST] Product created: ${product.name} (ID: ${product.id})`);
    res.status(201).json(product);
  } catch (error) {
    console.error('[POST] Error adding product:', (error instanceof Error) ? error.message : error);
    res.status(500).json({ error: 'Failed to add product' });
  }
};

// Update a product
export const updateProduct = async (req: ReqType, res: any) => {
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
    console.error(`[PUT] Error updating product ID ${req.params.id}:`, (error instanceof Error) ? error.message : error);
    res.status(500).json({ error: 'Failed to update product' });
  }
};

// Delete a product
export const deleteProduct = async (req: ReqType, res: any) => {
  try {
    const { id } = req.params;
    await prisma.product.delete({ where: { id: Number(id) } });
    console.log(`[DELETE] Product deleted: ID ${id}`);
    res.json({ message: 'Product deleted' });
  } catch (error) {
    console.error(`[DELETE] Error deleting product ID ${req.params.id}:`, (error instanceof Error) ? error.message : error);
    res.status(500).json({ error: 'Failed to delete product' });
  }
};

