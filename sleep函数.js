const sleep = (word,ms) => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log(word);
        },ms);
    })
}

sleep('hello',1000)