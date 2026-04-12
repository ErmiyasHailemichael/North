// ============================================================
// Simple Text Editor with Undo Functionality 
// Week 7 
// ============================================================

// Represents a single operation performed on the text.
class TextOperation {
  constructor(type, character) {
    // type: 'add' | 'delete'
    // character: the char that was added or deleted
    this.type = type;
    this.character = character;
  }
}

// --- TextEditor Class ---
class TextEditor {
  constructor() {
    this.text = "";          // Current text content
    this.undoStack = [];     // Stack of TextOperation objects
  }

  // Push: add a character 
  addText(char) {
    this.text += char;
    this.undoStack.push(new TextOperation("add", char));
    this.display();
  }

  // Pop from text: delete the last character
  deleteText() {
    if (this.text.length === 0) {
      console.log("[Delete] Nothing to delete. Text is already empty.");
      return;
    }
    const deletedChar = this.text[this.text.length - 1];
    this.text = this.text.slice(0, -1);
    this.undoStack.push(new TextOperation("delete", deletedChar));
    this.display();
  }

  // Undo: pop the last operation from the stack and reverse it
  undo() {
    if (this.undoStack.length === 0) {
      console.log("[Undo] Nothing to undo. Stack is empty.");
      return;
    }
    const lastOp = this.undoStack.pop();   // Pop from undo stack

    if (lastOp.type === "add") {
      // Reverse an add → remove the last character
      this.text = this.text.slice(0, -1);
    } else if (lastOp.type === "delete") {
      // Reverse a delete → re-add the character
      this.text += lastOp.character;
    }
    this.display();
  }

  // Display current state of the text
  display() {
    console.log(`Current text: "${this.text}"`);
  }

  // Peek: view top of stack without removing (helper / demo)
  peek() {
    if (this.undoStack.length === 0) return null;
    return this.undoStack[this.undoStack.length - 1];
  }

  // isEmpty: check if the undo stack is empty
  isStackEmpty() {
    return this.undoStack.length === 0;
  }
}

module.exports = { TextEditor, TextOperation };


// ============================================================
// DEMO — runs only when executed directly - not test
// ============================================================
if (require.main === module) {
  const editor = new TextEditor();

  console.log("=== Demo: Simple Text Editor with Undo Stack ===\n");

  console.log("-- Adding characters: H, e, l, l, o --");
  editor.addText("H");
  editor.addText("e");
  editor.addText("l");
  editor.addText("l");
  editor.addText("o");

  console.log("\n-- Deleting last character --");
  editor.deleteText();

  console.log("\n-- Undo the delete (brings back 'o') --");
  editor.undo();

  console.log("\n-- Undo the last add (removes 'o') --");
  editor.undo();

  console.log("\n-- Multiple undos --");
  editor.undo();
  editor.undo();

  console.log("\n-- Undo on empty stack --");
  editor.undo();
  editor.undo();
  editor.undo();

  console.log("\n-- Delete on empty text --");
  const emptyEditor = new TextEditor();
  emptyEditor.deleteText();
}