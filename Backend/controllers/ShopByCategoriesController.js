const ShopByCategoriesModel = require("../models/ShopByCategories");


exports.getShopByCategories=async(req,res)=>{
    try {
        const categories = await ShopByCategoriesModel.find();
        if (categories.length === 0) {
            return res.status(404).json({ message: "No categories found" });
        }
        return res.status(200).json({ categories });

    } catch (error) {
        return res.status(500).json({ message: "Internal server error", error: error.message });
    }
};