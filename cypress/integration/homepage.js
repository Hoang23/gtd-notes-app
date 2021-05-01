describe("renders the main page with functionality", () => {
  it("renders correctly", () => {
    cy.visit("/");
    // cy.get("#container").should("exist");
  });

  it("adds a new note", () => {
    cy.visit("/");
    /* ==== Generated with Cypress Studio ==== */
    cy.get(
      ".makeStyles-ActionButtons-4 > :nth-child(2) > div > .MuiButtonBase-root > .MuiButton-label"
    ).click();
    cy.get(".makeStyles-titleInputField-21").clear();
    cy.get(".makeStyles-titleInputField-21").type("Languages to learn");
    cy.get(".makeStyles-selectInputField-23").select("Work");
    cy.get(".makeStyles-descriptionInputField-22").click();
    cy.get(".makeStyles-descriptionInputField-22").type("C#, Golang");
    cy.get('[type="submit"] > .MuiButton-label').click();
    /* ==== End Cypress Studio ==== */
    cy.findByText("Languages to learn").should("exist");
  });

  it("edit a note", () => {
    // cy.visit("/");
    /* ==== Generated with Cypress Studio ==== */
    cy.get(
      ":nth-child(1) > .MuiPaper-root > .MuiCardContent-root > .makeStyles-titleContainer-32 > .MuiGrid-grid-xs-3 > .MuiGrid-root > :nth-child(1) > .MuiSvgIcon-root"
    ).click();
    cy.get(".makeStyles-descriptionInputField-46").click();
    cy.get(".makeStyles-descriptionInputField-46").type(
      " & asp.net framework. "
    );
    cy.get('[type="submit"] > .MuiButton-label').click();
    /* ==== End Cypress Studio ==== */
  });

  it("delete a note", () => {
    /* ==== Generated with Cypress Studio ==== */
    // cy.visit('http://localhost:3000/');
    cy.get(
      ":nth-child(2) > .MuiPaper-root > .MuiCardContent-root > .makeStyles-titleContainer-32 > .MuiGrid-grid-xs-3 > .MuiGrid-root > :nth-child(2) > .MuiSvgIcon-root > path"
    ).click();
    cy.get(":nth-child(3) > .MuiButton-label").click();
    /* ==== End Cypress Studio ==== */
  });
});
