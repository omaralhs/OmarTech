const fs = require("fs");



// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getAll = (req, res) => {
  try {
    const data = fs.readFileSync(
      "D:\\html\\pizza\\backend\\data\\data.json",
      "utf8"
    );
    const jsonData = JSON.parse(data);
    res.send(jsonData);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error });
  }
};


// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public

const getProductById=(req,res)=>{
    try {
        const{id}=req.params
        const data = fs.readFileSync(
            "D:\\html\\pizza\\backend\\data\\data.json",
            "utf8"
          );
          const jsonData = JSON.parse(data);
          const productById=jsonData.find(product=>product.id==id)
          if(productById)
          res.send(productById)
          else
          res.json({"error":"product not found"})
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error });
    }
}

module.exports ={getAll,getProductById} ;
