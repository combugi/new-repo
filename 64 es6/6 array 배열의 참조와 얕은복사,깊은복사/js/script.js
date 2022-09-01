var arr = [4, 5, 8]
var arrCopy = [] //arr[1,2,3] 복사
//arrCopy1=arr1 //참조
for (i = 0; i < arr.length; i++) {
  arrCopy.push(arr[i])
}

/* 
arrCopy.push[arr[0]]//arr[1,2]
arrCopy.push[arr[1]]//arr[1,2]
arrCopy.push[arr[2]]//arr[1,2] */

/* var arr2=[
  ['a','b','c'],
  ['가','나','다'],
  [1,2,3],
]
var arr2Copy =[
  ['a','b','c']
] */

/* ------------------------------------------------------------------------- */

var arr2 = [
  ['a', 'b', 'c'], //arr2[0]
  ['가', '나', '다'],
  [1, 2, 3],

]

var arr2Copy = []
for (i = 0; i < arr2.length; i++) {
  var arr = []
  for (j = 0; j < arr2[i].length; j++) {
    arr.push(arr2[i][j]) //arr2 : [a,b,c]
  }//arr2[0][i] box
  arr2Copy.push(arr)
}

console.log(arr2Copy)
/* -----------------------deep copy---------------------------------------------------- */















//shellow copy