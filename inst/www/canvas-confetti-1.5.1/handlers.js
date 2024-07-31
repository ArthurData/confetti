$((function() {

  let confettiCounter = 0;
  let fireworksCounter = 0;

  $(document).on("shiny:connected", (function(event) {
    Shiny.setInputValue("sentConfetti", confettiCounter, {priority: "event"});
    Shiny.setInputValue("sentFireworks", fireworksCounter, {priority: "event"});
  }));

  Shiny.addCustomMessageHandler('send.confetti', function(options) {
    confetti({
      particleCount: options.particle_count,
      angle: options.angle,
      spread: options.spread,
      startVelocity: options.start_velocity,
      decay: options.decay,
      gravity: options.gravity,
      drift: options.drift,
      ticks: options.ticks,
      origin: options.origin,
      colors: options.colors,
      shapes: options.shapes,
      scalar: options.scalar,
      zIndex: options.z_index,
      disableForReducedMotion: options.disable_for_reduced_motion,
    });

    confettiCounter = confettiCounter + 1
    Shiny.setInputValue("sentConfetti", confettiCounter, {priority: "event"});
  });

  Shiny.addCustomMessageHandler('send.fireworks', function(options) {

    defaults = {
      startVelocity: 30,
      spread: 360,
      ticks: 60,
      zIndex: 0,
      colors: options.colors,
      shapes: options.shapes,
    };

    var duration = options.duration * 1000;
    var animationEnd = Date.now() + duration;

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    var interval = setInterval(function() {
      var timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      var particleCount = options.particle_count * (timeLeft / duration);

      confetti({
        ...defaults,
        particleCount,
        origin: {
          x: randomInRange(0.1, 0.3),
          y: Math.random() - 0.2
        }
      });

      confetti({
        ...defaults,
        particleCount,
        origin: {
          x: randomInRange(0.7, 0.9),
          y: Math.random() - 0.2
        }
      });
    }, 250);

    fireworksCounter = fireworksCounter + 1
    Shiny.setInputValue("sentFireworks", fireworksCounter, {priority: "event"});
  });

}));
