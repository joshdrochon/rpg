import {Character} from '../src/projetscathe.js';
import {Troll} from '../src/projectscathe.js';
import {Elf} from '../src/projectscathe.js';

describe('HungryBear', function(){
  let poo = new HungryBear("Poo", 5);
  console.log(poo);

  beforeEach(function(){
    jasmine.clock().install();
  });

  afterEach(function(){
    jasmine.clock().uninstall();
  });

  it('should have a name, age, hunger level of 0 upon creation', function(){
      expect(poo.name).toEqual("Poo");
      expect(poo.age).toEqual(5);
      expect(poo.hunger).toEqual(0);
  });

  it('should have a food level lvl of 5 after 5001 ms', function(){
    jasmine.clock().tick(5001);
    expect(poo.hunger).toEqual(5);
  });


});

class person
{
  constructor()
  {
    //
  }

  yell()
  {
    console.log("Yell");
  }
}

class child extends person
{
  constructor()
  {
    //
  }

  cry()
  {
    console.log("WAHHHH");
  }
}
