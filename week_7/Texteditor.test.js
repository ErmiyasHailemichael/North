
const { test, describe } = require("node:test");
const assert = require("node:assert/strict");
const { TextEditor, TextOperation } = require("./Texteditor.js");


// ============================================================
// NORMAL CASES
// ============================================================
describe("Normal Cases", () => {

  test("1. addText appends characters correctly", () => {
    const editor = new TextEditor();
    editor.addText("H");
    editor.addText("i");
    assert.equal(editor.text, "Hi");
  });

  test("2. deleteText removes the last character", () => {
    const editor = new TextEditor();
    editor.addText("H");
    editor.addText("i");
    editor.deleteText();
    assert.equal(editor.text, "H");
  });

  test("3. undo reverses an addText operation", () => {
    const editor = new TextEditor();
    editor.addText("A");
    editor.addText("B");
    editor.undo(); // undoes adding 'B'
    assert.equal(editor.text, "A");
  });

  test("4. undo reverses a deleteText operation", () => {
    const editor = new TextEditor();
    editor.addText("H");
    editor.addText("i");
    editor.deleteText(); // deletes 'i'
    editor.undo();       // brings back 'i'
    assert.equal(editor.text, "Hi");
  });

  test("5. multiple consecutive undos work correctly", () => {
    const editor = new TextEditor();
    editor.addText("A");
    editor.addText("B");
    editor.addText("C");
    editor.undo(); // removes 'C'
    editor.undo(); // removes 'B'
    editor.undo(); // removes 'A'
    assert.equal(editor.text, "");
  });

  test("6. undo stack tracks operations in correct LIFO order", () => {
    const editor = new TextEditor();
    editor.addText("X");
    editor.addText("Y");
    const top = editor.peek();
    assert.equal(top.type, "add");
    assert.equal(top.character, "Y");
  });

});


// ============================================================
// EDGE CASES
// ============================================================
describe("Edge Cases", () => {

  test("7. deleteText on empty text does not crash", () => {
    const editor = new TextEditor();
    assert.doesNotThrow(() => editor.deleteText());
    assert.equal(editor.text, "");
  });

  test("8. undo on empty stack does not crash", () => {
    const editor = new TextEditor();
    assert.doesNotThrow(() => editor.undo());
    assert.equal(editor.text, "");
  });

  test("9. undo after delete on empty text does not crash", () => {
    const editor = new TextEditor();
    editor.deleteText(); // no-op, nothing pushed to stack
    assert.doesNotThrow(() => editor.undo());
    assert.equal(editor.text, "");
  });

  test("10. single character: add then undo returns to empty", () => {
    const editor = new TextEditor();
    editor.addText("Z");
    editor.undo();
    assert.equal(editor.text, "");
    assert.equal(editor.isStackEmpty(), true);
  });

  test("11. alternating add/delete/undo sequence is correct", () => {
    const editor = new TextEditor();
    editor.addText("A");   // text: "A"
    editor.addText("B");   // text: "AB"
    editor.deleteText();   // text: "A"
    editor.undo();         // undo delete → text: "AB"
    editor.undo();         // undo add B → text: "A"
    assert.equal(editor.text, "A");
  });

  test("12. isStackEmpty returns true on new editor", () => {
    const editor = new TextEditor();
    assert.equal(editor.isStackEmpty(), true);
  });

  test("13. isStackEmpty returns false after an operation", () => {
    const editor = new TextEditor();
    editor.addText("Q");
    assert.equal(editor.isStackEmpty(), false);
  });

  test("14. TextOperation stores type and character correctly", () => {
    const op = new TextOperation("add", "A");
    assert.equal(op.type, "add");
    assert.equal(op.character, "A");
  });

});