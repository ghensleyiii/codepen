// Create and attach the document structure
document.title = "Console to Page";

// Create h1 title
const h1 = document.createElement("h1");
h1.textContent = "Console Output";
document.body.appendChild(h1);

// Create output container
const logDiv = document.createElement("div");
logDiv.id = "logOutput";
document.body.appendChild(logDiv);

// Apply console-like CSS styles
Object.assign(logDiv.style, {
  fontFamily: "monospace",
  whiteSpace: "pre-wrap",
  backgroundColor: "#1e1e1e",
  color: "#d4d4d4",
  padding: "10px",
  border: "1px solid #333",
  height: "400px",
  overflowY: "auto",
  borderRadius: "4px",
  boxShadow: "inset 0 0 5px #000",
});

// Override console.log to write to page
const originalLog = console.log;
console.log = function (...args) {
  originalLog(...args); // keep logging to real console
  args.forEach(arg => {
    const line = document.createElement("div");

    let msg;
    if (typeof arg === "object" && arg !== null) {
      try {
        msg = JSON.stringify(arg, null, 2);
      } catch (e) {
        msg = "[object]";
      }
    } else {
      msg = String(arg);
    }

    line.textContent = msg;
    line.style.padding = "2px 0";
    line.style.borderBottom = "1px solid #333";

    logDiv.appendChild(line);
  });

  // Scroll to the bottom after logging
  logDiv.scrollTop =
