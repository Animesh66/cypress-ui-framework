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
          cy.visit('/', { timeout: 60000 })
          stabilizeUI()
        })
  
        it(`Homepage - full page and key elements (${vp.name})`, () => {
          cy.visit(pages.home, { timeout: 60000 })
  
          cy.get('div.header', { timeout: 20000 }).should('be.visible')
          cy.get('.header-logo img', { timeout: 20000 }).should('be.visible')
          cy.get('form#small-search-box-form', { timeout: 20000 }).should('be.visible')
          cy.get('ul.top-menu', { timeout: 20000 }).should('exist')
  
          // Full page
          cy.compareSnapshot(`home-full-${vp.name}`, 0.1)
  
          // Key elements
          cy.get('div.header').compareSnapshot(`home-header-${vp.name}`, 0.1)
          cy.get('.header-logo img').compareSnapshot(`home-logo-${vp.name}`, 0.1)
          cy.get('form#small-search-box-form').compareSnapshot(`home-search-${vp.name}`, 0.1)
          cy.get('div.footer').compareSnapshot(`home-footer-${vp.name}`, 0.1)
        })
  
        it(`Login - full page and key elements (${vp.name})`, () => {
          cy.visit(pages.login, { timeout: 60000 })
  
          cy.get('h1', { timeout: 20000 }).should('contain.text', 'Login')
          cy.get('form#returningCustomerForm, form#login-form', { timeout: 20000 }).should('exist')
  
          // Full page
          cy.compareSnapshot(`login-full-${vp.name}`, 0.1)
  
          // Key elements
          cy.get('form#returningCustomerForm, form#login-form')
            .first()
            .compareSnapshot(`login-form-${vp.name}`, 0.1)
  
          cy.get('input#Email').should('exist').compareSnapshot(`login-email-${vp.name}`, 0.1)
          cy.get('input#Password').should('exist').compareSnapshot(`login-password-${vp.name}`, 0.1)
          cy.get('input.button-1.login-button, button.login-button')
            .first()
            .should('exist')
            .compareSnapshot(`login-button-${vp.name}`, 0.1)
        })
  
        it(`Registration - full page and key elements (${vp.name})`, () => {
          cy.visit(pages.register, { timeout: 60000 })
  
          cy.get('h1', { timeout: 20000 }).should('contain.text', 'Register')
          cy.get('form#register-form', { timeout: 20000 }).should('exist')
  
          // Full page
          cy.compareSnapshot(`register-full-${vp.name}`, 0.1)
  
          // Key elements
          cy.get('form#register-form').compareSnapshot(`register-form-${vp.name}`, 0.1)
          cy.get('input#FirstName').should('exist').compareSnapshot(`register-firstname-${vp.name}`, 0.1)
          cy.get('input#LastName').should('exist').compareSnapshot(`register-lastname-${vp.name}`, 0.1)
          cy.get('input#Email').should('exist').compareSnapshot(`register-email-${vp.name}`, 0.1)
          cy.get('input#Password').should('exist').compareSnapshot(`register-password-${vp.name}`, 0.1)
          cy.get('input#ConfirmPassword').should('exist').compareSnapshot(`register-confirm-${vp.name}`, 0.1)
          cy.get('input#register-button, button#register-button')
            .first()
            .should('exist')
            .compareSnapshot(`register-button-${vp.name}`, 0.1)
        })
      })
    })
  })