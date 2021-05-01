// import { render, screen, cleanup } from "@testing-library/react";
import { getFilteredNotes } from "../utils";

test("first test", () => {
  expect(true).toBe(true);
});

test("should filter out the note based on the id paramter given", () => {
  const mockNotes = [
    {
      id: 1,
      title: "Notes app",
      description:
        "Create a note taking app. Integrate features such as search, progress and filters.  ",
      date: "Mar 31, 2021",
      completed: false,
      category: "work",
    },
    {
      id: 2,
      title: "First Task",
      description: "This is a description of your first card",
      date: "Mar 31, 2021",
      completed: true,
      category: "personal",
    },
  ];

  const expectedResult = [
    {
      id: 2,
      title: "First Task",
      description: "This is a description of your first card",
      date: "Mar 31, 2021",
      completed: true,
      category: "personal",
    },
  ];

  const testResult = getFilteredNotes(mockNotes, 1);

  expect(testResult).toStrictEqual(expectedResult);
});
