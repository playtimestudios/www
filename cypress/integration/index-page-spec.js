describe('Index page', () => {
  before(() => {
    cy.visit('/')
  })

  describe('Chat', () => {
    it('is visible', () => {
      cy.get('#hubspot-messages-iframe-container').should('be.visible')
    })
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

    before(() => {
      footer = () => { return cy.get('footer') }
      footer().scrollIntoView()
    })

    it('contains "Playtime Studios"', () => {
      footer().contains('Playtime Studios')
    })

    it('contains copyright notice with current year', () => {
      footer().contains(`Copyright © ${new Date().getFullYear()}`)
    })

    it('has email link', () => {
      footer().get('a[href="mailto:www@playtimestudios.com"]')
    })

    it('has LinkedIn link', () => {
      footer().get('a[href="https://www.linkedin.com/company/playtimestudios"]')
    })
  })
})
