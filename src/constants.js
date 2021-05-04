import moment from "moment";

export const Items = () => [
  {
    id: 1,
    title: "Notes apps",
    description:
      "Create a note taking app. Integrate features such as search, progress and filters.  ",
    date: moment("Apr 19 2021").format("ll"),
    completed: false,
    category: "Work",
  },
  {
    id: 2,
    title: "First Task",
    description: "This is a description of your first card",
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
