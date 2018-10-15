describe("<PinContainer />", () => {
  it("should visit the page", () => {
    cy.visit("/");
    cy.get(".button_row:first > button:first").click();
    cy.get(".button_row:first > button:nth-child(3)").click();
    cy.get(".button_row:nth-child(2) > button:nth-child(2)").click();
    cy.get(".button_row:nth-child(3) > button:first").click();

    cy.get("#display_subheading")
      .should("have.text", "Passcode verified");
    cy.get("#svgWrapper").should("have.css", "fill")
      .and("match", /[65E53B|rgb(90, 113, 139)]/);
  });

  it("should lock for 30 seconds if wrong password entered", () => {
    cy.visit("/");
    cy.clock();
    cy.get(".button_row:first > button:first").click();
    cy.get(".button_row:first > button:first").click();
    cy.get(".button_row:first > button:first").click();
    cy.get(".button_row:first > button:first").click();
    cy.get(".button_row:first > button:first").click();
    cy.get(".button_row:first > button:first").click();
    cy.get(".button_row:first > button:first").click();
    cy.get(".button_row:first > button:first").click();
    cy.get(".button_row:first > button:first").click();
    cy.get(".button_row:first > button:first").click();
    cy.get(".button_row:first > button:first").click();
    cy.get(".button_row:first > button:first").click();

    cy.get("#display_subheading")
      .should("have.text", "Locked for 30 secs");

    cy.tick(15000);
    cy.get("#display_subheading")
      .should("have.text", "Locked for 15 secs");

    cy.tick(15000);
    cy.get("#display_subheading")
        .should("have.text", "Please enter your passcode");
  })
});
