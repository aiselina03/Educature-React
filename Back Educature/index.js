import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose, { Schema } from "mongoose";
const app = express();
app.use(express.json());
app.use(cors());

const eduSchema = new Schema({
  name: String,
  image: String,
  desc: String,
  price: Number,
});
const EduModel = mongoose.model("EduModel", eduSchema);

app.get("/", async (req, res) => {
  try {
    const products = await EduModel.find({});
    res.json(products);
  } catch (error) {
    res.send(error.message);
  }
});
app.get("/:id", async (req, res) => {
  try {
    let { id } = req.params;
    const products = await EduModel.findById(id);
    res.json(products);
  } catch (error) {
    res.send(error.message);
  }
});

app.post("/", async (req, res) => {
  try {
    let { name, desc, image, price } = req.body;
    const newProducts = new EduModel({ name, desc, image, price });
    await newProducts.save();
    res.json(newProducts);
  } catch (error) {
    res.send(error.message);
  }
});

app.put("/:id", async (req, res) => {
    try {
        let { name, desc, image, price } = req.body;
        let { id } = req.params;
        const products = await EduModel.findByIdAndUpdate(id,{ name, desc, image, price });
        res.json(products);
      } catch (error) {
        res.send(error.message);
      }
});

app.delete("/:id", async (req, res) => {
    try {
        let { id } = req.params;
        const products = await EduModel.findByIdAndDelete(id);
        res.json(products);
      } catch (error) {
        res.send(error.message);
      }
});

mongoose
  .connect(process.env.DB_SECRET_KEY)
  .then(() => console.log("Connected!"))
  .catch(() => console.log(" not Connected!"));

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
