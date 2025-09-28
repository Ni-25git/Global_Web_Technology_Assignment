const ChooseUsModel = require("../models/ChooseUsModel");


exports.getChooseUs=async(req,res)=>{
    try {
        const chooseUs = await ChooseUsModel.find();
        if (chooseUs.length === 0) {
            return res.status(404).json({ message: "No Choose Us found" });
        }
        return res.status(200).json({ chooseUs });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error", error: error.message });
    }
};