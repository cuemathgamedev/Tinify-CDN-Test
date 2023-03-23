class StartScene extends Phaser.Scene {
  constructor() {
    super({
      key: "StartScene",
    });
  }

  preload() {
    this.startSceneAssetsLoad();
  }

  startSceneAssetsLoad() {
    this.load.image("mainBG", "https://qw268b3q.tinifycdn.com/assets/StartSceneAssets/BG.png");
    this.load.image("gameName", "https://qw268b3q.tinifycdn.com/assets/StartSceneAssets/gamename.png");
    this.load.image("cartWheel", "https://qw268b3q.tinifycdn.com/assets/StartSceneAssets/cartwheel.png");
    this.load.image("parachute", "https://qw268b3q.tinifycdn.com/assets/StartSceneAssets/parachute.png");
    this.load.image("cloudLeft", "https://qw268b3q.tinifycdn.com/assets/StartSceneAssets/cloudLefthdpi.png");
    this.load.image("cloudRight", "https://qw268b3q.tinifycdn.com/assets/StartSceneAssets/cloudRight.png");
    this.load.image("playButton", "https://qw268b3q.tinifycdn.com/assets/StartSceneAssets/Button CTA.png");
    this.load.image("trackGround", "https://qw268b3q.tinifycdn.com/assets/StartSceneAssets/ground.png");

    this.load.spritesheet("playButtonAnim", "https://qw268b3q.tinifycdn.com/assets/StartSceneAssets/playButtonAnim.png", { frameWidth: 200, frameHeight: 56 });
  }

  startSceneAssetsLoadNew() {
    this.load.image("mainBG", "assets/StartSceneAssets/BG.png");
    this.load.image("gameName", "assets/StartSceneAssets/gamename.png");
    this.load.image("cartWheel", "assets/StartSceneAssets/cartwheel.png");
    this.load.image("parachute", "assets/StartSceneAssets/parachute.png");
    this.load.image("cloudLeft", "assets/StartSceneAssets/cloudLefthdpi.png");
    this.load.image("cloudRight", "assets/StartSceneAssets/cloudRight.png");
    this.load.image("playButton", "assets/StartSceneAssets/Button CTA.png");
    this.load.image("trackGround", "assets/StartSceneAssets/ground.png");

    this.load.spritesheet("playButtonAnim", "assets/StartSceneAssets/playButtonAnim.png", { frameWidth: 200, frameHeight: 56 });
  }

  create() {
    this.add.sprite(config.width / 2, config.height / 2, "mainBG");

    this.parachute2 = this.add.sprite(1099, 328, "parachute").setOrigin(0);
    this.cloudLeft = this.add.sprite(-50, 60, "cloudLeft").setOrigin(0).setDisplaySize(216, 103.48);
    this.cloudRight = this.add.sprite(1350, 154, "cloudRight").setOrigin(0).setDisplaySize(263, 126);
    this.cartWheel = this.add.sprite(305, 351, "cartWheel");

    this.add.sprite(383, 298, "gameName").setOrigin(0);

    this.add.sprite(0, 389, "trackGround").setOrigin(0);

    this.playButton = this.add
      .sprite(config.width / 2, 454 + 20, "playButtonAnim")
      .setInteractive({
        cursor: "pointer",
      })
      .setFrame(1)
      .setOrigin(0.5);

    this.playButton.on(
      "pointerover",
      function (pointer) {
        //this.playButton.setTint(0xc4c4c4);
        this.playButton.setFrame(0);
      },
      this
    );
    this.playButton.on(
      "pointerout",
      function (pointer) {
        //this.playButton.setTint();
        this.playButton.setFrame(1);
      },
      this
    );
  }

  update() {
    this.cartWheel.rotation += 0.003;
    if (this.cloudLeft.x < 1400) {
      this.cloudLeft.x += 0.2;
    } else {
      this.cloudLeft.x = 120;
    }
    if (this.cloudRight.x > -200) {
      this.cloudRight.x -= 0.2;
    } else {
      this.cloudRight.x = 1200;
    }

    this.parachute2.y -= 0.3;

    if (this.parachute2.y < -60) {
      this.parachute2.y = 700;
    }
  }
}
