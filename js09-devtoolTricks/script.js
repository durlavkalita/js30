const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];


const p = document.querySelector('p');
p.style.color = '#BADA55';
p.style.fontSize = '50px';


// Regular
console.log('hello');
// Interpolated
console.log('hello %s string', 'ok');
// Styled
console.log('%c some text','font-size:50px; background:blue');
// warning!
console.warn('warning');
// Error :|
console.error('error occured');
// Info
console.info('giving info');
// Testing
console.assert(p.classList.contains('any'), 'wrong');
// clearing
console.clear();
// Viewing DOM Elements
console.log(p);
console.dir(p);
// Grouping together
dogs.forEach(dog => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name} of ${dog.age}`)
  console.log(`${dog.name} is ${dog.age*7} in human age`) 
  console.groupEnd(`${dog.name}`);
});
// counting
console.count('hello');
console.count('hello');
console.count('world');
console.count('hello');
console.count('world');
// timing
console.time('fetching data');
fetch('https://api.github.com/users/durlavk')
.then(data=>data.json())
.then(data=>{
  console.timeEnd('fetching data');
  console.log(data);
})

console.table(dogs);
