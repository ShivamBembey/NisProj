import Product from "../../../models/Product";
import dbConnect from "../../../utils/dbConnect";

export default async function handler(req, res) {
  const {
    method,
    query: { id },
    cookies,
  } = req;

  const token = cookies.bbtoken;

  await dbConnect();

  //Fecth a Product by ID
  if (method === "GET") {
    try {
      const product = await Product.findById(id);
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  //Update a Product
  if (method === "PUT") {
    if (!token || token !== process.env.token) {
      return res.status(401).json("Not Authenticated!");
    }
    try {
      const product = await Product.findByIdAndUpdate(id, req.body, {
        new: true,
      });

      res.status(200).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  //Delete a Product
  if (method === "DELETE") {
    if (!token || token !== process.env.token) {
      return res.status(401).json("Not authenticated!");
    }
    try {
      await Product.findByIdAndDelete(id);
      res.status(200).json("Product deleted successfully!");
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
