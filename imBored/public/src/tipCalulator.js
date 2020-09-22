const tipForm = document.getElementById('tipForm')
const billInput = document.getElementById('billInput')
const tipInput = document.getElementById('tipInput')
const splitInput = document.getElementById('splitInput')

const dutchResults = document.getElementById('dutchResults')
const dutchResultsTitle = document.getElementById('dutchResultsTitle')

const tipForm2 = document.getElementById('tipForm2')
const billInput2 = document.getElementById('billInput2')
const tipInput2 = document.getElementById('tipInput2')

const frugalResults =  document.getElementById('frugalResults')
const frugalResultsTitle = document.getElementById('frugalResultsTitle')



var actualTip = null
var actualBillTip = null

var actualIndividualBill = null
var actualIndividualTip = null

var actualTotalBillAfterTip = null
var actualIndividualBillAfterTip = null


class DutchTip{
constructor (bill, tip, split){
    this.bill = bill
    this.tip = tip
    this.split = split
    
}
get  tipNumber (){
    return this.realTip()

}
realTip(){
      actualTip = this.tip /100 
     return  actualTip
     
 }

get billTip (){
    return this.realBillTip()
}

realBillTip(){
    actualBillTip = this.bill * actualTip
    return actualBillTip
}

//     var individualBill = bill / split

get individualBill(){
 return this.realIndividualBill()
}

realIndividualBill(){
actualIndividualBill = this.bill / this.split
return actualIndividualBill
}
//     var individualTip = billTip / split
get individualTip(){
    return this.realIndividualTip()
   }
   
   realIndividualTip(){
   actualIndividualTip = actualBillTip / this.split
   return actualIndividualTip
   }


//     var totalBillAfterTip = bill + billTip
get billAfterTip(){
return this.realBillAfterTip()
}

realBillAfterTip(){
actualTotalBillAfterTip =Number(this.bill) + Number(actualBillTip)   
return actualTotalBillAfterTip
}
//     var individualBillAfterTip = individualBill + individualTip
 get individualBillAfterTip(){
     return this.realIndividualBillAfterTip()
 }

realIndividualBillAfterTip(){
    actualIndividualBillAfterTip = actualIndividualBill + actualIndividualTip 
    return actualIndividualBillAfterTip 
}

} 


var justMyBillTip = (bill, tip)=>{
    var tipNumber = tip /100
    var billTip = bill * tipNumber
    var myTip = billTip.toFixed(2)

}


tipForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    dutchResults.innerHTML=''
    var tipInfo = {
        bill: billInput.value,
        tip: tipInput.value ,
        split: splitInput.value
    }
    console.log(tipInfo)

    if (!tipInfo.split){
     return  alert('minimum number = 1')
    } else if(tipInfo.split){
        
         var results = new DutchTip(tipInfo.bill, tipInfo.tip, tipInfo.split)
         results.tipNumber
         results.billTip
         results.individualBill
         results.individualTip
        results.billAfterTip
        results.individualBillAfterTip
dutchResultsTitle.innerHTML = 'Dutch Tips Info'


const individualBillsAfterTipDiv = document.createElement('div')
 individualBillsAfterTipDiv.innerHTML = `<h4 class="text-success bg-dark" >
<p class='text-light'>Individual Total:</p>  $${actualIndividualBillAfterTip.toFixed(2)}
  </h4>`

const individualTipDiv = document.createElement('div')
individualTipDiv.innerHTML = `<h4 class="text-success bg-dark"> 
<p class='text-light'>Individual Tip:</p> $${actualIndividualTip.toFixed(2)}</h4>
`

const individualBillDiv = document.createElement('div')
individualBillDiv.innerHTML = `<h4 class="text-success bg-dark"> 
<p class='text-light'>Individual Bill:</p> $${actualIndividualBill.toFixed(2)}</h4>
`


const totalTipDiv = document.createElement('div')
totalTipDiv.innerHTML = `
<h4 class="text-success bg-dark">
<p class='text-light'>Total Tip: </p>$${actualBillTip.toFixed(2)} </h4>
`

const totalBillAfterTipDiv = document.createElement('div')
totalBillAfterTipDiv.innerHTML = `
<h4 class="bg-dark text-success">
<p class='text-light'>Total Bill After Tip:</p> $${actualTotalBillAfterTip.toFixed(2)} </h4>
`


dutchResults.appendChild(individualBillsAfterTipDiv)
dutchResults.appendChild(individualTipDiv)
dutchResults.appendChild(individualBillDiv)
dutchResults.appendChild(totalTipDiv)
dutchResults.appendChild(totalTipDiv)
dutchResults.appendChild(totalBillAfterTipDiv)

    }
})


tipForm2.addEventListener('submit', (e)=>{
  e.preventDefault()
  frugalResults.innerHTML=''
    var tipInfo = {
        bill: billInput2.value,
        tip: tipInput2.value
    }
    console.log(tipInfo)

    var results2 = new DutchTip(tipInfo.bill, tipInfo.tip, 1)
    results2.tipNumber
    results2.billTip
    results2.individualBill
    results2.individualTip
    results2.billAfterTip
    results2.individualBillAfterTip

    frugalResultsTitle.innerHTML =`Results`
    
    const totalBillDiv = document.createElement('div')
    totalBillDiv.innerHTML = `
    <h4 class=" bg-dark text-success">
    <p class='text-light'>Total Bill:</p> $${actualTotalBillAfterTip} </h4>
    `
    const tipDiv = document.createElement('div')
    tipDiv.innerHTML = `
    <h4 class="bg-dark text-success">
    <p class='text-light'>Tip:</p> $${actualBillTip.toFixed(2)}
    </h4>
    `

    frugalResults.appendChild(totalBillDiv)
    frugalResults.appendChild(tipDiv)
})     
//   tipAmount.innerHTML= ``
    //  console.log(results2.billAfterTip)
    // console.log(results2.billTip)
  
