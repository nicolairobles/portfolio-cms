'use strict';

/* Controllers */

  // bootstrap controller
  app.controller('AccordionDemoCtrl', ['$scope', function($scope) {
    $scope.oneAtATime = true;

    $scope.groups = [
      {
        title: 'Accordion group header - #1',
        content: 'Dynamic group body - #1'
      },
      {
        title: 'Accordion group header - #2',
        content: 'Dynamic group body - #2'
      }
    ];

    $scope.items = ['Item 1', 'Item 2', 'Item 3'];

    $scope.addItem = function() {
      var newItemNo = $scope.items.length + 1;
      $scope.items.push('Item ' + newItemNo);
    };

    $scope.open = function() {
      var newItemNo = $scope.items.length + 1;
      $scope.items.push('Item ' + newItemNo);
    };

    $scope.status = {
      isFirstOpen: true,
      isFirstDisabled: false
    };
  }])
  ; 

  app.controller('AlertDemoCtrl', ['$scope', function($scope) {
    $scope.alerts = [
      { type: 'success', msg: 'Well done! You successfully read this important alert message.' },
      { type: 'info', msg: 'Heads up! This alert needs your attention, but it is not super important.' },
      { type: 'warning', msg: 'Warning! Best check yo self, you are not looking too good...' }
    ];

    $scope.addAlert = function() {
      $scope.alerts.push({type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.'});
    };

    $scope.closeAlert = function(index) {
      $scope.alerts.splice(index, 1);
    };
  }])
  ; 
  app.controller('ButtonsDemoCtrl', ['$scope', function($scope) {
    $scope.singleModel = 1;

    $scope.radioModel = 'Middle';

    $scope.checkModel = {
      left: false,
      middle: true,
      right: false
    };
  }])
  ; 
  app.controller('CarouselDemoCtrl', ['$scope', function($scope) {
    $scope.myInterval = 5000;
    var slides = $scope.slides = [];
    $scope.addSlide = function() {
      slides.push({
        image: 'img/c' + slides.length + '.jpg',
        text: ['Carousel text #0','Carousel text #1','Carousel text #2','Carousel text #3'][slides.length % 4]
      });
    };
    for (var i=0; i<4; i++) {
      $scope.addSlide();
    }
  }])
  ; 
  app.controller('PlatformsCarouselCtrl', ['$scope', function($scope) {
    // $scope.myInterval = 5000;
    var slides = $scope.slides = [
      // slide 1
       {title: 'TELEVISION', 
        content: ["Examples: Live television, digital video recorder (DVR), video on demand (VOD)",
        "In its most basic form, television is a mechanical device that projects video programming. You know, the big box in your living room (or your parents’ living room). Live TV programs are distributed and viewed here from a mix of parties that we’ll talk about in TV 101.",
        "A DVR is a device used to record, save and playback linear TV programs at a later date and time.",
        "VOD is video content that you select to be watched via a menu of content on either digital or traditional platforms and is not necessarily linked to a particular device."],
        img: 'media-is.svg' },
        // slide 2
        {title: 'CONNECTED DEVICES', 
        content: ["Examples: Roku, Apple TV, Chromecast; Gaming: PlayStation, Xbox; Audio: Sonos",
        "Connected devices transfer content (video, audio) from the internet to a secondary device, such as a TV. For example, some consumers use connected devices to stream programming from their smartphones to a larger, second screen."],
        img: 'media-is.svg' },
        // slide 3
        {title: 'DIGITAL DEVICES', 
        content: ["Examples: Computers, Smartphones, Tablets",
        "Digital devices contain, transmit and store content (video, audio, text). They are often used to send and/or receive information while on-the-go, making it convenient to consume content anywhere. There are three primary devices: computer, smartphones and tablets. These are the three components of digital measurement.",
        "Digital = computer and mobile",
        "Computers types: desktop and laptop", "Mobile includes smartphone and tablet"],
        img: 'media-is.svg' },
        // slide 4
        {title: 'AUDIO', 
        content: ["Examples: Terrestrial Radio, Digital Audio",
        "Audio is consumed by two primary means: terrestrial radio or digital devices. Traditional terrestrial radio is consumed live—whether in a car or on a home stereo. Programming is transmitted in the form of radio waves to a device equipped to receive them. On the other hand, digital radio is transmitted via digital devices and on-demand content—whether in-app or online. Consumers listen to live or on-demand digital audio content through these devices."],
        img: 'media-is.svg' }
    ];

    console.log(slides[0].title)


    // $scope.addSlide = function() {
    //   slides.push({
    //     image: 'img/c' + slides.length + '.jpg',
    //     text: ['Carousel text #0','Carousel text #1','Carousel text #2','Carousel text #3'][slides.length % 4]
    //   });
    // };

    // for (var i=0; i<4; i++) {
    //   $scope.addSlide();
    // }

  }])
  ; 
  app.controller('DropdownDemoCtrl', ['$scope', function($scope) {
    $scope.items = [
      'The first choice!',
      'And another choice for you.',
      'but wait! A third!'
    ];

    $scope.status = {
      isopen: false
    };

    $scope.toggled = function(open) {
      //console.log('Dropdown is now: ', open);
    };

    $scope.toggleDropdown = function($event) {
      $event.preventDefault();
      $event.stopPropagation();
      $scope.status.isopen = !$scope.status.isopen;
    };
  }])
  ; 
  app.controller('ModalInstanceCtrl', ['$scope', '$modalInstance', 'items', function($scope, $modalInstance, items) {
    $scope.items = items;
    $scope.selected = {
      item: $scope.items[0]
    };

    $scope.ok = function () {
      $modalInstance.close($scope.selected.item);
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  }])
  ; 
  app.controller('ModalDemoCtrl', ['$scope', '$modal', '$log', function($scope, $modal, $log) {
    $scope.items = ['item1', 'item2', 'item3'];
    $scope.open = function (size) {
      var modalInstance = $modal.open({
        templateUrl: 'myModalContent.html',
        controller: 'ModalInstanceCtrl',
        size: size,
        resolve: {
          items: function () {
            return $scope.items;
          }
        }
      });

      modalInstance.result.then(function (selectedItem) {
        $scope.selected = selectedItem;
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };
  }])
  ; 


  app.controller('PaginationDemoCtrl', ['$scope', '$log', function($scope, $log) {
    $scope.totalItems = 64;
    $scope.currentPage = 4;

    $scope.setPage = function (pageNo) {
      $scope.currentPage = pageNo;
    };

    $scope.pageChanged = function() {
      $log.info('Page changed to: ' + $scope.currentPage);
    };

    $scope.maxSize = 5;
    $scope.bigTotalItems = 175;
    $scope.bigCurrentPage = 1;
  }])
  ; 
  app.controller('PopoverDemoCtrl', ['$scope', function($scope) {
    $scope.dynamicPopover = 'Hello, World!';
    $scope.dynamicPopoverTitle = 'Title';
  }])
  ; 
  app.controller('ProgressDemoCtrl', ['$scope', function($scope) {
    $scope.max = 200;

    $scope.random = function() {
      var value = Math.floor((Math.random() * 100) + 1);
      var type;

      if (value < 25) {
        type = 'success';
      } else if (value < 50) {
        type = 'info';
      } else if (value < 75) {
        type = 'warning';
      } else {
        type = 'danger';
      }

      $scope.showWarning = (type === 'danger' || type === 'warning');

      $scope.dynamic = value;
      $scope.type = type;
    };
    $scope.random();

    $scope.randomStacked = function() {
      $scope.stacked = [];
      var types = ['success', 'info', 'warning', 'danger'];

      for (var i = 0, n = Math.floor((Math.random() * 4) + 1); i < n; i++) {
          var index = Math.floor((Math.random() * 4));
          $scope.stacked.push({
            value: Math.floor((Math.random() * 30) + 1),
            type: types[index]
          });
      }
    };
    $scope.randomStacked();
  }])
  ; 
  app.controller('TabsDemoCtrl', ['$scope', function($scope) {
    $scope.tabs = [
      { title:'Dynamic Title 1', content:'Dynamic content 1' },
      { title:'Dynamic Title 2', content:'Dynamic content 2', disabled: true }
    ];
  }])
  ; 
  app.controller('PlatformsTabsCtrl', ['$scope', function($scope) {
    // $scope.tabs = [
    //   { title:'Dynamic Title 1', content:'Dynamic content 1' },
    //   { title:'Dynamic Title 2', content:'Dynamic content 2', disabled: true }
    // ];

    var tabs = $scope.tabs = [
      // slide 1
       {title: 'TELEVISION', 
        content: ["Examples: Live Television, Digital Video Recorder (DVR), Video on Demand (VOD)",
        "In its most basic form, television is a mechanical device that projects video programming. You know, the big box in your living room (or your parents’ living room). Live TV programs are distributed and viewed here from a mix of parties that we’ll talk about in TV 101.",
        "A Digital Video Recorder (DVR) is a device used to record, save and playback linear TV programs at a later date and time.",
        "Video On Demand is video content that you select to be watched via a menu of content on either digital or traditional platforms and is not necessarily linked to a particular device."],
        img: 'television-icon.svg' },
        // slide 2
        {title: 'CONNECTED DEVICES', 
        content: ["Examples: Roku, Apple TV, Chromecast; Gaming: PlayStation, Xbox; Audio: Sonos",
        "Connected devices transfer content (video, audio) from the internet to a secondary device, such as a TV. For example, some consumers use connected devices to stream programming from their smartphones to a larger, second screen."],
        img: 'connected-devices-icon.svg' },
        // slide 3
        {title: 'DIGITAL DEVICES', 
        content: ["Examples: Computers, Smartphones, Tablets",
        "Digital devices contain, transmit and store content (video, audio, text). They are often used to send and/or receive information while on-the-go, making it convenient to consume content anywhere. There are three primary devices: computer, smartphones and tablets. These are the three components of digital measurement.",
        "Digital = computer and mobile",
        "Computers types: desktop and laptop", "Mobile includes smartphone and tablet"],
        img: 'digital-icon.svg' },
        // slide 4
        {title: 'AUDIO', 
        content: ["Examples: Terrestrial Radio, Digital Audio",
        "Audio is consumed by two primary means: terrestrial radio or digital devices. Traditional terrestrial radio is consumed live—whether in a car or on a home stereo. Programming is transmitted in the form of radio waves to a device equipped to receive them. On the other hand, digital radio is transmitted via digital devices and on-demand content—whether in-app or online. Consumers listen to live or on-demand digital audio content through these devices."],
        img: 'audio-headphones-icon.svg' }
    ];
  }])
  ; 


  app.controller('TVPanelsOverviewTabsCtrl', ['$scope', function($scope) {

    var tabs = $scope.tabs = [
      // tab 1
       {title: 'PEOPLE METER', 
        content: [
          {type:"", "value":"A meter that is connected to a panelist’s television that measures all video content playing on the screen. In the U.S., people meters are used for all national TV measurement and for local TV measurement in 25 markets (or DMAs)."}],
        img: 'people-meter-icon.svg' },
        // tab 2
        {title: 'SET METER', 
        content: [{type:"", "value": "A meter that is connected to a panelist’s television that measures all video content playing on the screen. In the U.S., set meters are used for national TV measurement and for local TV measurement in 31 markets."}],
        img: 'set-meter-icon.svg' },
        // tab 3
        {title: 'CODE READER', 
        content: [{type: "", "value": "A meter that sits near a panelist’s television that measures all video content playing on the screen. In the U.S., code readers are used for local TV measurement in 14 markets."}],
        img: 'code-reader-icon.svg' },
        // tab 4
        {title: 'DIARY', 
        content: [
          {type: "", "value": "A paper booklet sent out to a sample of households whose members document the programs they’ve tuned into in the past month. Panelists then mail these back to Nielsen. In the U.S., diaries are used for local TV measurement in the markets where other meters and readers are not used. As of mid-2017, Nielsen will no longer use diaries for local TV audience measurement. Nielsen will continue using diaries for audio audience measurement."}],
        img: 'diary-icon.svg' }
    ];

  }])
  ; 


  app.controller('TVPanelsMethodsTabsCtrl', ['$scope', function($scope) {

    var tabs = $scope.tabs = [
      // tab 1
       {title: 'PEOPLE METER', 
        content: ["Panelists are prompted and use a remote to log in via the meter each time they watch television. If a visitor comes to the home, the visitor logs in with his/her demographic information, too."],
        img: 'people-meter-icon.svg' },
        // tab 2
        {title: 'SET METER', 
        content: ["Set meters collect tuning information from all sets in the panelist household. Nielsen applies a statistical model to estimate which members of the household are viewing based on known data from similar households in People Meter homes (the ones where people log in, so we know for sure who is watching).", "In Set Meter homes, Nielsen knows the make-up of who lives in the household (e.g., one male age 25, one child age 8), where the household is located (e.g., New York City), how many TV sets are in the household and where (e.g., there is one TV in the living room and one TV in the bedroom) and what was being watched on a certain TV set in the home and when (e.g., Program X was watched in the living room at 8 p.m. on Tuesday night).", "The same information is known about People Meter homes along with a key piece—which panelist(s) was/were viewing because the panelist logged in to watch.", "Nielsen data scientists assign which members of Set Meter households are likely to be watching in these homes. This statistical model uses information collected from similar People Meter homes. The model takes many different factors into account such as the demographic characteristics of the people who live in the home, their dominant language, the time of day and the type of program being viewed."],
        img: 'set-meter-icon.svg' },
        // tab 3
        {title: 'CODE READER', 
        content: ["Code Readers collect tuning information from all sets in the panel household. Nielsen applies the same process described for Set Meter homes—a statistical model—to determine who is viewing in these homes based on known data from similar households in People Meter homes."],
        img: 'code-reader-icon.svg' },
        // tab 4
        {title: 'DIARY', 
        content: ["Panelists note their viewing and their demographic information in the diary."],
        img: 'diary-icon.svg' }
    ];

  }])
  ; 


  app.controller('TVPanelsPanelsTabsCtrl', ['$scope', function($scope) {

    var tabs = $scope.tabs = [
      // tab 1
       {title: 'National People Meter Panel', 
        content:[
          {type:"sub-sub-header", "value":"Where is this used?"},
          {type:"answer", "value":"All markets in the U.S." },
          {type:"sub-sub-header", "value":"How do we know what is being watched?"},
          {type:"answer", "value":"People Meter"},
          {type:"sub-sub-header", "value":"How do we know who is watching?" },
          {type:"answer", "value":"Panelist logs in"}
        ],
        img: 'national-people-meter-panel-icon.svg' },
        // tab 2
        {title: 'Local People Meter Panel', 
        content: [
          {type:"sub-sub-header", "value":"Where is this used?"},
          {type:"answer", "value":"The top 25 of the total 210 local markets" },
          {type:"sub-sub-header", "value":"How do we know what is being watched?"},
          {type:"answer", "value":"People Meter"},
          {type:"sub-sub-header", "value":"How do we know who is watching?" },
          {type:"answer", "value":"Panelist logs in"}
        ],
        img: 'local-people-meter-panel-icon.svg' },
        // tab 3
        {title: 'Local Set Meter/Code Reader Panel', 
        content: [
          {type:"sub-sub-header", "value":"Where is this used?"},
          {type:"answer", "value":"The next 45 markets of the total 210 local markets comprise 31 set meter markets and 14 code reader markets" },
          {type:"sub-sub-header", "value":"How do we know what is being watched?"},
          {type:"answer", "value":"Set Meter or Code Reader"},
          {type:"sub-sub-header", "value":"How do we know who is watching?" },
          {type:"answer", "value":"Statistical method (aka viewer assignment method)"}
        ],

        img: 'local-set-meter-and-code-reader-panel-icon.svg' },
        // tab 4
        {title: 'Local Diary Panel', 
        content: [
          {type:"sub-sub-header", "value":"Where is this used?"},
          {type:"answer", "value":"The remaining local markets not measured by the panels above" },
          {type:"sub-sub-header", "value":"How do we know what is being watched?"},
          {type:"answer", "value":"Diary"},
          {type:"sub-sub-header", "value":"How do we know who is watching?" },
          {type:"answer", "value":"Panelist information noted in diary"}
        ],
        img: 'local-diary-panel-icon.svg' }
    ];

  }])
  ; 


  app.controller('DigitalPanelsOverviewTabsCtrl', ['$scope', function($scope) {

    var tabs = $scope.tabs = [
      // tab 1
       {title: 'Online Meter', 
        content: ["A meter that is connected to a panelist’s computer and measures all content that plays on the screen."],
        img: 'online-meter-icon.svg' },
        // tab 2
        {title: 'Mobile Meter', 
        content: ["A meter that is downloaded to a panelist’s mobile phone and measures all activity on the device."],
        img: 'mobile-meter-icon.svg' }
    ];

  }])
  ; 

  app.controller('DigitalPanelsMethodsTabsCtrl', ['$scope', function($scope) {

    var tabs = $scope.tabs = [
      // tab 1
       {title: 'Online Meter', 
        content: ["Panelists are prompted and log in each time they use their computers."],
        img: 'online-meter-icon.svg' },
        // tab 2
        {title: 'Mobile Meter', 
        content: ["Assumes the registered panelist is the sole user, so all activity is attributed to the known panelist."],
        img: 'mobile-meter-icon.svg' }
    ];

  }])
  ; 

  app.controller('DigitalPanelsPanelsTabsCtrl', ['$scope', function($scope) {

    var tabs = $scope.tabs = [
      // tab 1
       {title: 'Cross-Platform Homes Panel', 
        content: [
          {type:"", "value":"The Cross-Platform homes panel is a subset of the National People Meter Panel, meaning panelists are recruited to be a part of both panels. Along with the People Meter that is installed on a panelist’s TV, an online meter is installed on the panelist’s computer. This allows Nielsen to understand what panelists viewed on TV, what they viewed online, and what they viewed on both platforms. This pivotal information allows Nielsen to de-duplicate audiences, or know how many people say a piece of content or ad on both platforms."},
          {type:"sub-sub-header", "value":"Where is this used?" },
          {type:"answer", "value":"All markets: This panel is a subset of our National People Meter Panel"},
          {type:"sub-sub-header", "value":"How do we know what is being watched?"},
          {type:"answer", "value":"Online Meters are used to measure online activity, while People Meters are used to measure TV activity"},
          {type:"sub-sub-header", "value":"How do we know who is watching?"},
          {type: "answer", "value": "Panelist logs in each time the he/she turns on his/her computer or TV"}
        ],
        img: 'cross-platform-homes-panel.svg' },
        // tab 2
        {title: 'Online Panel', 
        content: [
          {type:"", "value":"Measures online activity on computers"},
          {type:"sub-sub-header", "value":"Where is this used?" },
          {type:"answer", "value":"All markets"},
          {type:"sub-sub-header", "value":"How do we know what is being watched?"},
          {type:"answer", "value":"Online Meter"},
          {type:"sub-sub-header", "value":"How do we know who is watching?"},
          {type: "answer", "value": "Panelist logs in each time he/she turns on his/her computer"}
        ],
        img: 'online-platform-icon.svg' },
        // tab 
        {title: 'Mobile Panel', 
        content: [
          {type:"", "value":"Measures mobile activity on smartphones and tablets"},
          {type:"sub-sub-header", "value":"Where is this used?" },
          {type:"answer", "value":"All markets"},
          {type:"sub-sub-header", "value":"How do we know what is being watched?"},
          {type:"answer", "value":"Mobile Meter"},
          {type:"sub-sub-header", "value":"How do we know who is watching?"},
          {type: "answer", "value": "Assume registered panelists is the sole user"}
        ],
        img: 'mobile-panel-icon.svg' }
    ];



  }])
  ; 

    app.controller('AudioPanelsOverviewTabsCtrl', ['$scope', function($scope) {

    var tabs = $scope.tabs = [
      // tab 1
       {title: 'Portable People Meter', 
        content: ["A meter the size of an old-school beeper or flip-style cellular telephone that a panelists carries with him/her on his/her person at least eight hours of the day. This meter measures programs that the panelist listens to."],
        img: 'portable-people-meter-icon.svg' },
        // tab 2
        {title: 'Diary', 
        content: ["A paper booklet sent out to a sample of households where recipients document any radio stations they’ve tuned into in the past week (and the time and location of listening). Panelists then mail these back to Nielsen."],
        img: 'diary-icon.svg' }
    ];

  }])
  ; 

    app.controller('AudioPanelsMethodsTabsCtrl', ['$scope', function($scope) {

    var tabs = $scope.tabs = [
      // tab 1
       {title: 'Portable People Meter', 
        content: ["Assume registered panelist is the sole user as the meter is a personal device for one panelist. If multiple members of the home are in the audience, their individual meters will detect this and credit will be given to all of the panelists who are listening."],
        img: 'portable-people-meter-icon.svg' },
        // tab 2
        {title: 'Diary', 
        content: ["The diary is a personal instrument given to all members age 12+ in a home. Each of the household members will record their listening."],
        img: 'diary-icon.svg' }
    ];

  }])
  ; 

  app.controller('AudioPanelsPanelsTabsCtrl', ['$scope', function($scope) {

    var tabs = $scope.tabs = [
      // tab 1
       {title: 'Portable People Meter Panel', 
        content: [
          {type:"sub-sub-header", "value":"Where is this used?" },
          {type:"answer", "value":"48 metro areas in the U.S. (similar to the Local TV DMAs)"},
          {type:"sub-sub-header", "value":"How do we know what is being watched?"},
          {type:"answer", "value":"Portable People Meter"},
          {type:"sub-sub-header", "value":"How do we know who is watching?"},
          {type: "answer", "value": "Assume registered panelist is the sole user"}
        ],
        img: 'portable-people-meter-panel-icon.svg' },
        // tab 2
        {title: 'Diary', 
        content: [
          {type:"sub-sub-header", "value":"Where is this used?" },
          {type:"answer", "value":"Smaller, non-PPM metro areas (220+)"},
          {type:"sub-sub-header", "value":"How do we know what is being watched?"},
          {type:"answer", "value":"Diary"},
          {type:"sub-sub-header", "value":"How do we know who is watching?"},
          {type: "answer", "value": "Panelist information noted in diary"}
        ],
        img: 'diary-panel-icon.svg' }
    ];

  }])
  ; 


  app.controller('RatingDemoCtrl', ['$scope', function($scope) {
    $scope.rate = 7;
    $scope.max = 10;
    $scope.isReadonly = false;

    $scope.hoveringOver = function(value) {
      $scope.overStar = value;
      $scope.percent = 100 * (value / $scope.max);
    };
  }])
  ; 
  
  // CUSTOM GAME CONTROLLER
  // app.controller('GameProgressCtrl', ['$scope', function($scope) {
  //   $scope.rate = 7;
  //   $scope.max = 10;
  //   $scope.isReadonly = false;

  //   $scope.hoveringOver = function(value) {
  //     $scope.overStar = value;
  //     $scope.percent = 100 * (value / $scope.max);
  //   };
  // }])
  // ; 
  // END CUSTOM GAME CONTROLLER

  app.controller('TooltipDemoCtrl', ['$scope', function($scope) {
    $scope.dynamicTooltip = 'Hello, World!';
    $scope.dynamicTooltipText = 'dynamic';
    $scope.htmlTooltip = 'I\'ve been made <b>bold</b>!';
  }])
  ; 
  app.controller('TypeaheadDemoCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.selected = undefined;
    $scope.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
    // Any function returning a promise object can be used to load values asynchronously
    $scope.getLocation = function(val) {
      return $http.get('http://maps.googleapis.com/maps/api/geocode/json', {
        params: {
          address: val,
          sensor: false
        }
      }).then(function(res){
        var addresses = [];
        angular.forEach(res.data.results, function(item){
          addresses.push(item.formatted_address);
        });
        return addresses;
      });
    };
  }])
  ; 
  app.controller('DatepickerDemoCtrl', ['$scope', function($scope) {
    $scope.today = function() {
      $scope.dt = new Date();
    };
    $scope.today();

    $scope.clear = function () {
      $scope.dt = null;
    };

    // Disable weekend selection
    $scope.disabled = function(date, mode) {
      return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
    };

    $scope.toggleMin = function() {
      $scope.minDate = $scope.minDate ? null : new Date();
    };
    $scope.toggleMin();

    $scope.open = function($event) {
      $event.preventDefault();
      $event.stopPropagation();

      $scope.opened = true;
    };

    $scope.dateOptions = {
      formatYear: 'yy',
      startingDay: 1,
      class: 'datepicker'
    };

    $scope.initDate = new Date('2016-15-20');
    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];
  }])
  ; 
  app.controller('TimepickerDemoCtrl', ['$scope', function($scope) {
    $scope.mytime = new Date();

    $scope.hstep = 1;
    $scope.mstep = 15;

    $scope.options = {
      hstep: [1, 2, 3],
      mstep: [1, 5, 10, 15, 25, 30]
    };

    $scope.ismeridian = true;
    $scope.toggleMode = function() {
      $scope.ismeridian = ! $scope.ismeridian;
    };

    $scope.update = function() {
      var d = new Date();
      d.setHours( 14 );
      d.setMinutes( 0 );
      $scope.mytime = d;
    };

    $scope.changed = function () {
      //console.log('Time changed to: ' + $scope.mytime);
    };

    $scope.clear = function() {
      $scope.mytime = null;
    };
  }])
  ;
  // Angular UI Drag-Drop Controller
  app.controller('drag_drop', function ($scope) {
      $scope.list1 = ["one", "two", "three"];
      $scope.list2 = ["A", "B", "C"];
      $scope.sortableOptions = {
          connectWith: '.connectedList',
          placeholder: 'placeholder',
          dropOnEmpty: true
      };
  });
  angular.bootstrap(document.getElementById("drag_drop"), ['app']);
  // Angular UI Drag-Drop Controller







  // HOMEPAGE Controllers
  app.controller('HomepageCtrl', ['$scope', function($scope) {

    // variables
    $scope.guest = false;

    $scope.continueAsGuest = function(){
      $scope.guest = !$scope.guest;
      $scope.signup = false;
      $scope.login = false;
      // setTimeout(function(){ 
      //   $('html, body').animate({
      //     scrollTop: $("#homepage-modules-container").offset().top
      //     }, 1000);
      // }, 10);
    };

    $scope.signUp = function(){
      $scope.signup = !$scope.signup;
      $scope.guest = false;
      $scope.login = false;
      setTimeout(function(){ 
        $('html, body').animate({
          scrollTop: $("#signup-container").offset().top
          }, 1000);
      }, 10);
    };

    $scope.logIn = function(){
      $scope.login = !$scope.login;
      $scope.guest = false;
      $scope.signup = false;
      setTimeout(function(){ 
        $('html, body').animate({
          scrollTop: $("#login-container").offset().top
          }, 1000);
      }, 10);
    };

  }])
  ;




    // signin controller
  app.controller('SigninFormController', ['$scope', '$http', '$state', function($scope, $http, $state) {
      $scope.user = {};
      $scope.authError = null;
      $scope.login = function() {
        $scope.authError = null;
        // Try to login
        $http.post('api/login', {email: $scope.user.email, password: $scope.user.password})
        .then(function(response) {
          if ( !response.data.user ) {
            $scope.authError = 'Email or Password not right';
          }else{
            $state.go('app.dashboard-v1');
          }
        }, function(x) {
          $scope.authError = 'Server Error';
        });
      };
    }])
  ;

  // signup controller
  app.controller('SignupFormController', ['$scope', '$http', '$state', function($scope, $http, $state) {
      $scope.user = {};
      $scope.authError = null;
      $scope.signup = function() {
        $scope.authError = null;
        // Try to create
        $http.post('api/signup', {name: $scope.user.name, email: $scope.user.email, password: $scope.user.password})
        .then(function(response) {
          if ( !response.data.user ) {
            $scope.authError = response;
          }else{
            $state.go('app.dashboard-v1');
          }
        }, function(x) {
          $scope.authError = 'Server Error';
        });
      };
    }])
   ;


