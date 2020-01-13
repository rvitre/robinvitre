const scrollToRef = (ref) => {
    window.scrollTo(0, ref.current.offsetTop + 500);
}

const scrollToBottom = () => {
    window.scrollTo(0, document.body.scrollHeight);
}

const scrollToId = (id) => {
    let ref = document.getElementById(id);
    window.scrollTo(0, ref.offsetTop + 500);
}

export { scrollToRef, scrollToId, scrollToBottom };