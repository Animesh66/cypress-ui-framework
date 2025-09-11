// cypress/visual-regression/visualRegression.spec.ts

// Visual regression for Demo Web Shop homepage, login, and registration
// across desktop, tablet, and mobile viewports using cypress-visual-regression.
//
// Viewports:
// - Desktop: 1920x1080
// - Tablet: iPad-2 (768x1024)
// - Mobile: iPhone-6 (375x667)

type ViewportSpec = {
    name: 'desktop' | 'tablet' | 'mobile'
    width?: number
    height?: number
    preset?: Cypress.ViewportPreset
  }
  
  const viewports: ViewportSpec[] = [
    { name: 'desktop', width: 1920, height: 1080 },
    { name: 'tablet', preset: 'ipad-2' },
    { name: 'mobile', preset: 'iphone-6' },
  ]
  
  const pages = {
    home: '/',
    login: '/login',
    register: '/register',
  }
  
  const setViewport = (vp: ViewportSpec) => {
    if (vp.preset) {
      cy.viewport(vp.preset)
    } else if (vp.width && vp.height) {
      cy.viewport(vp.width, vp.height)
    }
  }
  
  // Stabilize dynamic areas (if needed)
  const stabilizeUI = () => {
    cy.document().then((doc) => {
      const style = doc.createElement('style')
      style.innerHTML = `
        * { transition: none !important; animation: none !important; }
        .nivoSlider, .carousel, .slick-slider { animation: none !important; }
      `
      doc.head.appendChild(style)
    })
    cy.wait(500)
  }
  
  describe('Visual Regression - Demo Web Shop', () => {
    viewports.forEach((vp) => {
      context(`Viewport: ${vp.name}`, () => {
        beforeEach(() => {
          setViewport(vp)
          cy.visit('/')
          stabilizeUI()
        })
  
        it(`Homepage - full page and key elements (${vp.name})`, () => {
          cy.visit(pages.home);
          cy.get('.header').should('be.visible');
          cy.compareSnapshot(`home-full-${vp.name}`, 0.1);
          cy.get('.header').compareSnapshot(`home-header-${vp.name}`, 0.1);
        })
  
        it(`Login - full page and key elements (${vp.name})`, () => {
          cy.visit(pages.login)
          cy.get('.header').should('be.visible');
          cy.get('h1').should('contain.text', 'Login');
          cy.compareSnapshot(`login-full-${vp.name}`, 0.1);
          cy.get('.header').compareSnapshot(`home-header-${vp.name}`, 0.1);
        })
  
        it(`Registration - full page and key elements (${vp.name})`, () => {
          cy.visit(pages.register)
          cy.get('.header').should('be.visible');
          cy.get('h1').should('contain.text', 'Register');
          cy.compareSnapshot(`register-full-${vp.name}`, 0.1);
          cy.get('.header').compareSnapshot(`home-header-${vp.name}`, 0.1);
        })
      })
    })
  })