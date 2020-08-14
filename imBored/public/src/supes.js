var herorandomForm = document.getElementById('randomHeroSubmitForm')

var nameOfHero = null
     // appearance 
     var appearanceOfHeroGender = null
     var appearanceOfHeroHeight = null
     var appearanceOfHeroRace = null
     var appearanceOfHeroWeight = null
   // biography
 var biographyOfHeroFullName= null
var biographyOfHeroAlterEgos= null
 var  biographyOfHeroAliases= null
 var  biographyOfHeroPlaceofbirth= null
 var  biographyOfHeroFirstappearance= null
 var  biographyOfHeroPublisher= null
 
   // connections
   var connectionsOfHeroGroupAffiliations= null
  var connectionsOfHeroRelatives= null
 
  // image url
  var imageURL = null
 
 // power stats
 var powerstatsOfHeroCombat  = null
 var powerstatsOfHeroDurability  = null
 var powerstatsOfHerointeligence  = null
 var powerstatsOfHeroPower  = null
 var powerstatsOfHeroSpeed  = null
 var powerstatsOfHeroStrength  = null
 
 // work
 workOfHeroOccupation = null
 workOfHeroBase = null

var heroName = document.getElementById('heroName')
var heroAppearance = document.getElementById('heroAppearance')
var biography  = document.getElementById('heroBiography')
var connections = document.getElementById('heroConnections')
var powerstats = document.getElementById('heroPowerStats')
var heroWork = document.getElementById('heroWork')


var randomHero = document.getElementById('randomHero')

var heroInputs = document.getElementById('heroInput')

var proxyUrl = 'https://cors-anywhere.herokuapp.com/'




herorandomForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    var id = Math.floor(Math.random() * 731)
    fetch(proxyUrl + `https://superheroapi.com/api/10222266763919228/${id}`).then((blob)=>blob.json()).then((data)=>{
        console.log(data.appearance.gender)
        var nameOfHero = data.name
//         // appearance 
appearanceOfHeroGender = data.appearance.gender
appearanceOfHeroHeight = data.appearance.height[0]
appearanceOfHeroRace = data.appearance.race
appearanceOfHeroWeight = data.appearance.weight[0]
  // biography
biographyOfHeroFullName= data.biography["full-name"]
biographyOfHeroAlterEgos= data.biography["alter-egos"]
biographyOfHeroAliases= data.biography.aliases
biographyOfHeroPlaceofbirth= data.biography["place-of-birth"]
biographyOfHeroFirstappearance= data.biography["first-appearance"]
biographyOfHeroPublisher= data.biography.publisher 

  // connections
connectionsOfHeroGroupAffiliations= data.connections["group-affiliation"]
connectionsOfHeroRelatives= data.connections.relatives

 // image url
imageURL = data.image.url

// power stats
powerstatsOfHeroCombat  = data.powerstats.combat
powerstatsOfHeroDurability  = data.powerstats.durability
powerstatsOfHerointeligence  =  data.powerstats.intelligence
powerstatsOfHeroPower  = data.powerstats.power 
powerstatsOfHeroSpeed  = data.powerstats.speed
powerstatsOfHeroStrength  = data.powerstats.strength 

// work
workOfHeroOccupation = data.work.occupation
workOfHeroBase = data.work.base


     heroName.innerHTML = `NAME---${nameOfHero}`
     heroAppearance.innerHTML =`GENDER---${appearanceOfHeroGender} <br> HEIGHT---${appearanceOfHeroHeight} <br> WEIGHT---${appearanceOfHeroWeight} <br> RACE---${appearanceOfHeroRace}`
    biography.innerHTML =`FULL NAME---${biographyOfHeroFullName}<br> ALTER EGOS---${biographyOfHeroAlterEgos}<br> ALIASES---${biographyOfHeroAliases}<br> BIRTH PLACE ${biographyOfHeroPlaceofbirth} <br> FIRST APPEARANCE${biographyOfHeroFirstappearance} <br> PUBLISHER---${biographyOfHeroPublisher}`  
    connections.innerHTML = `GROUP AFFILIATION---${connectionsOfHeroGroupAffiliations}<br> RELATIVES---${connectionsOfHeroRelatives}`
    
    powerstats.innerHTML = `COMBAT---${powerstatsOfHeroCombat}<br> DURABILITY---${powerstatsOfHeroDurability}<br> INTELLIGENCE---${powerstatsOfHerointeligence}<br> POWER---${powerstatsOfHeroPower}<br> SPEED---${powerstatsOfHeroSpeed}<br> STRENGTH---${powerstatsOfHeroStrength}`
    heroWork.innerHTML =`OCCUPATION---${workOfHeroOccupation} BASE---${workOfHeroBase}`
    
    var heroImage = document.getElementById('heroImage')
    
    heroImage.src = `${imageURL}`
 
    
    })
})
