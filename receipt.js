let user_name = sessionStorage.getItem("name");
document.querySelector("span.name").innerHTML = user_name;

let user_matric = sessionStorage.getItem("matric");
document.querySelector("span.matric").innerHTML = user_matric;

let user_level = sessionStorage.getItem("level");
document.querySelector("span.level").innerHTML = user_level;

let user_status = sessionStorage.getItem("status");
document.querySelector("span.status").innerHTML = user_status;

let user_amount = sessionStorage.getItem("amount");
document.querySelector("span.amount").innerHTML = user_amount;

let user_bank = sessionStorage.getItem("bank");
document.querySelector("span.bank").innerHTML = user_bank;

let user_date = sessionStorage.getItem("date");
document.querySelector("span.date").innerHTML = user_date;

function submitForm(e) {
    e.preventDefault();
    let name = document.forms["welcome_form"]["name"].value;
    let matric = document.forms["welcome_form"]["matric"].value;
    let level = document.forms["welcome_form"]["level"].value;
    let status = document.forms["welcome_form"]["status"].value;
    let amount = document.forms["welcome_form"]["amount"].value;
    let bank = document.forms["welcome_form"]["bank"].value;
    let date = document.forms["welcome_form"]["date"].value;
 
    
    sessionStorage.setItem("name", name);
    sessionStorage.setItem("matric", matric);
    sessionStorage.setItem("level", level);
    sessionStorage.setItem("status", status);
    sessionStorage.setItem("amount", amount);
    sessionStorage.setItem("bank", bank);
    sessionStorage.setItem("date", date);
  
  
    location.href = "receipt.html";
  }


			const button = document.getElementById('download-button');

			function generatePDF() {
				// Choose the element that your content will be rendered to.
				const element = document.getElementById('main');
				// Choose the element and save the PDF for your user.
				html2pdf().from(element).save('namsnreceipt.pdf');
			}

			button.addEventListener('click', generatePDF);

