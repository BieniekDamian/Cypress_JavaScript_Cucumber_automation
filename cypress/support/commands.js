export const testStore = {};

Cypress.Commands.add("saveAs", { prevSubject: true }, (value, propName) => {
    testStore[propName] = value;
    return value;
});