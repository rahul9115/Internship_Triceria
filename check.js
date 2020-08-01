function createMarkup() {
    if (typeof createMarkup.counter == 'undefined') {
        createMarkup.counter = 0;
    }
    createMarkup.counter++;
    console.log(createMarkup.counter)
}
createMarkup();
createMarkup();
createMarkup();