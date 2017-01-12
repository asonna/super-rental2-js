# Super-rentals

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)



* $ ember install emberfire - adds emberfire to package.json, firebase to bower.json, and create a new application adapter:
* $ touch rentals.json - in the root directory, add the seed data(databases are always plural)
* import database.json into the firebase database
* access rules in the firebase console and add permission to read and write
* update the model hook in index.js(the route handler) to use the firebase database
* $ ember g component rental-tile - generate a new component
* change index.hbs each loop to use the rental-tile component
* add code to display rental information in rental-tile.hbs
* add code to display or hide images in rental-tile.hbs, add the required code to make it work into rental-tile.js
* add button to destroy rental to dental-tile.hbs, which tells dental-tile.js to send an action up to the template(index.hbs)
* pass the delete/destroy action along from the template(index.hbs) to the route handler(index.js) (add destroyRental="destroyRental" to the component link in index.hbs)
* destroy the record in index.js
* $ ember g component new-rental

* $ ember g component update-rental
  - update rental-tide.hbs
  - load the code in update-rental.hbs to display form content
  - load code in the update-rental.js to bound the action update to the "Save" button.
  update the rental-tile.js file to allow the update change to be passed on
  -
