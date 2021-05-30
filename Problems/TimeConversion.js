function timeConversion(str){
    let arr = str.split(':')

    let hour = arr[0]
    let min  = arr[1]
    let sec  = arr[2].slice(0,2)
    let mode = arr[2].slice(2)

    let newStr

   if(mode === 'AM'){
       if(hour === '12') hour = '00'     
   }else{
       if(hour !== '12'){
           hour = String(Number(hour) + 12)
       } 
   }
   newStr = `${hour}:${min}:${sec}`
   return newStr
      
}

