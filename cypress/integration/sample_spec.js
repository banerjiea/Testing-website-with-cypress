describe("My First Test", () => {
  it("clicks the link", () => {
    cy.visit("https://theqalead.com");

    cy.contains("LOGIN").click();

    cy.url().should("include", "/login/");

    cy.get("#user_login")
      .type("soubhik.hzs@gmail.com")
      .should("have.value", "soubhik.hzs@gmail.com");

    cy.get("#user_pass")
      .type("CypressTest")
      .should("have.value", "CypressTest");

    cy.get("#meprmath_quiz").type("16").should("have.value", "16");

    cy.contains("Log In").click();
  });
});
