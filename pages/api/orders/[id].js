import dbConnect from "../../../utils/dbConnect";
import Order from "../../../models/Order";

const handler = async (req, res) => {
  const {
    method,
    query: { id },
  } = req;

  await dbConnect();

  //Get order by ID
  if (method === "GET") {
    try {
      const order = await Order.findById(id);
      res.status(200).json(order);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  //Update order
  if (method === "PUT") {
    try {
      const order = await Order.findByIdAndUpdate(id, req.body, {
        new: true,
      });

      res.status(200).json(order);
    } catch (err) {
      res.status(500).json(err);
    }
  }
};

export default handler;
