const nameUser = document.querySelector(".nameUser");
const ageUser = document.querySelector(".ageUser");
const emailUser = document.querySelector(".emailUser");

const nameUserForm = document.querySelector(".nameUserForm");
const ageUserForm = document.querySelector(".ageUserForm");
const emailUserForm = document.querySelector(".emailUserForm");

const btn = document.querySelector(".sub");
btn.addEventListener('click', () => {
    nameUserForm.value;
    ageUserForm.value;
    emailUserForm.value;

   let res = prompt(`Are You Sure Or need Confirm  \n ${ nameUserForm.value} \n ${ ageUserForm.value} \n ${emailUserForm.value}`);
   if(res != null)
   {
    alert("all done");
   }
   else{

   }
});
