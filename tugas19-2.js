function sembilanBelas(){
    var bintang = "*****";
    var x=1;
        for(var i=1; i<30;i++){
            console.log(bintang.repeat(x));
            x=i+4;
            i=x
        }
        for(var i=20; i>=0;i=i-5){
            if(i==0){
                console.log(bintang.repeat(1));
            }else{
                console.log(bintang.repeat(i));
            }
            
        }
    }

sembilanBelas()