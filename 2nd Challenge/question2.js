let myArray= [21, 1, 5, 2, 3, 3, 4]



function findFirstDuplicate(){
    for(let i=0; i<myArray.length; i++){

        for(let j=i+1; j<myArray.length; j++ ){
    
            if(myArray[i]==myArray[j]){
                console.log(myArray[i])
                
                return;
            }
        }
    }
}


findFirstDuplicate()