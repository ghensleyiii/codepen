// Create and attach the document structure
document.title = "Console to Page";

// Create h1 title
const h1 = document.createElement("h1");
h1.textContent = "Console.log Output";
document.body.appendChild(h1);

// Create output container
const logDiv = document.createElement("div");
logDiv.id = "logOutput";
document.body.appendChild(logDiv);

// Apply CSS styles via JS
Object.assign(logDiv.style, {
  fontFamily: "monospace",
  whiteSpace: "pre-wrap",
  backgroundColor: "#f0f0f0",
  padding: "10px",
  border: "1px solid #ccc"
});

// Override console.log to write to page
const originalLog = console.log;
console.log = function (...args) {
  originalLog(...args); // still log to original console
  args.forEach(arg => {
    const msg = typeof arg === "object" ? JSON.stringify(arg, null, 2) : String(arg);
    logDiv.innerText += msg + "\n";
  });
};
