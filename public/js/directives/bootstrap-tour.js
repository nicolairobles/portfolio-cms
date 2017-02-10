$(document).ready(function(){
   // Instance the tour
    var tour = new Tour({
      debug: true,
      orphan: false,
      delay: false,
      steps: [
      {
        element: ".tldr",
        title: "Title of my step",
        content: "Content of my step"
      }
    ]});

    // Initialize the tour
    tour.init();

    // Start the tour
    // tour.start(true);
    $('.btn-homepage').on('click', function () {
        // Start the tour
        tour.start();
    });

});
   

