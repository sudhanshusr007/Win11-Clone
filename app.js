let h,mi,d,m,y;
setTimeout(()=>{
    a = new Date();
    let h = a.getHours();
    mi = a.getMinutes();
    d = a.getDate();
    m = a.getMonth();
    y = a.getFullYear();
    document.getElementById('time').innerHTML = h +" : "+mi;
    document.getElementById('date').innerHTML = d + "-"+(m+1)+"-"+y;
},1000)