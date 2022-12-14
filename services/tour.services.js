const TourSchema = require("../models/Tour.schema");

// Save Data Service
exports.saveTourService = async (reqData) => {
  const data = new TourSchema(reqData);
  const result = await data.save();
  return result;
};

// Get Data Service
exports.getTourService = async (reqData) => {
  // Query Handle
  let filters = { ...reqData };
  const excludeFields = ["sort", "page", "limit", "fields"];
  excludeFields.forEach((filter) => delete filters[filter]);
  const { limit = 3, page = 1, sort, fields } = reqData;
  const queries = {};
  if (sort) {
    const result = sort.split(",").join(" ");
    queries.sortBy = result;
  }
  if (fields) {
    const result = fields.split(",").join(" ");
    queries.fields = result;
  }

  // Operator handle
  let filtersString = JSON.stringify(filters);
  filtersString = filtersString.replace(
    /\b(gt|gte|lt|lte)\b/g,
    (match) => `$${match}`
  );
  filters = JSON.parse(filtersString);

  // Pagination
  const total = await TourSchema.countDocuments(filters);
  const pageCount = Math.ceil(total / limit);

  const result = await TourSchema.find(filters)
    .skip(+(page - 1) * limit)
    .limit(+limit)
    .select(queries.fields)
    .sort(queries.sortBy);
  return { total, pageCount, result };
};

// Get Tour by ID Service
exports.getTourByIdService = async (id) => {
  const result = await TourSchema.findByIdAndUpdate(
    { _id: id },
    { $inc: { view: 1 } }
  );
  return result;
};

// Get Tour by Trending Service
exports.getTourbyTrendsService = async (id) => {
  const result = await TourSchema.find().sort({ view: -1 }).limit(3);
  return result;
};

// Get Tour by Cheapets Service
exports.getTourbycheapestService = async (id) => {
  const result = await TourSchema.find().sort({ price: 1 }).limit(3);
  return result;
};

// Update tour Service
exports.updateTourService = async (id, reqData) => {
  const result = await TourSchema.updateOne(
    { _id: id },
    { $set: reqData },
    { runValidators: true }
  );
  return result;
};
