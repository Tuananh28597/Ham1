function checkPrime(n){
    if(n<2) return false;
    if(n<4) return true;
    else{
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if(n%i==0) return false;
        }
        return true;
    }
}
demo1()
function demo1() {
    //so bat dau
    let i=5;
    //so luong cac so
    let count=0;
    while(count<10){
        if(checkPrime(i)){
            document.write(i);
            document.write("<br>");
            count++;
        }
        i++;
    }

}