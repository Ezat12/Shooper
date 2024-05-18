
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const jsend = require("jsend");
const multer = require("multer");
const jwt = require("jsonwebtoken");

app.use(express.json());
app.use(cors());

require("dotenv").config();

const url =
  "mongodb+srv://ezatelbery187:007007@e-commerce-back.rxhwnci.mongodb.net/e-commerce";

mongoose.connect(url).then(() => {
  console.log("data base is ready");
});

app.get("/", (req, res) => {
  res.send("Hello Page");
});

const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    const pathType = file.mimetype.split("/")[1];
    return cb(null, `${file.fieldname}_${Date.now()}.${pathType}`);
  },
});

const upload = multer({ storage: storage });
app.use("/images", express.static("upload/images"));

app.post("/upload", upload.single("product"), (req, res) => {
  res.json({ product: `http://localhost:5000/images/${req.file.filename}` });
});

const schemaProduct = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  new_price: {
    type: Number,
    required: true,
  },
  old_price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
  },
  avilable: {
    type: Boolean,
    default: true,
  },
});

const Product = mongoose.model("Product", schemaProduct);

app.post("/addproduct", async (req, res) => {
  const find = await Product.find({});
  console.log(find);
  let theId = 1;

  if (find.length > 0) {
    // console.log("noono");
    // id = theId;
    console.log("yeyeye");
    theId = find.slice(-1)[0].id + 1;
  }
  const { name, category, new_price, old_price, image } = req.body;

  const newProduct = new Product({
    id: theId,
    name,
    category,
    new_price,
    old_price,
    image,
  });

  await newProduct.save();

  res.status(201).json(jsend.success({ product: newProduct }));
});

app.delete("/deleteproduct/:theId", async (req, res) => {
  const id = req.params.theId;

  console.log(id);

  const findProduct = await Product.findOne({ id: id });

  // console.log(deleteProduct);

  if (findProduct) {
    await Product.deleteOne({ id: id });
    return res.status(201).json(jsend.success("success deleted"));
  } else {
    return res.status(400).json(jsend.fail("the id is not provider"));
  }
});

app.get("/allproduct", async (req, res) => {
  const getProduct = await Product.find({}, { __v: false });

  res.status(201).json(jsend.success({ product: getProduct }));
});

const schemaUser = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  cardDatd: {
    type: Array,
  },
  password: {
    type: Number,
    required: true,
  },
});

const User = mongoose.model("Users", schemaUser);

app.post("/signup", async (req, res) => {
  const { email, password, userName } = req.body;
  const check = await User.findOne({ email });
  if (check) {
    return res.status(400).json(jsend.fail("The Email is not provided"));
  }

  const newUser = new User({
    userName,
    email,
    password,
    cardDatd: [],
  });

  await newUser.save();

  const token = jwt.sign(
    { id: newUser._id, email: newUser.email },
    process.env.JWT_SECRT_KEY
  );

  res.status(201).json(jsend.success({ token }));
});

app.post("/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  if (user) {
    const ChechPassword = user.password == req.body.password;

    if (!ChechPassword) {
      return res.status(401).json(jsend.fail("the password is not correct"));
    } else {
      const token = jwt.sign(
        { id: user._id, email: user.email },
        process.env.JWT_SECRT_KEY
      );

      return res.status(201).json(jsend.success({ token }));
    }
  } else {
    return res.status(401).json(jsend.fail("the email is not correct"));
  }
});

const fetchUser = (req, res, next) => {
  const token = req.header("auth-token");
  // req.headers["Authorization"] ||
  // req.headers["authorization"] ||

  if (!token) {
    return res.status(401).json(jsend.fail("fail token"));
  }

  try {
    const theUser = jwt.verify(token, process.env.JWT_SECRT_KEY);
    // console.log(theUser);
    req.user = theUser;
    return next();
  } catch (e) {
    return res.status(401).json("the token is not correct");
  }
};

app.post("/addtocard", fetchUser, async (req, res) => {
  const user = await User.findOne({ _id: req.user.id });

  let found = false;
  for (let i = 0; i < user.cardDatd.length; i++) {
    if (user.cardDatd[i].id == req.body.product.id) {
      user.cardDatd[i].Quantity += 1;
      found = true;
      break;
    }
  }
  if (!found) {
    req.body.product = { ...req.body.product, Quantity: 1 };
    user.cardDatd.push(req.body.product);
  }

  console.log(user.cardDatd);

  await User.findByIdAndUpdate(
    { _id: req.user.id },
    { cardDatd: user.cardDatd }
  );

  res.status(201).json("Success");
});

app.get("/getuserproduct", fetchUser, async (req, res) => {
  const user = await User.findOne({ _id: req.user.id });

  const product = user.cardDatd;

  res.status(201).json(jsend.success(product));
});

app.listen(5000, () => {
  console.log("The Server Listen is Ready");
});
