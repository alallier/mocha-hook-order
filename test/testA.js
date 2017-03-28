describe('Test A', function() {

  before(function() {
    console.log('Test A: Before');
  })

  after(function() {
    console.log('Test A: After')
  })

  beforeEach(function() {
    console.log('Test A: Before Each');
  })

  afterEach(function() {
    console.log('Test A: After Each');
  })

  it('Test A.1', function() {

  });

  it('Test A.2', function() {

  });
});
