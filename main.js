
// 문자를 표현할 때 ` 입력하면 변수에 enter값이 들어가도 error가 안남

let str = `
010-1234-5678
test@gmail.com
http://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
동해물과 백두산이 마르고 닳도록
d`

const h = `  the hello  world    !   

`


console.log(str.match(/.{1,}(?=@)/g))
console.log(str.match(/(?<=@).{1,}/g))
/*
// 공백제거
console.log(h.replace(/\s/g,''))
// 모든 한글찾아라
console.log(str.match(/[가-힣]{1,}/g))

// 숫자만 찾고 붙어있는 경우
//console.log(str.match(/[0-9]{1,}/g))
//console.log(str.match(/[fox]/g))

/*
console.log(str.match(/\b\w{2,3}\b/g))
/*
console.log(str.match(/h..p/g))


//
console.log(str.match(/^t|^T/gm))

/*
console.log(str.match(/d$/gm))

/*
// /\.$/g 문장 끝에 . 이 있는지 찾는 식
// m 멀리라인 옵션 문자열에서 끝에값만 보는게 아니라 중간에 엔터 값을 찾는 듯
const regexp = /\.$/gim
console.log(str.match(regexp))

/*
const regexp = /fox/gi
//console.log(regexp.test(str))
//console.log(str.replace(regexp,'AAA'))
str = str.replace(regexp,'AAA')
console.log(str)



/*
//생성자 방식
//const regexp = new RegExp('the','gi')
//console.log(str.match(regexp))

//리터럴 방식
const regexp = /the/gi
console.log(str.match(regexp))

*/