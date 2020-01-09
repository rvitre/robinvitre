const inView = (DOMelement) => {
    // get window height
    let windowHeight = window.innerHeight;
    // get number of pixels that the document is scrolled
    let scrollY = window.scrollY || window.pageYOffset;
    // get element height
    let elementHeight = DOMelement.clientHeight;

    // get current scroll position (distance from the top of the page to the bottom of the current viewport)
    let scrollPosition = scrollY + windowHeight + elementHeight;
    // get element position (distance from the top of the page to the bottom of the element)
    let elementPosition = DOMelement.getBoundingClientRect().top + scrollY + elementHeight;

    // is scroll position greater than element position? (is element in view?)
    if (scrollPosition > (elementPosition + 40)) {
        return true;
    }

    return false;
}


export { inView };