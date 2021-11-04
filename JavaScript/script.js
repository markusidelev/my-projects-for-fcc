// test for FCC, Danil Sidelev, nov 2021


// ============================= Palendrome ========================

/* 

// let a = "RaceCar"

// let b = a.replace(/[\W_]/g, '').toLocaleLowerCase()
// console.log(b)

// console.log(b[2],b[b.length-3])
// console.log(b.length)



function palindrome(str) {
    let newStr = str.replace(/[\W_]/g, '').toLocaleLowerCase()
    console.log(newStr)

    for (let i = 0; i < newStr.length; i++) {
        console.log(i, newStr[i], newStr[newStr.length -1 -i])
        if(newStr[i] != newStr[newStr.length -1 -i]) {
            return false
        } 
    } 
    return true  
  }
  console.log(

      palindrome("0_0 (: /-\ :) 0-0")
  )


 */

// ========================= Roman numerals =============================


/* 

function convertToRoman(value) {
    let newNum = value
    let numArr = []

    // function that converts thousend to roman numeral
    function toThousands(number) {

        // check if number has thousends
        if ((number / 1000) >= 1) {

            // devine how many thousends is in the number, then remove thousend from the number
            let thousands = Number(newNum.toString().slice(0, 1))
            newNum = Number(newNum.toString().slice(1))

            // convert number of thousends to roman numeral
            let romanThousands = ''
            for (let index = 0; index < thousands; index++) {
                romanThousands += 'M'
            }

            // pushes thousends to numbers array
            numArr.push(romanThousands)

        } else {
            console.log('not thousands')
        }
    }

    function toHundreds(number) {

        // check if number has thousends
        if ((number / 100) >= 1) {

            // devine how many thousends is in the number, then remove thousend from the number
            let hundreds = Number(newNum.toString().slice(0, 1))
            newNum = Number(newNum.toString().slice(1))
            // console.log(hundreds)
            let romanHundreds = ''

            //checks number and convert correct roman numeral
            // 300 =ccc 400 = dc, 500 = d, 600 = dc, 700 = dcc, 800 = dccc, 900 = cm
            if (hundreds < 4) {
                for (let i = 0; i < hundreds; i++) {
                    romanHundreds += "C"
                }
            } else if (hundreds === 4) {
                romanHundreds = 'CD'
            } else if (hundreds === 5) {
                romanHundreds = 'D'
            } else if (hundreds > 5 && hundreds < 9) {
                romanHundreds = 'D'
                for (let i = 5; i < hundreds; i++) {
                    romanHundreds += "C"
                }
            } else if (hundreds === 9) {
                romanHundreds = 'CM'
            }

            // pushes hundreds to numbers array
            numArr.push(romanHundreds)

        } else {
            console.log('not hundreds')
        }
    }

    function toDozens(number) {

        // check if number has dozends
        if ((number / 10) >= 1) {

            // devine how many dozends is in the number, then remove thousend from the number
            let dozends = Number(newNum.toString().slice(0, 1))
            newNum = Number(newNum.toString().slice(1))
            // console.log(dozends)
            let romanDozends = ''

            //checks number and convert correct roman numeral
            // 30 =x 40 = xl 50= l, 60 = lx, 70 = lxx, 80 = lxx, 90 = XC
            if (dozends < 4) {
                for (let i = 0; i < dozends; i++) {
                    romanDozends += "X"
                }
            } else if (dozends === 4) {
                romanDozends = 'XL'
            } else if (dozends === 5) {
                romanDozends = 'L'
            } else if (dozends > 5 && dozends < 9) {
                romanDozends = 'L'
                for (let i = 5; i < dozends; i++) {
                    romanDozends += "X"
                }
            } else if (dozends === 9) {
                romanDozends = 'XC'
            }

            // pushes dozends to numbers array
            numArr.push(romanDozends)

        } else {
            console.log('not dozends')
        }
    }

    function toOnes(number) {

        // check if number has ones
        if ((number / 1) >= 1) {

            // devine how many ones is in the number, then remove thousend from the number
            let ones = Number(newNum.toString().slice(0, 1))
            // newNum = Number(newNum.toString().slice(1))
            console.log(ones)
            let romanOnes = ''

            //checks number and convert correct roman numeral
            // i ii iii iv v vi vii viii ix
            if (ones < 4) {
                for (let i = 0; i < ones; i++) {
                    romanOnes += "I"
                }
            } else if (ones === 4) {
                romanOnes = 'IV'
            } else if (ones === 5) {
                romanOnes = 'V'
            } else if (ones > 5 && ones < 9) {
                romanOnes = 'V'
                for (let i = 5; i < ones; i++) {
                    romanOnes += "I"
                }
            } else if (ones === 9) {
                romanOnes = 'IX'
            }

            // pushes ones to numbers array
            numArr.push(romanOnes)

        } else {
            console.log('not ones')
        }
    }

    toThousands(newNum)
    // console.log(newNum)
    toHundreds(newNum)
    // console.log(newNum)
    toDozens(newNum)
    // console.log(newNum)
    toOnes(newNum)
    // console.log(newNum)

    return numArr.join('')
}


console.log(
    convertToRoman(1110)
)


 */

//====================================== Cesar cipher =========================

/* 

function rot13(str) {

    let inputArr = str.split(' ')
    let outputArr = []


    //  cycle through each word
    for (let i = 0; i < inputArr.length; i++) {

        // new encoded word to push in array
        let word = ''

        // cycle through each letter
        for (let j = 0; j < inputArr[i].length; j++) {

            // devine if letter is from first or second half of alphabet
            if (inputArr[i].charCodeAt(j) >= 65 && inputArr[i].charCodeAt(j) <= 77) {
                //encode letter to rot13 cipher and add it to word variable
                let rotWord = String.fromCharCode(inputArr[i].charCodeAt(j) + 13)
                word += rotWord

            } else if (inputArr[i].charCodeAt(j) >= 78 && inputArr[i].charCodeAt(j) <= 90) {
                //encode letter to rot13 cipher and add it to word variable
                let rotWord = String.fromCharCode(inputArr[i].charCodeAt(j) - 13)
                word += rotWord

            } else {
                //added unencoded symbol to word variable
                let symbol = inputArr[i][j]
                word += symbol
            }
        }
        // push encoded word to array
        outputArr.push(word)
        console.log(word)
    }

    return outputArr.join(' ')
}

console.log(

    rot13("SERR PBQR PNZC!")
)

 */


// ========================== Telephone Number Validator =======================

/* 

function telephoneCheck(str) {
    let checkRegex = /^1*([\s-])?(\(\d{3}\)|\d{3})([\s-])*\d{3}([\s-])*\d{4}$/
    let m = checkRegex.exec(str)
    

    if(m === null) {
        return false
    } else {
        return true 
    }
  }
  console.log(
      telephoneCheck("555 555 5555")
  )


 */

//============================== Cash Register ======================

/* 

/
 */

