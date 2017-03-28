before(function() {
  console.log('Global: Before');
})

after(function() {
  console.log('Global: After')
})

beforeEach(function() {
  console.log('Global: Before Each');
})

afterEach(function() {
  console.log('Global: After Each');
})
