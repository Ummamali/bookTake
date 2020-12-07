// This is the main application file
class MessageContainer extends DOMContainer {
  constructor(
    objectHint,
    appendingAnimation = "append-yourself",
    removingAnimation = "remove-yourself",
    transitionDuration = 500
  ) {
    super(
      objectHint,
      appendingAnimation,
      removingAnimation,
      transitionDuration
    );
  }

  createAppendChild(message, typeClass) {
    const child = document.createElement("div");
    child.className = typeClass;
    child.innerHTML = message;
    this.appendChildWithStyle(child);
  }
}

let flash = new MessageContainer(
  ".flash",
  "append-yourself",
  "remove-yourself-flash"
);
