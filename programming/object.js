https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects


function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

var mycar = new Car('Eagle', 'Talon TSi', 1993);


const object1 = {
  a: 1,
  b: 2,
  c: 3
};

const object2 = Object.assign({}, object1);

console.log(object2.c);
// expected output: 3


var myCar = new Object();
myCar.make = 'Ford';
myCar.model = 'Mustang';


myCar.year = 1969;

myCar['make'] = 'Ford';
myCar['model'] = 'Mustang';
myCar['year'] = 1969;

var propertyName = 'make';
myCar[propertyName] = 'Ford';

propertyName = 'model';
myCar[propertyName] = 'Mustang';


// four variables are created and assigned in a single go, 
// separated by commas
var myObj = new Object(),
    str = 'myString',
    rand = Math.random(),
    obj = new Object();

myObj.type              = 'Dot syntax';
myObj['date created']   = 'String with space';
myObj[str]              = 'String value';
myObj[rand]             = 'Random Number';
myObj[obj]              = 'Object';
myObj['']               = 'Even an empty string';

console.log(myObj);

function showProps(obj, objName) {
  var result = '';
  for (var i in obj) {
    // obj.hasOwnProperty() is used to filter out properties from the object's prototype chain
    if (obj.hasOwnProperty(i)) {
      result += objName + '.' + i + ' = ' + obj[i] + '\n';
    }
  }
  return result;
}

function listAllProperties(o) {
	var objectToInspect;     
	var result = [];
	
	for(objectToInspect = o; objectToInspect !== null; objectToInspect = Object.getPrototypeOf(objectToInspect)) {  
      result = result.concat(Object.getOwnPropertyNames(objectToInspect));  
	}
	
	return result; 
}


objectName.methodname = function_name;

//Defining methods
var myObj = {
  myMethod: function(params) {
    // ...do something
  }

  // OR THIS WORKS TOO

  myOtherMethod(params) {
    // ...do something else
  }
};