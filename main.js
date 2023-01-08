const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))  
/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('bg-header') 
    : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)
// Calculate BMI
const CalculateForm = document.getElementById('calculate-form'),
        calculateCm = document.getElementById('calculate-cm'),
        calculateKg = document.getElementById('calculate-kg'),
        calculateMessage = document.getElementById('calculate-message')
const calculateBmi = (e) =>{
    e.preventDefault()
    
    if (calculateCm.value === '' || calculateKg.value === '') {
        calculateMessage.classList.remove('color-green')
        calculateMessage.classList.add('color-red')
        // show msg
        calculateMessage.textContent = 'Fill in The Height and Weight';
        // time out
        setTimeout(() =>{
            calculateMessage.textContent = ''
        } ,3000)}
        else {
        // BMIformula
        const cm = calculteCm.value / 100,
            kg = calculateKg.value,
            bmi = Math.round(kg / (cm * cm))
            // statment of bmi
            if (bmi < 18.5) {
                calculateMessage.classList.add('color-green')
                calculateMessage.textContent = 'Your BMI is ${bmi} and you are Skinny'
            }
    }
}  
// calculateForm .addEventListener ('submit', calculateBmi)
// let button = document.getElementById('sub');
// button.addEventListener('click', () => {
//     const height = parseInt(document.getElementById('calculate-cm').value);
//     const Weight = parseInt(document.getElementById('calculate-kg').value);
//     const result = parseInt(document.getElementById('calculate-message'));
//     let height_status=false, Weight_status=false;

//     if(height === '' || isNaN(height) || (height <= 0));{
//         document.getElementById('height_error').innerHTML = 'Please provide a valid height';
//     }
//     {
//         document.getElementById('height_error').innerHTML ='';
//         height_status= true;
//     }
//     if(weight === '' || isNaN(weight) || (weight <= 0));{
//         document.getElementById('weight_error').innerHTML = 'Please provide a valid weight';
//     }
// {
//         document.getElementById('weight_error').innerHTML ='';
//         weight_status= true;
//     }
//     if (height_status && weight_status){
//         const bmi = (weight / ((height * height)/1000));
//     }
    
// });