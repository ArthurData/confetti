$((function() {

  let counter = 0;

  $(document).on("shiny:connected", (function(event) {
    Shiny.setInputValue("sentConfetti", counter, {priority: "event"});
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

    counter = counter + 1

    Shiny.setInputValue("sentConfetti", counter, {priority: "event"});
  });

}));
