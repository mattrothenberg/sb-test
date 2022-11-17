import "./app.css";
import App from "./App.svelte";

// export default app;

if (window === window.top) {
  window.location.href = `http://localhost:3000?devServer=${encodeURIComponent(
    window.location.href
  )}`;
} else {
  const app = new App({
    target: document.getElementById("app"),
  });
}
