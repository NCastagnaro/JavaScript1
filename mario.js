let height =8;
let x = "x";        //Set a variable forx
let space = "\xa0"; //This allows you to create a variable for a space

//We start at i=1, so that way when we include the spaces for each row, it is just height-i, which is neater than if we did height-i-1, if we started at i=0.
//To keep the x on the same line we just added it. To repeat a certain amount of times you need to use the repeat method. You cannot say space*height-i.
for(let i = 1; i <= height;i++){
        console.log(space.repeat(height-i)+x.repeat(i));
    }

    //Output:

    //       X
    //      XX
    //     XXX
    //    XXXX
    //   XXXXX
    //  XXXXXX
    // XXXXXXX
    //XXXXXXXX







