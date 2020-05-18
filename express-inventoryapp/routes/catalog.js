var express = require("express");
var router = express.Router();

//requir controller modules
var electronics_controller = require("../controllers/electronicsController");
var instrument_controller = require("../controllers/instrumentController");

/// HOME ROUTE ///

/// ELECTRONICS ROUTES ///

// GET request for creating electronics
router.get(
  "/electronics/create",
  electronics_controller.electronics_create_get
);

// POST request for creating electronics
router.get(
  "/electronics/create",
  electronics_controller.electronics_create_post
);

// GET request for delete electronics
router.get(
  "/electronics/:id/delete",
  electronics_controller.electronics_delete_get
);

// POST request for delete electronics
router.get(
  "/electronics/:id/delete",
  electronics_controller.electronics_delete_post
);

// GET request for updating electronics
router.get(
  "/electronics/:id/update",
  electronics_controller.electronics_update_get
);

// POST request for updating electronics
router.get(
  "/electronics/:id/update",
  electronics_controller.electronics_update_post
);

// GET request for one electronics - detail page
router.get("/electronics/:id", electronics_controller.electronics_detail);

// GET request for list of all electronics
router.get("/electronics", electronics_controller.electronics_list);

/// INSTRUMENT ROUTES ///

// GET request for creating instrument
router.get("/instrument/create", instrument_controller.instrument_create_get);

// POST request for creating instrument
router.get("/instrument/create", instrument_controller.instrument_create_post);

// GET request for delete instrument
router.get(
  "/instrument/:id/delete",
  instrument_controller.instrument_delete_get
);

// POST request for delete instrument
router.get(
  "/instrument/:id/delete",
  instrument_controller.instrument_delete_post
);

// GET request for updating instrument
router.get(
  "/instrument/:id/update",
  instrument_controller.instrument_update_get
);

// POST request for updating instrument
router.get(
  "/instrument/:id/update",
  instrument_controller.instrument_update_post
);

// GET request for one instrument - detail page
router.get("/instrument/:id", instrument_controller.instrument_detail);

// GET request for list of all instrument
router.get("/instrument", instrument_controller.instrument_list);
