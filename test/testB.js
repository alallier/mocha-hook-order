describe('Test B', function() {

  before(function() {
    console.log('Test B: Before');
  })

  after(function() {
    console.log('Test B: After')
  })

  beforeEach(function() {
    console.log('Test B: Before Each');
  })

  afterEach(function() {
    console.log('Test B: After Each');
  })

  it('Test B.1', function() {

  });

  it('Test B.2', function() {

  });
});
