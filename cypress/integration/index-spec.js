describe('Index', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  describe('main', () => {
    let main

    beforeEach(() => {
      main = () => { return cy.get('main') }
    })

    it('has welcome message', () => {
      main()
        .get('h1')
        .should('contain', 'Welcome to Next.js!')
    })

    it('has getting starting message', () => {
      main()
        .contains('Get started by editing pages/index.js')
    })

    it('has card linking to Documentation', () => {
      main()
        .get('a[href="https://nextjs.org/docs"]')
        .get('h2')
        .contains('Documentation')
    })

    it('has card linking to Learn', () => {
      main()
        .get('a[href="https://nextjs.org/learn"]')
        .get('h2')
        .contains('Learn')
    })

    it('has card linking to Examples', () => {
      main()
        .get('a[href="https://github.com/zeit/next.js/tree/master/examples"]')
        .get('h2')
        .contains('Examples')
    })

    it('has card linking to Deploy', () => {
      main()
        .get('a[href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"]')
        .get('h2')
        .contains('Deploy')
    })

  })

  describe('footer', () => {
    let footer

    beforeEach(() => {
      footer = () => { return cy.get('footer') }
    })

    it('has link to Vercel', () => {
      footer()
        .get('a[href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"]')
        .scrollIntoView()
        .contains('Powered by')
        .find('img[src*="/vercel.svg"]')
    })
  })
})
