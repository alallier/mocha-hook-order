describe.only('Test C', function() {
  var testVar = 'Some test var is defined';

  before(function(done) {
    if (testVar) {
      console.log('Error Case')
      throw 'This before hook failed'
    }
    else {
      console.log('Success Case');
      done();
    }

    console.log('Test C: Before');
  })

  it('Test C.1', function() {

  });
});
