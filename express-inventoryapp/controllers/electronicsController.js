var Electronics = require("../models/electronics");

var async = require("async");
const { body, validationResult } = require("express-validator/check");
const { sanitizeBody } = require("express-validator/filter");

//Display list of all electronics
exports.electronics_list = function (req, res, next) {
  Electronics.find()
    .sort([["name", "ascending"]])
    .exec(function (err, results) {
      if (err) {
        return next(err);
      }
      res.render("electronics_list", {
        title: "All Electronics",
        electronics: results,
      });
    });
};

//Display detail page for a specific electronics
exports.electronics_detail = function (req, res, next) {
  Electronics.findById(req.params.id).exec(function (err, results) {
    if (err) {
      return next(err);
    }
    res.render("electronics_detail", {
      title: "Electronics Detail",
      electronics: results,
    });
  });
};

//Display electronics create form on GET
exports.electronics_create_get = function (req, res, next) {
  res.render("electronics_form", { title: "Create Electronics" });
};

//Display electronics create form on POSt
exports.electronics_create_post = [
  //validate form inputs
  body("name", "require name").filter().isString({ min: 1 }),
  body("description", "require description").filter().isString({ min: 1 }),

  //sanitize fields
  sanitizeBody("name").escape(),
  sanitizeBody("description").escape(),

  //process request after validation and sanitization
  (req, res, next) => {
    //obtain errors
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      //errors exist - render based on error and sanitized data
      res.render("electronics_form", {
        title: "Create Electronics",
        electronics: req.body,
        errors: errors.array(),
      });
    } else {
      //create new Electronics object with escaped and trimmed data.
      var electronics = new Electronics({
        name: req.body.name,
        description: req.body.description,
      });
      electronics.save(function (err) {
        if (err) {
          return next(err);
        }
        res.redirect("/catalog/electronics");
      });
    }
  },
];
