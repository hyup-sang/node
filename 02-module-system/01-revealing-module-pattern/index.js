const myMoudle = (() => {
  const privateFoo = () => {};
  const privateBar = [];

  const exported = {
    publicFoo: () => {},
    publicBar: () => {},
  };

  return exported;
})();

console.log(myMoudle);
console.log(myMoudle.privateFoo, myMoudle.privateBar);
