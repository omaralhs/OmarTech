const { json } = require("body-parser");
const fs = require("fs");



// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getAll = async(req, res) => {
    try {
        const formData=req.body
        const data = fs.readFileSync(
            "D:\\html\\pizza\\backend\\data\\orders.json",
            "utf8"
          );
          const jsonData = JSON.parse(data);
          const array=[jsonData]
          console.log(jsonData);
          array.push(formData)
          const dataToSave=JSON.stringify(formData)
        fs.writeFileSync("D:\\html\\pizza\\backend\\data\\orders.json",dataToSave);
        console.log(jsonData);
        res.send(jsonData)
    } catch (error) {
        console.log(error);
    }
 
  };


  module.exports ={getAll} ;