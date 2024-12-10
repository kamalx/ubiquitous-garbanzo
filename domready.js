function domready(func) {
  document.addEventListener("DOMContentLoaded", func); // or...
  if (document.readyState === "interactive" || document.readyState === "complete" ) {
    func();
  }
} // wrap everything that depends on DOM in this thing.
