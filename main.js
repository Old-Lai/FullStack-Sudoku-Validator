let puzzle = [[ 8,9,5,   7,4,2,   1,3,6 ],
              [ 2,7,1,   9,6,3,   4,8,5 ],
              [ 4,6,3,   5,8,1,   7,9,2 ],

              [ 9,3,4,   6,1,7,   2,5,8 ],
              [ 5,1,7,   2,3,8,   9,6,4 ],
              [ 6,8,2,   4,5,9,   3,7,1 ],

              [ 1,5,9,   8,7,4,   6,2,3 ],
              [ 7,4,6,   3,2,5,   8,1,9 ],
              [ 3,2,8,   1,9,6,   5,4,7 ]];

let puzzleCopy = [[ 8,9,5,   7,4,2,   1,3,6 ],
                  [ 2,7,1,   9,6,3,   4,8,5 ],
                  [ 4,6,3,   5,8,1,   7,9,2 ],

                  [ 9,3,4,   6,1,7,   2,5,8 ],
                  [ 5,1,7,   2,3,8,   9,6,4 ],
                  [ 6,8,2,   4,5,9,   3,7,1 ],

                  [ 1,5,9,   8,7,4,   6,2,3 ],
                  [ 7,4,6,   3,2,5,   8,1,9 ],
                  [ 3,2,8,   1,9,6,   5,4,7 ]];

let p8zzle = [[ 8,9,5,   7,4,2,   1,3,6 ],
              [ 8,7,1,   9,6,3,   4,8,5 ],
              [ 4,6,3,   5,8,1,   7,9,2 ],

              [ 9,3,4,   6,1,7,   2,5,8 ],
              [ 5,1,7,   2,3,8,   9,6,4 ],
              [ 6,8,2,   4,5,9,   3,7,1 ],

              [ 1,5,9,   8,7,4,   6,2,3 ],
              [ 7,4,6,   3,2,5,   8,1,9 ],
              [ 3,2,8,   1,9,6,   5,4,7 ]];

function getRow(inPuzzle, rowNum){
    return inPuzzle[rowNum];
}

function getColumn(inPuzzle, colNum){
    let col = []
    for(const row of inPuzzle){
        col.push(row[colNum]);
    }
    return col;
}

function getSection(inPuzzle, xCoor, yCoor){
    let sec = []
    for(let row = 3 * yCoor; row < (3 * yCoor + 3); row++){
        for(let col = 3 * xCoor; col < (3 * xCoor + 3); col++){
            sec.push(getColumn(inPuzzle, col)[row]);
        }
    }
    return sec;
}

function includes1to9(inArr){
    for(let i = 1; i <= 9; i++){
        if(!inArr.includes(i)){
            return false;
        }
    }
    return true;
}

function sudokuIsValid(inPuzzle){
    //loops through row and colum (assumed provided puzzle is in a correct format)
    for(let i = 0; i < inPuzzle.length; i++){
        //if either row or column does not include 1 to 9, return false
        if(!includes1to9(getRow(inPuzzle, i) || !includes1to9(getCol(inPuzzle, i)))){
            return false;
        }
    }

    //loop through section x -> 0 to 2, y -> 0 to 2
    for(let x = 0; x < 3; x++){
        for(let y = 0; y < 3; y++){
            if(!includes1to9(getSection(inPuzzle, x, y))){
                return false;
            }
        }
    }

    return true;
}

function isSame(inPuzzle1, inPuzzle2){
    //check if row size and col size are the same
    if(inPuzzle1.length !== inPuzzle2.length || inPuzzle1[0].length !== inPuzzle2[0].length){
        return false;
    }

    //compare elements one by one (they are the same size now)
    for(let row = 0; row < inPuzzle1.length; row++){
        let rowArr1 = getRow(inPuzzle1, row);
        let rowArr2 = getRow(inPuzzle2, row);
        for(let i = 0; i < inPuzzle1[0].length; i++){
            if(rowArr1[i] !== rowArr2[i]){
                return false;
            }
        }
    }

    return true;
}

//function to print puzzle in a nice way
function print(inPuzzle, puzzleName){
    let printStr = '';
    let count1 = 0;
    let count2 = 0;
    console.log('----------' + puzzleName + '----------')
    for(let row = 0; row < inPuzzle.length; row++){
        let rowArr = getRow(inPuzzle, row);
        for(let i = 0; i < inPuzzle[0].length; i++){
            count2++;
            printStr += rowArr[i] + ' ';
            if(count2 === 3){
                printStr += ' ';
                count2 = 0;
            }
        }
        if(count1 === 3){
            console.log('\n');
            count1 = 0;
        }
        console.log(printStr);
        printStr = ''
        count1++;
    }
    console.log('------------------------------')
}

//Where we actually call the functions
//print(puzzle, 'puzzle');
//print(puzzleCopy, 'puzzleCopy');
//print(p8zzle, 'p8zzle');
console.log('----------sudokuIsValid test----------')
console.log(sudokuIsValid(puzzle));
console.log(sudokuIsValid(puzzleCopy));
console.log(sudokuIsValid(p8zzle));
console.log('----------isSame test----------')
console.log(isSame(puzzle, puzzleCopy));
console.log(isSame(puzzle, p8zzle));
