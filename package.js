Package.describe({
  summary: "Enables dropping functionality for any element",
  git: "https://github.com/drewproud/meteor-jquery-ui-droppable.git",
  version: "0.0.1",
  name: "drewproud:jquery-ui-droppable"
});

Package.on_use(function(api) {
  api.versionsFrom("METEOR@1.1.0.2");
  api.use('jquery', 'client');
  api.add_files(['jquery-ui-droppable.js', 'jquery-ui-droppable.css'], 'client');
});
