const mongoose = require("mongoose");

// Schema Design
const tourSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter tour name"],
      trim: true,
      unique: [true, "Name must be unique"],
      minLength: [3, "Tour name can't be less than 3 characters"],
      maxLength: [100, "Tour name can't exceed 100 characters"],
    },
    description: {
      type: String,
      required: true,
      minLength: [10, "Description can't be less than 10 characters"],
    },
    image: {
      type: String,
      required: true,
      validate: [
        /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/,
        "Please provide a valid image url",
      ],
    },
    price: {
      type: Number,
      required: true,
      min: [0, "Price can't be negative"],
    },
    duration: {
      type: Number,
      required: true,
      min: [1, "Duration can't be less than 1"],
      max: [30, "Duration can't be more than 30"],
    },
    view: {
      type: Number,
      min: [0, "View can't be less than 0"],
    },
    maxPeople: {
      type: Number,
      required: true,
      min: [1, "Max people can't be less than 1"],
    },
    categories: [
      {
        name: {
          type: String,
          required: true,
        },
        _id: mongoose.Schema.Types.ObjectId,
      },
    ],
    status: {
      type: String,
      required: true,
      enum: {
        values: ["available", "unavailable"],
        message: "Status can't be {VALUE}. Either available or unavailable",
      },
    },
  },
  {
    timestamps: true,
  }
);

// Middleware
tourSchema.pre("save", function (next) {
  if (this.price == 0) {
    this.status = "unavailable";
  }
  next();
});
tourSchema.pre("save", function (next) {
  if (this.view == null) {
    this.view = "0";
  }
  next();
});

// Instance Methods
tourSchema.methods.logger = function () {
  console.log(`Data save for ${this.name}`);
};

// Model Create
const Data = mongoose.model("tour", tourSchema);

module.exports = Data;
