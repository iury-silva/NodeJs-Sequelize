const Product = require('../models/productsModel');

const create = async (req, res) => {
  const { name, description, price } = req.body;

  const product = await Product.create({ name, description, price });

  return res.status(201).json(product)
};

const getAll = async (_req, res) => {
  const products = await Product.findAll(
    { attributes: { exclude: ['createdAt', 'updatedAt'] } },
  );

  return res.status(200).json(products);
};

const getById = async (req, res) => {
  const { id } = req.params;

  const product = await Product.findByPk(id);

  if (!product) return res.status(404).json({ message: 'Produto não encontrado' });

  return res.status(200).json(product);
};

const update = async (req, res) => {
  const { id } = req.params;
  const { name, description, price, stock } = req.body;
  console.log(stock);
  const product = await Product.update(
    { name, description, price, stock },
    { where: { id } },
  );

  if (!product) return res.status(404).json({ message: 'Produto não encontrado' });

  const updatedProduct = await Product.findByPk(id);

  // console.log(updatedProduct);
  return res.status(200).json(updatedProduct);
};

const remove = async (req, res) => {
  const { id } = req.params;

  const product = await Product.findByPk(id);

  if (!product) return res.status(404).json({ message: 'Produto não encontrado' });

  await Product.destroy({ where: { id } });

  return res.status(200).json({ message: 'Produto excluído com sucesso' });
};

module.exports = { create, getAll, getById, update, remove };