var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["848314f8-d7dc-4755-a4a1-3782173096b1","26b80e63-bc0f-408d-b288-be2282aebd4e","c4e310e0-8174-4127-a46e-0cbcc94b488b","46d6e603-7e64-42ce-b4d6-e17716ef6a2f","76f8f620-7b53-4c12-aa83-d51334a9881f","40366449-d6b2-4451-a54a-6f2183a99917","32258eb1-9ad5-4ce1-8d31-41b1a80fc72a","53e5b160-11ec-47e6-b5ba-d588e6963d40","dc9636b8-ee89-4722-ac58-861b2b851f3d","822ff538-84bf-43bf-a1d7-3c1b31afa164"],"propsByKey":{"848314f8-d7dc-4755-a4a1-3782173096b1":{"name":"hero","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":2,"looping":true,"frameDelay":12,"version":"1Ygx1Fg_4pDgpEJGcftJDCTEzPxaaiIU","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":60},"rootRelativePath":"assets/848314f8-d7dc-4755-a4a1-3782173096b1.png"},"26b80e63-bc0f-408d-b288-be2282aebd4e":{"name":"enemy1","sourceUrl":null,"frameSize":{"x":35,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"o5AhqAUb.Ab2gO7y8bfzkJrjemAwKFPe","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":35,"y":50},"rootRelativePath":"assets/26b80e63-bc0f-408d-b288-be2282aebd4e.png"},"c4e310e0-8174-4127-a46e-0cbcc94b488b":{"name":"dream","sourceUrl":null,"frameSize":{"x":386,"y":268},"frameCount":1,"looping":true,"frameDelay":12,"version":"3feu5Vq4O7EUTsT3zyO5eDDaWVNY9ziF","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":386,"y":268},"rootRelativePath":"assets/c4e310e0-8174-4127-a46e-0cbcc94b488b.png"},"46d6e603-7e64-42ce-b4d6-e17716ef6a2f":{"name":"space_1","sourceUrl":"assets/api/v1/animation-library/gamelab/qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9/category_backgrounds/background_space.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9/category_backgrounds/background_space.png"},"76f8f620-7b53-4c12-aa83-d51334a9881f":{"name":"ship06_1","sourceUrl":null,"frameSize":{"x":400,"y":372},"frameCount":1,"looping":true,"frameDelay":12,"version":"5Lh1LgNNce5C.qrogDEs6fakEvrrQl8F","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":372},"rootRelativePath":"assets/76f8f620-7b53-4c12-aa83-d51334a9881f.png"},"40366449-d6b2-4451-a54a-6f2183a99917":{"name":"b","sourceUrl":"assets/api/v1/animation-library/gamelab/liip36Uzd.UEskze8YUtuWMvk3veS2QD/category_backgrounds/background_underwater_11.png","frameSize":{"x":400,"y":399},"frameCount":1,"looping":true,"frameDelay":2,"version":"liip36Uzd.UEskze8YUtuWMvk3veS2QD","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":399},"rootRelativePath":"assets/api/v1/animation-library/gamelab/liip36Uzd.UEskze8YUtuWMvk3veS2QD/category_backgrounds/background_underwater_11.png"},"32258eb1-9ad5-4ce1-8d31-41b1a80fc72a":{"name":"enemy","sourceUrl":"assets/api/v1/animation-library/gamelab/kTmRQ1_RRECOF2u.0RFbMaEMXAWisxyS/category_animals/crab.png","frameSize":{"x":288,"y":191},"frameCount":1,"looping":true,"frameDelay":2,"version":"kTmRQ1_RRECOF2u.0RFbMaEMXAWisxyS","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":288,"y":191},"rootRelativePath":"assets/api/v1/animation-library/gamelab/kTmRQ1_RRECOF2u.0RFbMaEMXAWisxyS/category_animals/crab.png"},"53e5b160-11ec-47e6-b5ba-d588e6963d40":{"name":"enemy2","sourceUrl":"assets/api/v1/animation-library/gamelab/oitP3B6sJROj4Wzv4jkfuGUXFK3WhDOa/category_animals/fish_06.png","frameSize":{"x":396,"y":336},"frameCount":1,"looping":true,"frameDelay":2,"version":"oitP3B6sJROj4Wzv4jkfuGUXFK3WhDOa","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":396,"y":336},"rootRelativePath":"assets/api/v1/animation-library/gamelab/oitP3B6sJROj4Wzv4jkfuGUXFK3WhDOa/category_animals/fish_06.png"},"dc9636b8-ee89-4722-ac58-861b2b851f3d":{"name":"enemy3","sourceUrl":"assets/api/v1/animation-library/gamelab/zH1WSj3ukBEBbatiuMBpuxn_.oiNUOym/category_animals/creature_03.png","frameSize":{"x":394,"y":371},"frameCount":1,"looping":true,"frameDelay":2,"version":"zH1WSj3ukBEBbatiuMBpuxn_.oiNUOym","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":394,"y":371},"rootRelativePath":"assets/api/v1/animation-library/gamelab/zH1WSj3ukBEBbatiuMBpuxn_.oiNUOym/category_animals/creature_03.png"},"822ff538-84bf-43bf-a1d7-3c1b31afa164":{"name":"hero1","sourceUrl":null,"frameSize":{"x":306,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"C9tFAjMIFUeEaPzMpLpHLyzmlO6s4RYD","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":306,"y":400},"rootRelativePath":"assets/822ff538-84bf-43bf-a1d7-3c1b31afa164.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var b = createSprite(200,200);
 b.setAnimation("b")
var hero = createSprite(200,345,200,345)
hero.shapeColor="red"

var enemy1 = createSprite(200,250,10,10)
enemy1.shapeColor="red"

var enemy2 = createSprite(200,150,10,10)
enemy2.shapeColor="red"

var enemy3 = createSprite(200,50,10,10)
enemy3.shapeColor="red"

var net = createSprite(200,5,200,20)
net.shapeColor="red"

var goal =0;
var death = 0

hero.setAnimation("hero1");
hero.scale=.2;
enemy1.setAnimation("enemy");
enemy1.scale=.1;
enemy2.setAnimation("enemy2");
enemy2.scale=.1;
enemy3.setAnimation("enemy3");
enemy3.scale=.1;

enemy1.setVelocity(-10,0);
enemy2.setVelocity(10,0);
enemy3.setVelocity(-10,0);


function draw() {
  
//background(b);

createEdgeSprites()




enemy1.bounceOff(edges)
enemy2.bounceOff(edges)
enemy3.bounceOff(edges)

if(keyDown(UP_ARROW)){
  hero.y=hero.y-3
}

if(keyDown(DOWN_ARROW)){
  hero.y=hero.y+3
}

if(keyDown(LEFT_ARROW)){
  hero.x=hero.x-3
}

if(keyDown(RIGHT_ARROW)){
  hero.x=hero.x+3
}

if(hero.isTouching(enemy1)|| hero.isTouching(enemy2)|| hero.isTouching(enemy3)){
  playSound("assets/category_achievements/bubbly_game_achievement_sound.mp3")
  hero.x=200
  hero.y=350
  death = death+1
}
if(hero.isTouching(net)){
  playSound("assets/category_achievements/vibrant_game_game_gold_tresure_chest_open.mp3")
  hero.x=200
  hero.y=345
  goal=goal+1
}
textSize(20)
  fill("blue")
  text("Goals:"+goal,320,350);
  

textSize(20)
  fill("blue")
  text("death:"+death,20,350);
  
drawSprites()
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
