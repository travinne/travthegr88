// Write your solution here!

const cats =['milo','otis','garfield'];

escribe('index.js', function () {
    describe('cats', function () {
      it('is assigned an initial value of ["Milo", "Otis", "Garfield"]', function () {
        expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
      });
    });
  
    describe('Array functions', function () {
      beforeEach(function () {
        cats.length = 0;
  
        cats.push('Milo', 'Otis', 'Garfield');
      });
  
      describe('destructivelyAppendCat(name)', function () {
        it('appends a cat to the end of the cats array', function () {
          destructivelyAppendCat('Ralph');
  
          expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield", "Ralph"]);
        });
      });