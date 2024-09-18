const input=document.querySelectorAll(".input");

function focusFunc(){
    let parent=this.parentNode;
    parent.classList.add("focus");
}

function blurFunc(){
    let parent=this.parentNode;
    if(this.value==""){
    parent.classList.remove("focus");
    }
}

input.forEach((input)=>{
    input.addEventListener("focus",focusFunc);
    input.addEventListener("blur",blurFunc);

})

 function isValidEmail(email) {
 var emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
 return emailPattern.test(email);
 }
                                     
 let csvf = document.getElementById('csvf');
 csvf.addEventListener('change', () => {
 let fr = new FileReader();
 fr.readAsText(csvf.files[0]);
                fr.onload = function() {
                                        let Arr = fr.result.split(/\r?\n|\n/).map(e => {
                                          return e.split(',');
                                        });
                                        let validEmails = [];
                                        let invalidEmails = [];
                                      
                                        Arr.forEach(e => {
                                          let email = e.join('').trim();
                                          if (email !== "") {
                                            if (isValidEmail(email)) {
                                              validEmails.push(email);
                                            } else {
                                              invalidEmails.push(email);
                                            }
                                          }
                                        });
                                      
                                        let valTable = document.querySelector('#valmails');
                                        let invalTable = document.querySelector('#invalmails');
                                        
                                        for (let i = 0; i < Math.max(validEmails.length, invalidEmails.length); i++) {
                                          let valRow = document.createElement('tr');
                                          let invalRow = document.createElement('tr');
                                          let valEmailCell = document.createElement('td');
                                          let invalEmailCell = document.createElement('td');
                                          let valStatusCell = document.createElement('td');
                                          let invalStatusCell = document.createElement('td');
                                        
                                          if (i < validEmails.length) {
                                            valEmailCell.textContent = validEmails[i];
                                            valStatusCell.textContent = "Valid";
                                          }
                                        
                                          if (i < invalidEmails.length) {
                                            invalEmailCell.textContent = invalidEmails[i];
                                            invalStatusCell.textContent = "Invalid";
                                          }
                                        
                                          valRow.appendChild(valEmailCell);
                                          valRow.appendChild(valStatusCell);
                                          invalRow.appendChild(invalEmailCell);
                                          invalRow.appendChild(invalStatusCell);
                                        
                                          valTable.appendChild(valRow);
                                        
                                          if (i < invalidEmails.length) {
                                            invalTable.appendChild(invalRow);
                                          }
                                        }
                                      
                                        document.querySelector('#valcount').textContent = validEmails.length;
                                        document.querySelector('#invalcount').textContent = invalidEmails.length;
                                      
                                        displayMessage("File uploaded successfully", "success");
                                      };
                                      
                                      fr.onerror = function() {
                                        displayMessage("File upload failed", "error");
                                      };
                                      });
                                      
                                      function displayMessage(message, type) {
                                        let messageContainer = document.getElementById('message-container');
                                        let messageElement = document.createElement('div');
                                        messageElement.className = type;
                                        messageElement.innerText = message;
                                        messageContainer.appendChild(messageElement);
                                        console.log(type + ": " + message);
                                      }
                                      
function sendEmail() {
                         Email.send({
                                      Host: "smtp.gmail.com",
                                      Username: "shivanicse1103@gmail.com",
                                      Password: "a1b2c3d4567890  ",
                                      To: "shivanicse1103@gmail.com",
                                      From: "shivanicse1103@gmail.com",
                                      Subject: document.querySelector('#subject').value,
                                      Body:document.getElementById('body').value
                                    })
                                     console.log(document.getElementById('msg').value); 
                                     console.log(document.getElementById('msg').innerHTML);                                  
                                     console.log(document.getElementById('msg').innerText);                                  
                                     }
                                    
     const form = document.querySelector('form');
     const submitButton = document.querySelector('input[type="submit"]');
                                     
     submitButton.addEventListener('click', function(event) {
     event.preventDefault();
     alert('mails has been sent Successfully');
     window.location.reload(true);
   });
   