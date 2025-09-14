const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getPoducts = async (req, res) => {
    const products = await prisma.inventpry.findMany();
    return res.json(products);
}

const createPoducts = async (req, res) => {
    const products = await prisma.inventpry.findMany();

    return res.json(products);
}

const updatePoducts = async (req, res) => {
    const products = await prisma.inventpry.findMany();

    return res.json(products);
}

const deletePoducts = async (req, res) => {
    const products = await prisma.inventpry.findMany();

    return res.json(products);
}

module.exports = {
    getPoducts,
    createPoducts,
    deletePoducts,
    updatePoducts
}