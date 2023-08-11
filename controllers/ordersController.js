const Orders = require('../models/ordersModel');
const Products = require('../models/productsModel');

const create = async (req, res) => {
  const { total, status, products} = req.body;

  const productDetails = [];
  console.log(products);
  // Para cada ID de produto fornecido, busque os detalhes completos do produto
  for (const productId of products) {
    console.log(productId);
    const product = await Products.findByPk(productId.id, { attributes: { exclude: ['createdAt', 'updatedAt'] } });
    if (product.stock < productId.quantity) return res.status(404).json({ message: 'Não há estoque suficiente para o produto' },
    );
    // Atualize o estoque do produto
    await Products.update(
      { stock: product.stock - productId.quantity },
      { where: { id: productId.id } },
    );

    const newProduct = await Products.findByPk(productId.id, { attributes: { exclude: ['createdAt', 'updatedAt'] } });
    if (product) {
      productDetails.push(newProduct);
    }
  }

  // console.log(productDetails);

  const order = await Orders.create({ total, status, products: productDetails });
  const { createdAt, updatedAt, ...orderWithoutTimestamps } = order.dataValues;

  return res.status(201).json(orderWithoutTimestamps)
  
};

const getAll = async (_req, res) => {
  const orders = await Orders.findAll(
    { attributes: { exclude: ['createdAt', 'updatedAt'] } },
  );

  return res.status(200).json(orders);
};

const getById = async (req, res) => {
  const { id } = req.params;

  const order = await Orders.findByPk(id);

  if (!order) return res.status(404).json({ message: 'Pedido não encontrado' });

  return res.status(200).json(order);
};

const remove = async (req, res) => {
  const { orderId } = req.params;

  const order = await Orders.findByPk(orderId);

  if (!order) return res.status(404).json({ message: 'Pedido não encontrado' });

  await Orders.destroy({ where: { orderId } });

  return res.status(200).json({ message: 'Pedido excluído com sucesso' });
};


module.exports = { create, getAll, getById, remove };