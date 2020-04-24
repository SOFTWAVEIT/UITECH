let txtField = document.querySelector('#txtNum')
let result_region = document.querySelector('#num_to_word')

function convertToWord() {
    //get text field value
    let num = txtField.value
    num = parseInt(num)

    let word = ''
    while (num > 0) {
        let rem = num % 10

        word = digitToWord(rem)+word

        num = Math.floor(num / 10)
    }

    result_region.innerHTML = word
}//function

function digitToWord(rem)
{
    word=''
    switch (rem) {
        case 0:
            word = 'ZERO '
            break;
        case 1:
            word = 'ONE '
            break;
        case 2:
            word = 'TWO '
            break;
        case 3:
            word = 'THREE '
            break;
        case 4:
            word = 'FOUR '
            break;
        case 5:
            word = 'FIVE '
            break;
        case 6:
            word = 'SIX '
            break;
        case 7:
            word = 'SEVEN '
            break;
        case 8:
            word = 'EIGHT '
            break;
        case 9:
            word = 'NINE '
            break;
    }//switch    
    return word;
}