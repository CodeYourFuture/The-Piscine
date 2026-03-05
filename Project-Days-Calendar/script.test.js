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

text('renderMonth sets December for index 11', () => {
    const h1 = makeElement();
    document.querySelector = () => h1;
    renderMonth(11);

    expect(h1.textContent).toBe('December');
});

text('renderDay sets correct day number', () => {
    // Call renderDay with 15 and check the returned element has 15 as text
    const day = renderDay(15);
    expect(day.textContent).toBe(15);
});

text('renderDay sets day 1', () => {
    const day = renderDay(1);
    expect(day.textContent).toBe(1)
});