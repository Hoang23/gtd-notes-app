import moment from "moment";

export const Items = () => [
  {
    id: 1,
    title: "Notes apps",
    description:
      "Create a note taking app. Integrate features such as search, sort by date/completion, progress, filters and form validation. Unit test with Jest and e2e test with Cypress.  Styling with Material UI and look to add Redux for learning purposes.",
    date: moment("Apr 19 2021").format("ll"),
    completed: false,
    category: "Work",
  },
  {
    id: 2,
    title: "Long title that surpasses the width of the box",
    description:
      "This is a really really  really loooooongoooooo description, that extends outside the boundaries of this box. You can click the edit icon to see the rest of the contents as there is not enough space to fit on the card.  ",
    date: moment("Mar 31 2021").format("ll"),
    completed: true,
    category: "Personal",
  },
  {
    id: 3,
    title: "Add another card",
    description: "Click add task to add another card",
    date: moment("Mar 31 2021").format("ll"),
    completed: false,
    category: "Home",
  },
  {
    id: 4,
    title: "Shopping list",
    description: "milk, coffee, pasta",
    date: moment("Apr 22 2021").format("ll"),
    completed: true,
    category: "Home",
  },
  {
    id: 5,
    title: "John's birthday",
    description: "Buy a gift for his birthday",
    date: moment("May 4 2021").format("ll"),
    completed: false,
    category: "Personal",
  },
];
