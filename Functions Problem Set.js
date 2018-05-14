// isEven()

function isEven(x) {
  if(x%2 == 0) {
    return true;
  }else
    return false;
}

isEven(4); //true
isEven(21); //false
isEven(68); //true
isEven(333); //false

// colts shorter version
// function isEven(num) {
//   return num % 2 == 0;
// }


// factorial()
function factorial(x) {
  if(x == 0 || x == 1)
  return 1;

  for(var i = x -1; i>=1; i--) {
    x = x*i;
  }
  return x;
}

factorial(5);
factorial(2);
factorial(10);
factorial(0);

// kebabToSnake()
function kebabToSnake(str) {
  var string = str.replace(/-/g,"_");
  return string;
}

kebabToSnake("hello-world"); //"hello_world"
kebabToSnake("dogs-are-awesome"); //"dogs_are_awesome"
kebabToSnake("blah"); //"blah"


