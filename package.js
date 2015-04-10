Package.describe({
  summary: "Enables dragging functionality for any element",
  git: "https://github.com/dbernhard/meteor-jquery-ui-draggable.git",
  version: "0.1.0",
  name: "dbernhard:jquery-ui-draggable"
});

Package.on_use(function(api) {
  api.versionsFrom('METEOR@1.1.0.2');
  api.use('jquery', 'client');
  api.add_files(['jquery-ui-draggable.js', 'jquery-ui-draggable.css'], 'client');
});