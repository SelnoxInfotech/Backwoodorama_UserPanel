
function FirstLetterCaps(str){
    const text = str.toLowerCase()
     .split(' ')
     .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
     .join(' ');
     return text


 }

export {FirstLetterCaps}
 
export function modifystr(str) {
    str = str.replace(/[^a-zA-Z0-9/ ]/g, "-");
    str = str.trim().replaceAll(' ', "-");
    let a = 0;
    while (a < 1) {
        if (str.includes("--")) {
            str = str.replaceAll("--", "-")
        } else if (str.includes("//")) {
            str = str.replaceAll("//", "/")
        } else if (str.includes("//")) {
            str = str.replaceAll("-/", "/")
        } else if (str.includes("//")) {
            str = str.replaceAll("/-", "/")
        } else {
            a++
        }
    }

    return str.toLowerCase()
}
function isShopOpen(storeDetails){
    let done = false
    let ans = false
    var date = new Date();
    const easternTime = date.toLocaleString("en-US", {timeZone: "America/New_York"})
    let day = new Date(easternTime)
    storeDetails[0]?.Hours !== null && storeDetails[0]?.Hours.forEach((items , index)=>{
         
       if(!done){
            if(index === day.getDay()-1){
                items.Open.forEach((item)=>{
                    if( new Date(day).getHours() > item.Time1.split(":")[0] ){   
                            if( new Date(day).getHours() < item.Time2.split(":")[0]){
                                ans= true  
                                done =true       
                            }else if(new Date(day).getHours() === item.Time2.split(":")[0] && new Date(day).getMinutes() < item.Time2.split(":")[1] ){
                                ans= true 
                                done =true       
                            }    
                    }else  if( new Date(day).getHours() === item.Time1.split(":")[0] &&  new Date(day).getMinutes() < item.Time1.split(":")[1] ){   
                        if( new Date(day).getHours() < item.Time2.split(":")[0]){
                            ans= true  
                            done =true       
                        }else if(new Date(day).getHours() === item.Time2.split(":")[0] && new Date(day).getMinutes() < item.Time2.split(":")[1] ){
                            ans= true 
                            done =true       
                        }    
                }
                })
            }
       }
    })
     return ans
}
export {isShopOpen}