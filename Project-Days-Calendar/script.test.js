const makeElement = () => ({
    textContent: '',
    innerHTML: '',
    value: '',
    selected: false,
    classList: { add: () => {} },
    appendChild: () => {},
    addEventListener: () => {},
    onchange: null,
})

global.document = {
    querySelector: () => makeElement(),
    createElement: () => makeElement(),
};

const { renderMonth, renderYear, renderDay } = await import('./script.js')

text('renderMonth set January for index 0', () => {
    const h1 = makeElement();
    document.querySelector = () => h1;
    renderMonth(0);

    expect  (h1.textContent).toBe('January');
});