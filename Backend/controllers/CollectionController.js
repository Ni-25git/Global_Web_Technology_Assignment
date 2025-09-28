const CollectionModel = require("../models/CollectionModel");


exports.getAllCollections = async (req, res) => {
    try {
        const collections = await CollectionModel.find();
        if (collections.length === 0) {
            return res.status(404).json({ message: "No collections found" });
        }
        return res.status(200).json({ collections });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error", error: error.message });
    }
};