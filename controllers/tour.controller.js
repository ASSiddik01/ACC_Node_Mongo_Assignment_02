const {
  getTourService,
  saveTourService,
  updateTourService,
  updateMultipleDataService,
  deleteDataService,
  deleteMultipleDataService,
  getTourByIdService,
  getTourbyTrendsService,
  getTourbycheapestService,
} = require("../services/tour.services");

// Get API
exports.getTours = async (req, res, next) => {
  try {
    const reqData = req.query;
    const result = await getTourService(reqData);

    res.status(200).json({
      success: true,
      message: `Data get successfully`,
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `Data can't get`,
      error: error.message,
    });
  }
};

// Get Tour by ID API
exports.getTourById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await getTourByIdService(id);
    res.status(200).json({
      success: true,
      message: `Data get successfully`,
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `Data get failed`,
      error: error.message,
    });
  }
};

// Get Tour by Trending API
exports.getTourbyTrends = async (req, res, next) => {
  try {
    const result = await getTourbyTrendsService();
    res.status(200).json({
      success: true,
      message: `Data get successfully`,
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `Data get failed`,
      error: error.message,
    });
  }
};

// Get Tour by Cheapets API
exports.getTourbycheapest = async (req, res, next) => {
  try {
    const result = await getTourbycheapestService();
    res.status(200).json({
      success: true,
      message: `Data get successfully`,
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `Data get failed`,
      error: error.message,
    });
  }
};

// Save API
exports.saveTour = async (req, res, next) => {
  try {
    // Save
    const reqData = req.body;
    const result = await saveTourService(reqData);
    result.logger();

    res.status(200).json({
      success: true,
      message: `Data inserted successfully`,
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `Data inserted failed`,
      error: error.message,
    });
  }
};

// Update tour API
exports.updateTour = async (req, res, next) => {
  try {
    const { id } = req.params;
    const reqData = req.body;
    const result = await updateTourService(id, reqData);
    res.status(200).json({
      success: true,
      message: `Data update successfully`,
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `Data update failed`,
      error: error.message,
    });
  }
};

// Update Multiple API
exports.updateMultipleData = async (req, res, next) => {
  try {
    const reqData = req.body;
    const result = await updateMultipleDataService(reqData);
    res.status(200).json({
      success: true,
      message: `Data update successfully`,
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `Data update failed`,
      error: error.message,
    });
  }
};

// Delete API
exports.deleteData = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await deleteDataService(id);
    res.status(200).json({
      success: true,
      message: `Data delete successfully`,
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `Data delete failed`,
      error: error.message,
    });
  }
};

// Delete Multiple API
exports.deleteMultipleData = async (req, res, next) => {
  try {
    const reqData = req.body;
    const result = await deleteMultipleDataService(reqData);
    res.status(200).json({
      success: true,
      message: `Data delete successfully`,
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `Data delete failed`,
      error: error.message,
    });
  }
};
