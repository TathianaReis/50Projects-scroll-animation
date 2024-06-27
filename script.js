const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4; /**EXPLAINED BELOW */

  boxes.forEach((box) => {
    const boxTop =
      box.getBoundingClientRect()
        .top; /**The Element.getBoundingClientRect() method returns a DOMRect (Retangulo) object providing information about the size of an element and its position relative to the viewport. */

    if (boxTop < triggerBottom) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  });
}

/** HAVE A LOOK AT THE LIBRARY Animate on Scroll */

/** >>>>
 * window.innerHeight represents the height of the viewport, i.e., the visible area of the web page in the browser window.

The expression (window.innerHeight / 5) divides the height of the viewport by 5. This effectively splits the viewport into five 
equal parts vertically.

Multiplying this result by 4 (* 4) takes 80% of the viewport's height (4 out of 5 parts). This effectively sets the trigger 
point to be 80% of the viewport's height from the top of the viewport.

 */
