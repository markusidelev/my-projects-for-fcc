function palindrome(str) {
  
  let cleanStr = str.replace(/[\W_]/g,'').toLowerCase()
  console.log(cleanStr)
  
  
  for (let i = 0, l = cleanStr.length; i < cleanStr.length; i++,l--) {
    if (cleanStr[i] != cleanStr[l-1]) {
      return false
    }
    
  }
  return true
}

console.log(

  palindrome("almostomla")
)