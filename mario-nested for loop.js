//Mario Backwards Pyramid with Nested for loops
function mario(h)
    let space = " ";
    let star = "*";
    for (let i=0; i<h; i++){
        let z = (space.repeat(h-i-1));
      for(let j = 0; j <1; j++){
          console.log(z + star.repeat(i+1));
      }
    }
}
mario(8);



//h = 8
//       *
//      **
//     ***
//    ****
//   *****
//  ******
// *******
//********
