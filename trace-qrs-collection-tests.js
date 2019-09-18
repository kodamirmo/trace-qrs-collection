// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by qrs-collection.js.
import { name as packageName } from "meteor/igoandtrace:trace-qrs-collection";

// Write your tests here!
// Here is an example.
Tinytest.add('trace-qrs-collection - example', function (test) {
  test.equal(packageName, "trace-qrs-collection");
});
