// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMakerClass {
  constructor(length, width, height) {
    this.length = length;
    this.width = width;
    this.height = height;
  }

  volume() {
    return this.length * this.width * this.height;
  }

  surfaceArea() {
    return (
      2
      * (this.length * this.width
         + this.length * this.height
         + this.width * this.height)
    );
  }
}

const cuboidClass = new CuboidMakerClass(4, 5, 5);

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboidClass.volume()); // 100
console.log(cuboidClass.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMakerClass {
// I initially put the constructor here but as I'm not adding any attributes for CubeMaker it says it's useless so I've taken it out.
// If I were to add extra properties to the CubeMaker that CuboidMaker didn't have, I'd use the constructor function.

  cubeVolume() { return this.width ** 3; }

  cubeSurfaceArea() {return 6 * (this.width ** 2); }
}

const cube = new CubeMaker(4, 4, 4);

// CubeMaker Tests
console.log(cube.cubeVolume());
console.log(cube.cubeSurfaceArea());
