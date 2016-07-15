  // ================
  // Helper Methods
  // ================
  
  var sunObj = {
    name: "Sun",
    axisRotation: 24.47,
    radius: 432288
  }
  var mercuryObj = {
    name: "Mercury",
    axisRotation: 59,
    rotationAroundSun: 88,
    radius: 1516
  }
  var venusObj = {
    name: "Venus",
    axisRotation: 243,
    rotationAroundSun: 224.7,
    radius: 3760
  }
  var earthObj = {
    name: "Earth",
    axisRotation: 365.25,
    rotationAroundSun: 365.25,
    radius: 3959
  };
  var marsObj = {
    name: "Mars",
    axisRotation: 1.03009,
    rotationAroundSun: 686.93,
    radius: 2106
  };
  var jupiterObj = {
    name: "Jupiter",
    axisRotation: .33676,
    rotationAroundSun: 4330.6,
    radius: 43441
  }
  var saturnObj = {
    name: "Saturn",
    axisRotation: .44499,
    rotationAroundSun: 10755.7,
    radius: 36184
  }
  var uranusObj = {
    name: "Uranus",
    axisRotation: .72006,
    rotationAroundSun: 30687,
    radius: 15759

  }
  var neptuneObj = {
    name: "Neptune",
    axisRotation: .79805,
    rotationAroundSun: 60190,
    radius: 15299
  }
  var plutoObj = {
    name: "Pluto",
    axisRotation: 6.37605,
    rotationAroundSun: 90520,
    radius: 736.9
  }

  // console.log(sunObj.axisRotation)


  var orbitalScaler = function(distance) {
    return distance / Math.log(50)
  };

  // size of planets using log scale
  var radiusLog = function (radius) {
    return Math.log(radius) / Math.log(10)
  };

  var rotationAroundSunRelativeToEarth = function(earthDays) {
    return 365.25 / earthDays
  };

  var rotationAroundAxisRelativeToEarth = function(earthDays) {
    return 1 / earthDays
  }

  var initialSpeed = 1;
  var speed = function(num) {
    // console.log('test');

    if (num != null) {
      initialSpeed = num;
    }
    // console.log(wee);
    return initialSpeed
  };

  // click handlers
  $(".reset").click(function() {
    // console.log('reset');
    controls.reset();
  });

  $(".half").click(function() {
    // console.log('one clicked')
    speed(.5);
  });

  $(".one").click(function() {
    // console.log('one clicked')
    speed(1);
  });

  $(".two").click(function() {
    // console.log('two clicked')
    speed(2);
  });

  $(".four").click(function() {
    // console.log('four clicked')
    speed(4);
  });

  $(".eight").click(function() {
    // console.log('eight clicked')
    speed(8);
  });

  $(".sun").click(function() {
    console.log('sun');
    $(".planet-info").empty()
    $(".planet-info").append("<h2>" + sunObj.name + "</h2>" +
      "<p>How long it takes to spin on its axis: " + sunObj.axisRotation + " earth days</p>" +
      "<p>Radius in miles: " + sunObj.radius + "</p>");
  });

  $(".mercury").click(function() {
    $(".planet-info").empty()
    $(".planet-info").append("<h2>" + mercuryObj.name + "</h2>" +
      "<p>How long it takes in earth days to rotate around the sun: " + mercuryObj.rotationAroundSun + "</p>" +
      "<p>How long it takes to spin on its axis: " + mercuryObj.axisRotation + " earth days</p>" +
      "<p>Radius in miles: " + mercuryObj.radius + "</p>");
  });

  $(".venus").click(function() {
    $(".planet-info").empty()
    $(".planet-info").append("<h2>" + venusObj.name + "</h2>" +
      "<p>How long it takes in earth days to rotate around the sun: " + venusObj.rotationAroundSun + "</p>" +
      "<p>How long it takes to spin on its axis: " + venusObj.axisRotation + " earth days</p>" +
      "<p>Radius in miles: " + venusObj.radius + "</p>");
  });

  $(".earth").click(function() {
    $(".planet-info").empty()
    $(".planet-info").append("<h2>" + earthObj.name + "</h2>" +
      "<p>How long it takes in earth days to rotate around the sun: " + earthObj.rotationAroundSun + "</p>" +
      "<p>How long it takes to spin on its axis: " + earthObj.axisRotation + " earth days</p>" +
      "<p>Radius in miles: " + earthObj.radius + "</p>");
  });

  $(".mars").click(function() {
    $(".planet-info").empty()
    $(".planet-info").append("<h2>" + marsObj.name + "</h2>" +
      "<p>How long it takes in earth days to rotate around the sun: " + marsObj.rotationAroundSun + "</p>" +
      "<p>How long it takes to spin on its axis: " + marsObj.axisRotation + " earth days</p>" +
      "<p>Radius in miles: " + marsObj.radius + "</p>");
  });

  $(".jupiter").click(function() {
    $(".planet-info").empty()
    $(".planet-info").append("<h2>" + jupiterObj.name + "</h2>" +
      "<p>How long it takes in earth days to rotate around the sun: " + jupiterObj.rotationAroundSun + "</p>" +
      "<p>How long it takes to spin on its axis: " + jupiterObj.axisRotation + " earth days</p>" +
      "<p>Radius in miles: " + jupiterObj.radius + "</p>");
  });

  $(".saturn").click(function() {
    $(".planet-info").empty()
    $(".planet-info").append("<h2>" + saturnObj.name + "</h2>" +
      "<p>How long it takes in earth days to rotate around the sun: " + saturnObj.rotationAroundSun + "</p>" +
      "<p>How long it takes to spin on its axis: " + saturnObj.axisRotation + " earth days</p>" +
      "<p>Radius in miles: " + saturnObj.radius + "</p>");
  });

  $(".uranus").click(function() {
    $(".planet-info").empty()
    $(".planet-info").append("<h2>" + uranusObj.name + "</h2>" +
      "<p>How long it takes in earth days to rotate around the sun: " + uranusObj.rotationAroundSun + "</p>" +
      "<p>How long it takes to spin on its axis: " + uranusObj.axisRotation + " earth days</p>" +
      "<p>Radius in miles: " + uranusObj.radius + "</p>");
  });

  $(".neptune").click(function() {
    $(".planet-info").empty()
    $(".planet-info").append("<h2>" + neptuneObj.name + "</h2>" +
      "<p>How long it takes in earth days to rotate around the sun: " + neptuneObj.rotationAroundSun + "</p>" +
      "<p>How long it takes to spin on its axis: " + neptuneObj.axisRotation + " earth days</p>" +
      "<p>Radius in miles: " + neptuneObj.radius + "</p>");
  });

  $(".pluto").click(function() {
    $(".planet-info").empty()
    $(".planet-info").append("<h2>" + plutoObj.name + "</h2>" +
      "<p>How long it takes in earth days to rotate around the sun: " + plutoObj.rotationAroundSun + "</p>" +
      "<p>How long it takes to spin on its axis: " + plutoObj.axisRotation + " earth days</p>" +
      "<p>Radius in miles: " + plutoObj.radius + "</p>");
  });

  // set up scenes
  var scene = new THREE.Scene();

  // loader
  // THREE.DefaultLoadingManager.onProgress = function ( item, loaded, total ) {
  //     console.log( item, loaded, total );
  // };

  // scene.add( new THREE.Fog(0xffffff, 0.015, 100) )

  // set up camera
  var camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 10000 );
  // set up renderer
  var renderer = new THREE.WebGLRenderer({ antialias: true});
  // { antialias: true}

  // setting up camera controls
  controls = new THREE.OrbitControls( camera );
  controls.minDistance = 7;
  controls.maxDistance = 2200;
  // controls.maxAzimuthAngle = 1000;
  // controls.maxZoom = 1000

  // camera.lookAt(new THREE.Vector3(1, 0, 0))

  //3D Axis helper for center of scene
  // scene.add(new THREE.AxisHelper(20));

  // adds lighting from center of universe.
  var light = new THREE.PointLight( 0xFFFFFF, 1.5, 2500, 2 );
  light.position.set( 0, 0, 0 );
  scene.add( light );

  // Render appends to the body 
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );

  // var a = new THREE.Vector2(200, 0);
  // var b = new THREE.Vector2(1000, 0);

  // var path = new THREE.Path([a, b])

  // path.splineThru

  // var d = a.distanceTo(b);
  // console.log(d)

  // ==================================
  // Setting up starfield
  // ==================================
  // Setting up shape for starfield
  var geometry = new THREE.SphereGeometry(3500, 60, 40);  
  // Creating texture for space
  var skyTexture = { 
    texture: {type: 't', value: new THREE.TextureLoader().load("images/nebula.jpg")}
  };
  skyTexture.wrapS = THREE.RepeatWrapping;
  skyTexture.wrapT = THREE.RepeatWrapping;
  // skyTexture.needsUpdate = true

  // Material for space
  var material = new THREE.ShaderMaterial({  
    uniforms: skyTexture,
    vertexShader: document.getElementById('sky-vertex').textContent,
    fragmentShader: document.getElementById('sky-fragment').textContent
  });

  skyBox = new THREE.Mesh(geometry, material);  
  skyBox.scale.set(-1, 1, 1);  
  skyBox.eulerOrder = 'XZY';  
  skyBox.renderDepth = 5000.0;  
  scene.add(skyBox);


  // skyBox.position.copy(camera.position);
  // skyBox.rotation.copy(camera.rotation);
  // skyBox.updateMatrix();
  // skyBox.translateZ(-10);
  // camera.lookAt(skyBox);
  // skyBox.add(camera);

  // ==================================
  //  Setting up the sun
  // ==================================
  //new shape for sun which is a sphere
  var sunGeometry = new THREE.SphereGeometry(radiusLog(sunObj.radius), 32, 32 );
  // creating sun texture
  var sunTexture = new THREE.TextureLoader().load("images/sun.jpg")
  sunTexture.wrapS = THREE.RepeatWrapping;
  sunTexture.wrapT = THREE.RepeatWrapping;
  // creating the sun material
  var material = new THREE.MeshBasicMaterial({map: sunTexture});

  // take the sun shape and wraps sun mesh
  var sun = new THREE.Mesh( sunGeometry, material );
  
  // adds the sun to the scene
  scene.add( sun );
  sun.rotation.set(-30, 0, 0);

  // ==================================
  //  Setting up Sun/Mercury
  // ==================================
  var sunMercuryGeometry = new THREE.SphereGeometry(1, 32, 32 );
  var material = new THREE.MeshBasicMaterial({color: 0xffffff});
  var sunMercury = new THREE.Mesh( sunMercuryGeometry, material );
  
  // changes the orbital path
  scene.add( sunMercury );
  
  // ==================================
  //  Setting up Mercury
  // ==================================
  var mercuryGeometry = new THREE.SphereGeometry(radiusLog(mercuryObj.radius), 32, 32 );
  var mercuryTexture = new THREE.TextureLoader().load("images/mercury.jpg")
  mercuryTexture.wrapS = THREE.RepeatWrapping;
  mercuryTexture.wrapT = THREE.RepeatWrapping;
  var material = new THREE.MeshPhongMaterial({map: mercuryTexture});
  var mercury = new THREE.Mesh( mercuryGeometry, material );
  
  // adds venus to sun. Might have to add to something else to change orbital path
  sunMercury.add(mercury);
  mercury.translateZ(orbitalScaler(35.96))
  mercury.rotation.set(30, 0, - Math.PI * 2.11 / 180 );
  // mercury.add(new THREE.AxisHelper( 10 ))

  // pathing for mercury
  var curve = new THREE.EllipseCurve(
    0, 0,             // ax, aY
    orbitalScaler(35.96), orbitalScaler(35.96),  // xRadius, yRadius
    0, 2 * Math.PI, // aStartAngle, aEndAngle
    false             // aClockwise
  );
 
  var path = new THREE.Path(curve.getPoints(50));
  var geometry = path.createPointsGeometry(50);
  var material = new THREE.LineBasicMaterial({color: 0xFFFFFF});
  var arc = new THREE.Line(geometry, material);
  scene.add(arc);
  // not sure why it's 11, but I'm rolling with it
  arc.rotation.set(11, 0, 0);

  // ==================================
  //  Setting up Sun/Venus
  // ==================================
  var sunVenusGeometry = new THREE.SphereGeometry(1, 32, 32 );
  var material = new THREE.MeshBasicMaterial({color: 0xffffff});
  var sunVenus = new THREE.Mesh( sunVenusGeometry, material );
  
  // changes the orbital path
  scene.add( sunVenus );

  // ==================================
  //  Setting up Venus
  // ==================================
  var venusGeometry = new THREE.SphereGeometry(radiusLog(venusObj.radius), 32, 32 );
  var venusTexture = new THREE.TextureLoader().load("images/venus.jpg")
  venusTexture.wrapS = THREE.RepeatWrapping;
  venusTexture.wrapT = THREE.RepeatWrapping;
  var material = new THREE.MeshPhongMaterial({map: venusTexture});
  var venus = new THREE.Mesh( venusGeometry, material );
  
  // adds venus to sun. Might have to add to something else to change orbital path
  sunVenus.add(venus);
  venus.translateZ(orbitalScaler(67.24))
  venus.rotation.set(30, 0, - Math.PI * 177.4 / 180 );
  // venus.add(new THREE.AxisHelper( 10 ));

  var curve = new THREE.EllipseCurve(
    0, 0,
    orbitalScaler(67.24), orbitalScaler(67.24),
    0, 2 * Math.PI,
    false 
  );
  var path = new THREE.Path(curve.getPoints(50));
  var geometry = path.createPointsGeometry(50);
  var material = new THREE.LineBasicMaterial({color: 0xFFFFFF});
  var arc = new THREE.Line(geometry, material);
  scene.add(arc);
  arc.rotation.set(11, 0, 0);

  // ==================================
  //  Setting up Sun/Earth
  // ==================================
  var sunEarthGeometry = new THREE.SphereGeometry(1, 32, 32 );
  var material = new THREE.MeshBasicMaterial({color: 0xffffff});
  var sunEarth = new THREE.Mesh( sunEarthGeometry, material );
  
  // changes the orbital path
  scene.add( sunEarth );

  // ==================================
  //  Setting up Earth
  // ==================================
  var earthGeometry = new THREE.SphereGeometry(radiusLog(earthObj.radius), 32, 32 );
  var earthTexture = new THREE.TextureLoader().load("images/earth.jpg")
  earthTexture.wrapS = THREE.RepeatWrapping;
  earthTexture.wrapT = THREE.RepeatWrapping;
  var material = new THREE.MeshPhongMaterial({map: earthTexture});
  var earth = new THREE.Mesh( earthGeometry, material );
  
  // adds the earth to the scene - might have to add to something else to change orbital path
  sunEarth.add( earth );
  earth.translateZ(orbitalScaler(92.96));
  // earth.rotateX(-30)
  // adding axial tilt
  earth.rotation.set(30, 0, - Math.PI * 23.4 / 180 );
  // earth.translateZ(23)
  // earth.add(new THREE.AxisHelper( 10 ))

  var curve = new THREE.EllipseCurve(
    0, 0,
    orbitalScaler(92.96), orbitalScaler(92.96),
    0, 2 * Math.PI,
    false 
  );
  var path = new THREE.Path(curve.getPoints(50));
  var geometry = path.createPointsGeometry(50);
  var material = new THREE.LineBasicMaterial({color: 0xFFFFFF});
  var arc = new THREE.Line(geometry, material);
  scene.add(arc);
  arc.rotation.set(11, 0, 0);

   // ==================================
  //  Setting up Earth/Moon
  // ==================================
  var earthMoonGeometry = new THREE.SphereGeometry(1, 32, 32 );
  var material = new THREE.MeshBasicMaterial({color: 0xffffff});
  var earthMoon = new THREE.Mesh( earthMoonGeometry, material );
  
  // changes the orbital path
  sunEarth.add( earthMoon );
  earthMoon.translateZ(orbitalScaler(92.96))
  earthMoon.rotation.set(-13, 0, 0);

  // ==================================
  //  Setting up Moon
  // ==================================
  var moonGeometry = new THREE.SphereGeometry(radiusLog(1079), 32, 32 );
  var moonTexture = new THREE.TextureLoader().load("images/moon.jpg")
  moonTexture.wrapS = THREE.RepeatWrapping;
  moonTexture.wrapT = THREE.RepeatWrapping;
  var material = new THREE.MeshPhongMaterial({map: moonTexture});
  var moon = new THREE.Mesh( moonGeometry, material );

  // add the moon to the earth
  earthMoon.add(moon);
  moon.translateZ(8.5);

  // ==================================
  //  Setting up Sun/Mars
  // ==================================
  var sunMarsGeometry = new THREE.SphereGeometry(1, 32, 32 );
  var material = new THREE.MeshBasicMaterial({color: 0xffffff});
  var sunMars = new THREE.Mesh( sunMarsGeometry, material );
  
  // changes the orbital path
  scene.add( sunMars );

  // ==================================
  //  Setting up Mars
  // ==================================
  var marsGeometry = new THREE.SphereGeometry(radiusLog(marsObj.radius), 32, 32 );
  var marsTexture = new THREE.TextureLoader().load("images/mars.jpg")
  marsTexture.wrapS = THREE.RepeatWrapping;
  marsTexture.wrapT = THREE.RepeatWrapping;
  var material = new THREE.MeshPhongMaterial({map: marsTexture});
  var mars = new THREE.Mesh( marsGeometry, material );

  sunMars.add(mars);
  mars.translateZ(orbitalScaler(141.6));
  mars.rotation.set(30, 0, - Math.PI * 25 / 180 );

  var curve = new THREE.EllipseCurve(
    0, 0,
    orbitalScaler(141.6), orbitalScaler(141.6),
    0, 2 * Math.PI,
    false 
  );

  var path = new THREE.Path(curve.getPoints(50));
  var geometry = path.createPointsGeometry(50);
  var material = new THREE.LineBasicMaterial({color: 0xFFFFFF});
  var arc = new THREE.Line(geometry, material);
  scene.add(arc);
  arc.rotation.set(11, 0, 0);

  // ==================================
  //  Setting up Sun/Jupiter
  // ==================================
  var sunJupiterGeometry = new THREE.SphereGeometry(1, 32, 32 );
  var material = new THREE.MeshBasicMaterial({color: 0xffffff});
  var sunJupiter = new THREE.Mesh( sunJupiterGeometry, material );
  
  // changes the orbital path
  scene.add( sunJupiter );

  // ==================================
  //  Setting up Jupiter
  // ==================================
  var jupiterGeometry = new THREE.SphereGeometry(radiusLog(jupiterObj.radius), 32, 32 );
  var jupiterTexture = new THREE.TextureLoader().load("images/jupiter.jpg")
  jupiterTexture.wrapS = THREE.RepeatWrapping;
  jupiterTexture.wrapT = THREE.RepeatWrapping;
  var material = new THREE.MeshPhongMaterial({map: jupiterTexture});
  var jupiter = new THREE.Mesh( jupiterGeometry, material );

  sunJupiter.add(jupiter);
  jupiter.translateZ(orbitalScaler(483.8));
  jupiter.rotation.set(30, 0, - Math.PI * 3.13 / 180);

  var curve = new THREE.EllipseCurve(
    0, 0,
    orbitalScaler(483.8), orbitalScaler(483.8),
    0, 2 * Math.PI,
    false 
  );
  
  var path = new THREE.Path(curve.getPoints(50));
  var geometry = path.createPointsGeometry(50);
  var material = new THREE.LineBasicMaterial({color: 0xFFFFFF});
  var arc = new THREE.Line(geometry, material);
  scene.add(arc);
  arc.rotation.set(11, 0, 0);

  // ==================================
  //  Setting up Sun/Saturn
  // ==================================
  var sunSaturnGeometry = new THREE.SphereGeometry(1, 32, 32 );
  var material = new THREE.MeshBasicMaterial({color: 0xffffff});
  var sunSaturn = new THREE.Mesh( sunSaturnGeometry, material );
  scene.add( sunSaturn );

  // ==================================
  //  Setting up Saturn
  // ==================================
  var saturnGeometry = new THREE.SphereGeometry(radiusLog(saturnObj.radius), 32, 32 );
  var saturnTexture = new THREE.TextureLoader().load("images/saturn.jpg")
  saturnTexture.wrapS = THREE.RepeatWrapping;
  saturnTexture.wrapT = THREE.RepeatWrapping;
  var material = new THREE.MeshPhongMaterial({map: saturnTexture});
  var saturn = new THREE.Mesh( saturnGeometry, material );

  // add the moon to the earth
  sunSaturn.add(saturn);
  saturn.translateZ(orbitalScaler(888.2));
  saturn.rotation.set(30, 0, - Math.PI * 26.7 / 180);

  var curve = new THREE.EllipseCurve(
    0, 0,
    orbitalScaler(888.2), orbitalScaler(888.2),
    0, 2 * Math.PI,
    false 
  );
  
  var path = new THREE.Path(curve.getPoints(50));
  var geometry = path.createPointsGeometry(50);
  var material = new THREE.LineBasicMaterial({color: 0xFFFFFF});
  var arc = new THREE.Line(geometry, material);
  scene.add(arc);
  arc.rotation.set(11, 0, 0);

  // ==================================
  //  Setting up Sun/Uranus
  // ==================================
  var sunUranusGeometry = new THREE.SphereGeometry(1, 32, 32 );
  var material = new THREE.MeshBasicMaterial({color: 0xffffff});
  var sunUranus = new THREE.Mesh( sunUranusGeometry, material );
  scene.add(sunUranus);

  // ==================================
  //  Setting up Uranus
  // ==================================
  var uranusGeometry = new THREE.SphereGeometry(radiusLog(uranusObj.radius), 32, 32 );
  var uranusTexture = new THREE.TextureLoader().load("images/uranus.jpg")
  uranusTexture.wrapS = THREE.RepeatWrapping;
  uranusTexture.wrapT = THREE.RepeatWrapping;
  var material = new THREE.MeshPhongMaterial({map: uranusTexture});
  var uranus = new THREE.Mesh( uranusGeometry, material );

  sunUranus.add(uranus);
  uranus.translateZ(orbitalScaler(1787));
  uranus.rotation.set(30, 0, - Math.PI * 97.77 / 180 );

  var curve = new THREE.EllipseCurve(
    0, 0,
    orbitalScaler(1787), orbitalScaler(1787),
    0, 2 * Math.PI,
    false 
  );
  
  var path = new THREE.Path(curve.getPoints(50));
  var geometry = path.createPointsGeometry(50);
  var material = new THREE.LineBasicMaterial({color: 0xFFFFFF});
  var arc = new THREE.Line(geometry, material);
  scene.add(arc);
  arc.rotation.set(11, 0, 0);

  // ==================================
  //  Setting up Sun/Neptune
  // ==================================
  var sunNeptuneGeometry = new THREE.SphereGeometry(1, 32, 32 );
  var material = new THREE.MeshBasicMaterial({color: 0xffffff});
  var sunNeptune = new THREE.Mesh(sunNeptuneGeometry, material);
  scene.add(sunNeptune);

  // ==================================
  //  Setting up Neptune
  // ==================================
  var neptuneGeometry = new THREE.SphereGeometry(radiusLog(neptuneObj.radius), 32, 32 );
  var neptuneTexture = new THREE.TextureLoader().load("images/neptune.jpg")
  neptuneTexture.wrapS = THREE.RepeatWrapping;
  neptuneTexture.wrapT = THREE.RepeatWrapping;
  var material = new THREE.MeshPhongMaterial({map: neptuneTexture});
  var neptune = new THREE.Mesh( neptuneGeometry, material );

  sunNeptune.add(neptune);
  neptune.translateZ(orbitalScaler(2795));
  neptune.rotation.set(30, 0, - Math.PI * 28.32/ 180 );

  var curve = new THREE.EllipseCurve(
    0, 0,
    orbitalScaler(2795), orbitalScaler(2795),
    0, 2 * Math.PI,
    false 
  );
  
  var path = new THREE.Path(curve.getPoints(50));
  var geometry = path.createPointsGeometry(50);
  var material = new THREE.LineBasicMaterial({color: 0xFFFFFF});
  var arc = new THREE.Line(geometry, material);
  scene.add(arc);
  arc.rotation.set(11, 0, 0);

  // ==================================
  //  Setting up Sun/Pluto
  // ==================================
  var sunPlutoGeometry = new THREE.SphereGeometry(1, 32, 32 );
  var material = new THREE.MeshBasicMaterial({color: 0xffffff});
  var sunPluto = new THREE.Mesh(sunPlutoGeometry, material);
  scene.add(sunPluto);

  // ==================================
  //  Setting up Pluto
  // ==================================
  var plutoGeometry = new THREE.SphereGeometry(radiusLog(plutoObj.radius), 32, 32 );
  var plutoTexture = new THREE.TextureLoader().load("images/pluto.jpg")
  plutoTexture.wrapS = THREE.RepeatWrapping;
  plutoTexture.wrapT = THREE.RepeatWrapping;
  var material = new THREE.MeshPhongMaterial({map: plutoTexture});
  var pluto = new THREE.Mesh( plutoGeometry, material );

  // add the moon to the earth
  sunPluto.add(pluto);
  pluto.translateZ(orbitalScaler(3670));
  pluto.rotation.set(30, 0, - Math.PI * 119.61 / 180 );

  var curve = new THREE.EllipseCurve(
    0, 0,
    orbitalScaler(3670), orbitalScaler(3670),
    0, 2 * Math.PI,
    false 
  );
  
  var path = new THREE.Path(curve.getPoints(50));
  var geometry = path.createPointsGeometry(50);
  var material = new THREE.LineBasicMaterial({color: 0xFFFFFF});
  var arc = new THREE.Line(geometry, material);
  this.scene.add(arc);
  arc.rotation.set(11, 0, 0);

  // zooms the camera out of the original orientation so we can view the planets
  camera.position.z = 200;

  // render function
  function render() {
    // runs a loops that will call the render function 60x a second
    requestAnimationFrame( render );
    // rotates earth orientation
    // venus.rotation.z += 0.05;
    sun.rotation.z -= Math.PI/(450/sunObj.axisRotation);
    mercury.rotation.z += (Math.PI/450)*(earthObj.axisRotation/mercuryObj.axisRotation)*speed();
    venus.rotation.z -= (Math.PI/450)*(earthObj.axisRotation/venusObj.axisRotation)*speed();
    earth.rotation.z += (Math.PI/450)*(earthObj.axisRotation)*speed();
    moon.rotation.z += (Math.PI/450)*27.33*speed()
    mars.rotation.z += (Math.PI/450)*(earthObj.axisRotation/marsObj.axisRotation)*speed();
    jupiter.rotation.z += (Math.PI/450)*(earthObj.axisRotation/jupiterObj.axisRotation)*speed();
    saturn.rotation.z += (Math.PI/450)*(earthObj.axisRotation/saturnObj.axisRotation)*speed();
    uranus.rotation.z -= (Math.PI/450)*(earthObj.axisRotation/uranusObj.axisRotation)*speed();
    neptune.rotation.z += (Math.PI/450)*(earthObj.axisRotation/neptuneObj.axisRotation)*speed();
    pluto.rotation.z += (Math.PI/450)*(earthObj.axisRotation/plutoObj.axisRotation)*speed();

    sunMercury.rotation.y += (Math.PI/450)*rotationAroundSunRelativeToEarth(mercuryObj.rotationAroundSun)*speed();
    sunVenus.rotation.y += (Math.PI/450)*rotationAroundSunRelativeToEarth(venusObj.rotationAroundSun)*speed();
    sunEarth.rotation.y += (Math.PI/450)*speed();
    earthMoon.rotation.y += (Math.PI/450)*27.32*speed();
    sunMars.rotation.y += (Math.PI/450)*rotationAroundSunRelativeToEarth(marsObj.rotationAroundSun)*speed();
    sunJupiter.rotation.y += (Math.PI/450)*rotationAroundSunRelativeToEarth(jupiterObj.rotationAroundSun)*speed();
    sunSaturn.rotation.y += (Math.PI/450)*rotationAroundSunRelativeToEarth(saturnObj.rotationAroundSun)*speed();
    sunUranus.rotation.y += (Math.PI/450)*rotationAroundSunRelativeToEarth(uranusObj.rotationAroundSun)*speed();
    sunNeptune.rotation.y += (Math.PI/450)*rotationAroundSunRelativeToEarth(neptuneObj.rotationAroundSun)*speed();
    sunPluto.rotation.y += (Math.PI/450)*rotationAroundSunRelativeToEarth(plutoObj.rotationAroundSun)*speed();
    controls.update()

    // rerendering skybox location
    skyBox.position.x = camera.position.x
    skyBox.position.y = camera.position.y
    skyBox.position.z = camera.position.z

    renderer.render( scene, camera );
  }
  render();
    console.log(camera);

// <!-- garbage code -->

// <!--    // sets background color
//         // renderer.setClearColor(new THREE.Color(0x990000  ));

//         //need to wrap in space - need to revisit

//         // var spacetex = new THREE.TextureLoader().load("images/space.jpg");
//         // spacetex.minFilter = THREE.LinearFilter;
//         // spacetex.wrapS = THREE.RepeatWrapping;
//         // spacetex.wrapT = THREE.RepeatWrapping;


//      //  var spacesphereGeo = new THREE.SphereGeometry( 10, 32, 32);
//      //  var spacesphereMat = new THREE.MeshBasicMaterial({map: spacetex});

//      //  var spacesphere = new THREE.Mesh(spacesphereGeo,spacesphereMat);
      
//       //spacesphere needs to be double sided as the camera is within the spacesphere
//       // spacesphere.material.side = THREE.DoubleSide;
      

//       // spacesphere.material.map.repeat.set( 3, 3);
      
//       // scene.add(spacesphere);
//         // spacesphere.position.set(5, 10, 2) -->


// <!-- Added manual controls for auto -->
// <!--                var audioListener = new THREE.AudioListener();
//         camera.add(audioListener);

//         var spaceAudio = new THREE.Audio(audioListener);

//         scene.add(spaceAudio);

//         var loader = new THREE.AudioLoader();

//         // load a resource
//     loader.load(
//         // resource URL
//         'audio/interstellar.mp3',
//         // Function when resource is loaded
//         function ( audioBuffer ) {
//             // set the audio object buffer to the loaded object
//             spaceAudio.setBuffer( audioBuffer );

//             // play the audio
//             spaceAudio.play();
//         },
//         // Function called when download progresses
//         function ( xhr ) {
//             console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
//         },
//         // Function called when download errors
//         function ( xhr ) {
//             console.log( 'An error happened' );
//         }
//     );
//  -->

// <!--        // scene.add( fog ); 
//         // scene.Fog

//         // set up a clock
//         // var clock = new THREE.Clock();
//         // clock.autoStart
//         // console.log(clock) -->


// <!--                // var radius = 1;

//         // var i, r = 371, starsGeometry = [ new THREE.Geometry(), new THREE.Geometry() ];
//         //      for ( i = 0; i < 250; i ++ ) {
//         //          var vertex = new THREE.Vector3();
//         //          vertex.x = Math.random() * 2 - 1;
//         //          vertex.y = Math.random() * 2 - 1;
//         //          vertex.z = Math.random() * 2 - 1;
//         //          vertex.multiplyScalar( r );
//         //          starsGeometry[ 0 ].vertices.push( vertex );
//         //      }
//         //      for ( i = 0; i < 1500; i ++ ) {
//         //          var vertex = new THREE.Vector3();
//         //          vertex.x = Math.random() * 2 - 1;
//         //          vertex.y = Math.random() * 2 - 1;
//         //          vertex.z = Math.random() * 2 - 1;
//         //          vertex.multiplyScalar( r );
//         //          starsGeometry[ 1 ].vertices.push( vertex );
//         //      }

//         // var stars;
//         //      var starsMaterials = [
//         //          new THREE.PointsMaterial( { color: 0x555555, size: 2, sizeAttenuation: false } ),
//         //          new THREE.PointsMaterial( { color: 0x555555, size: 1, sizeAttenuation: false } ),
//         //          new THREE.PointsMaterial( { color: 0x333333, size: 2, sizeAttenuation: false } ),
//         //          new THREE.PointsMaterial( { color: 0x3a3a3a, size: 1, sizeAttenuation: false } ),
//         //          new THREE.PointsMaterial( { color: 0x1a1a1a, size: 2, sizeAttenuation: false } ),
//         //          new THREE.PointsMaterial( { color: 0x1a1a1a, size: 1, sizeAttenuation: false } )
//         //      ];
//         //      for ( i = 10; i < 30; i ++ ) {
//         //          stars = new THREE.Points( starsGeometry[ i % 2 ], starsMaterials[ i % 6 ] );
//         //          stars.rotation.x = Math.random() * 6;
//         //          stars.rotation.y = Math.random() * 6;
//         //          stars.rotation.z = Math.random() * 6;
//         //          s = i * 10;
//         //          stars.scale.set( s, s, s );
//         //          stars.matrixAutoUpdate = false;
//         //          stars.updateMatrix();
//         //          scene.add( stars );
//         // } -->

    // sun.rotation.z += .0016666;
    // sun.rotation.y += .01;
    // earth.rotation.x += 0.005;
    // earth.rotation.y += 0.005;
    // spacesphere.rotation.y += 0.001;