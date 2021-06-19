describe('Index page', () => {
  before(() => {
    cy.visit('/')
  })

  describe("'Title' section", () => {
    let section

    before(() => {
      section = () => { return cy.get('h1').parent() }
    })

    describe('h1', () => {
      let h1

      before(() => {
        h1 = () => { return section().find('h1') }
      })

      it('contains Playtime Studios', () => {
        h1().should('contain', 'Playtime Studios')
      })

      it('is not visible', () => {
        h1().should('not.be.visible')
      })
    })

    describe('Logo', () => {
      it('is visible', () => {
        section().find('img[src*="/logo.svg"]').should('be.visible')
      })
    })
  })

  describe("'Strap' section", () => {
    let section

    before(() => {
      section = () => { return cy.get('div.MuiTypography-h2').parent() }
    })

    it('is not visible', () => {
      section().should('not.be.visible')
    })

    context('when scrolled into view', () => {
      before(() => {
        section().scrollIntoView()
      })

      it('is visible', () => {
        section().should('be.visible')
      })
    })
  })

  describe("'Welcome' section", () => {
    let section

    before(() => {
      section = () => { return cy.get('h2').contains('Welcome').parent() }
    })

    it('is not visible', () => {
      section().should('not.be.visible')
    })

    context('when scrolled into view', () => {
      before(() => {
        section().scrollIntoView()
      })

      it('is visible', () => {
        section().should('be.visible')
      })
    })

    describe('h2', () => {
      let h2

      before(() => {
        h2 = () => { return section().find('h2') }
      })

      it("contains 'Welcome'", () => {
        h2().contains('Welcome')
      })
    })
  })

  describe("'Management' section", () => {
    let section

    before(() => {
      section = () => { return cy.get('h2').contains('Management').parent() }
    })

    it('is not visible', () => {
      section().should('not.be.visible')
    })

    context('when scrolled into view', () => {
      before(() => {
        section().scrollIntoView()
      })

      it('is visible', () => {
        section().should('be.visible')
      })
    })

    describe('h2', () => {
      let h2

      before(() => {
        h2 = () => { return section().find('h2') }
      })

      it("contains 'Management'", () => {
        h2().contains('Management')
      })
    })
  })

  describe("'UX' section", () => {
    let section

    before(() => {
      section = () => { return cy.get('h2').contains('UX').parent() }
    })

    it('is not visible', () => {
      section().should('not.be.visible')
    })

    context('when scrolled into view', () => {
      before(() => {
        section().scrollIntoView()
      })

      it('is visible', () => {
        section().should('be.visible')
      })
    })

    describe('h2', () => {
      let h2

      before(() => {
        h2 = () => { return section().find('h2') }
      })

      it("contains 'UX'", () => {
        h2().contains('UX')
      })
    })
  })

  describe("'Test' section", () => {
    let section

    before(() => {
      section = () => { return cy.get('h2').contains('Test').parent() }
    })

    it('is not visible', () => {
      section().should('not.be.visible')
    })

    context('when scrolled into view', () => {
      before(() => {
        section().scrollIntoView()
      })

      it('is visible', () => {
        section().should('be.visible')
      })
    })

    describe('h2', () => {
      let h2

      before(() => {
        h2 = () => { return section().find('h2') }
      })

      it("contains 'Test'", () => {
        h2().contains('Test')
      })
    })
  })

  describe("'Engineering' section", () => {
    let section

    before(() => {
      section = () => { return cy.get('h2').contains('Engineering').parent() }
    })

    it('is not visible', () => {
      section().should('not.be.visible')
    })

    context('when scrolled into view', () => {
      before(() => {
        section().scrollIntoView()
      })

      it('is visible', () => {
        section().should('be.visible')
      })
    })

    describe('h2', () => {
      let h2

      before(() => {
        h2 = () => { return section().find('h2') }
      })

      it("contains 'Engineering'", () => {
        h2().contains('Engineering')
      })
    })
  })

  describe("'Delivery' section", () => {
    let section

    before(() => {
      section = () => { return cy.get('h2').contains('Delivery').parent() }
    })

    it('is not visible', () => {
      section().should('not.be.visible')
    })

    context('when scrolled into view', () => {
      before(() => {
        section().scrollIntoView()
      })

      it('is visible', () => {
        section().should('be.visible')
      })
    })

    describe('h2', () => {
      let h2

      before(() => {
        h2 = () => { return section().find('h2') }
      })

      it("contains 'Delivery'", () => {
        h2().contains('Delivery')
      })
    })
  })

  describe("'Training' section", () => {
    let section

    before(() => {
      section = () => { return cy.get('h2').contains('Training').parent() }
    })

    it('is not visible', () => {
      section().should('not.be.visible')
    })

    context('when scrolled into view', () => {
      before(() => {
        section().scrollIntoView()
      })

      it('is visible', () => {
        section().should('be.visible')
      })
    })

    describe('h2', () => {
      let h2

      before(() => {
        h2 = () => { return section().find('h2') }
      })

      it("contains 'Training'", () => {
        h2().contains('Training')
      })
    })
  })

  describe("'Are you ready?' section", () => {
    let section

    before(() => {
      section = () => { return cy.get('h2').contains('Are you ready?').parent() }
    })

    it('is not visible', () => {
      section().should('not.be.visible')
    })

    context('when scrolled into view', () => {
      before(() => {
        section().scrollIntoView()
      })

      it('is visible', () => {
        section().should('be.visible')
      })
    })

    describe('h2', () => {
      let h2

      before(() => {
        h2 = () => { return section().find('h2') }
      })

      it("contains 'Are you ready?'", () => {
        h2().contains('Are you ready?')
      })
    })
  })

  describe('Footer', () => {
    let footer

    beforeEach(() => {
      footer = () => { return cy.get('footer') }
    })

    it('contains company information', () => {
      footer()
        .scrollIntoView()
        .contains('Playtime Studios')
    })
  })
})
