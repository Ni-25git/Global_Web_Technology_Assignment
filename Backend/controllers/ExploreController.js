const ExploreModel = require("../models/ExploreModel");



exports.getExplore = async (req,res)=>{
    try {
        const explore = await ExploreModel.find();
        if (explore.length === 0) {
            return res.status(404).json({ message: "No Explore found" });
        }
        return res.status(200).json({ explore });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error", error: error.message });
    }
}