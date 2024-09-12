describe("Assertions", () => {
  it("URL and Title Assertions", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.url()
      .should("include", "orangehrmlive")
      .and(
        "eq",
        "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
      )
      .and("contain", "orangehrmlive")
      .and("not.contain", "google");

    cy.title()
      .should("include", "OrangeHRM")
      .and("eq", "OrangeHRM")
      .and("contain", "HRM");

    cy.get(".orangehrm-login-branding > img").should("be.visible").and("exist");

    cy.xpath("//a").should("have.length", 5);

    cy.get("input[placeholder='Username']")
      .type("Admin")
      .should("have.value", "Admin");
  });

  it("Explicit Assertions", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get("input[placeholder='Username']").type("Admin");
    cy.get("input[placeholder='Password']").type("admin123");
    cy.get("button[type='submit']").click();
    let name = "Bharat";
  });
});
