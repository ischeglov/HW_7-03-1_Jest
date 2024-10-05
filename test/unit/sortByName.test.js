const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    const input = [
      "Гарри Поттер",
      "Властелин Колец",
      "Волшебник изумрудного города",
    ];
    const expected = [
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ];
    const output = sorting.sortByName(input);

    expect(output).toEqual(expected);
  });
});

describe("Books names suit with the same", () => {
  it("Book names should not be sorted", () => {
    const input = [
      "Властелин Колец",
      "Властелин Колец",
      "Волшебник изумрудного города"
    ];
    const expected = [
      "Властелин Колец",
      "Властелин Колец",
      "Волшебник изумрудного города",
    ];
    const output = sorting.sortByName(input);

    expect(output).toEqual(expected);
  });
});
