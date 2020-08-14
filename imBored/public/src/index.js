var antonymSearchInput = document.getElementById('antonymSearchInput')
var antonymSearch = document.getElementById('antonymSearch')

var synonymSearchInput = document.getElementById('synonymSearchInput')
var synonymSearch = document.getElementById('synonymSearch')


var resultsDiv = document.getElementById('resultsDiv')
var resultsHeader = document.getElementById('resultsHeader')
var resultsList = document.getElementById('resultsList')




var definitionsDiv = document.getElementById('definitionsDiv')
var resultsHeader = document.getElementById('resultsHeader')
var definitionsList = document.getElementById('definitionsList')


var allSynonyms = (word)=>{
   
    fetch(`https://dictionaryapi.com/api/v3/references/thesaurus/json/${word}?key=0f4b5a19-bbc1-4e23-966f-b5d683fa4ef7`).then((response)=>{
       
        response.json().then((data)=>{
            console.log(data)
            var  synonymArray =[]
            var shortDefArray =[]
            data.forEach(element => {
             if (element){
                synonymArray.push({element})
                shortDefArray.push({element})
             }   
             
            });

            resultsList.innerHTML =``
            definitionsList.innerHTML =``
            resultsHeader.innerHTML = `SOME SYNONYMS FOR<br>---${synonymSearchInput.value.toUpperCase()}---`
            definitionsHeader.innerHTML = `SOME DEFINITIONS FOR<br>---${synonymSearchInput.value.toUpperCase()}---`
            
            var synonyms = synonymArray[0].element.meta.syns
            var shortDefs = shortDefArray[0].element.shortdef

            var i = 0    
            for(i;i<synonyms.length;i++){
             synonyms[i].forEach((element)=>{
                 var li = document.createElement('li')
                 li.innerHTML=`${element}`
                 resultsList.appendChild(li)
             })
            }
            
         
            shortDefs.forEach((element)=>{
                var newli = document.createElement('newli')
                newli.innerHTML=`${element} <br>`
                newli.setAttribute('class', 'bg-secondary text-dark')
                definitionsList.appendChild(newli)
            }) 
            // console.log(ddw[0].element.meta.ants[0][0])
            // resultsDiv.appendChild(resultsList)
        })
    })
    
}


var allAntonyms = (word)=>{
   
    fetch(`https://dictionaryapi.com/api/v3/references/thesaurus/json/${word}?key=0f4b5a19-bbc1-4e23-966f-b5d683fa4ef7`).then((response)=>{
       
        response.json().then((data)=>{
            console.log(data)
            var antonymArray =[]
            var shortDefArray =[]
            data.forEach(element => {
             if (element){
                 antonymArray.push({element})
                shortDefArray.push({element})
             }   
             
            });

            resultsList.innerHTML =``
            definitionsList.innerHTML =``
            resultsHeader.innerHTML = `SOME ANTONYMS FOR<br>---${antonymSearchInput.value.toUpperCase()}---`
            definitionsHeader.innerHTML = `SOME DEFINITIONS FOR<br>---${antonymSearchInput.value.toUpperCase()}---`
            var antonyms = antonymArray[0].element.meta.ants
            var shortDefs = shortDefArray[0].element.shortdef

           for(i=0;i<antonyms.length;i++){
            antonyms[i].forEach((element)=>{
                var li = document.createElement('li')
                li.setAttribute('class', 'bg-dark text-success')
                li.innerHTML=`${element}`
                resultsList.appendChild(li)
            })
           }

           shortDefs.forEach((element)=>{
            var newli = document.createElement('li')
            newli.innerHTML=`${element} <br>`
            definitionsList.appendChild(newli)
        })
 
   console.log('shortdefs', shortDefs)      
           
            // console.log(ddw[0].element.meta.ants[0][0])
            // resultsDiv.appendChild(resultsList)
        })
    })
    
}

antonymSearch.addEventListener('click', (e)=>{
    e.preventDefault()
    allAntonyms(antonymSearchInput.value)
    

})

synonymSearch.addEventListener('click', (e)=>{
    e.preventDefault()
    allSynonyms(synonymSearchInput.value)
    
})


