Package.describe({
  summary: "Enables dragging functionality for any element",
  git: "https://github.com/dbernhard/meteor-jquery-ui-draggable.git"
});

Package.on_use(function(api) {
  api.use('jquery', 'client');
  api.add_files(['jquery-ui-draggable.js', 'jquery-ui-draggable.css'], 'client');
});