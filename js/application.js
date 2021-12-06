import { precacheAndRoute } from "workbox-precaching";

// Use with precache injection
precacheAndRoute(self.__WB_MANIFEST);


// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  new GameManager(4, KeyboardInputManager, HTMLActuator, LocalScoreManager);
});
