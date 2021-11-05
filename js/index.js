
let url = "https://bogdan-kostadinov-portfolio.herokuapp.com"

$('.linkedIn').click(function(){
    redirectToPage('linkedIn');
})

$('.gitHub').click(function(){
    redirectToPage('gitHub');
})

$('.send-message').click(function(){
      Swal.fire({
        title: 'Thank you for your feedback!',
        text: 'Your feedback will help me improve the quality of my portfolio and website.',
        imageUrl: 'https://t4.ftcdn.net/jpg/01/15/20/75/360_F_115207580_US2etunH78I7iMYHOoNVvxQTCIdoPdRj.jpg',
        imageWidth: 400,
        imageHeight: 250,
        imageAlt: 'Custom image',
      })
})

// Hide submenus
$('#body-row .collapse').collapse('hide'); 

// Collapse/Expand icon
$('#collapse-icon').addClass('fa-angle-double-left'); 

// Collapse click
$('[data-toggle=sidebar-colapse]').click(function() {
    SidebarCollapse();
});

function SidebarCollapse () {
    $('.menu-collapsed').toggleClass('d-none');
    $('.sidebar-submenu').toggleClass('d-none');
    $('.submenu-icon').toggleClass('d-none');
    $('#sidebar-container').toggleClass('sidebar-expanded sidebar-collapsed');
    
    // Treating d-flex/d-none on separators with title
    var SeparatorTitle = $('.sidebar-separator-title');
    if ( SeparatorTitle.hasClass('d-flex') ) {
        SeparatorTitle.removeClass('d-flex');
    } else {
        SeparatorTitle.addClass('d-flex');
    }
    
    // Collapse/Expand icon
    $('#collapse-icon').toggleClass('fa-angle-double-left fa-angle-double-right');
}

function redirectToPage(website){
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-primary',
          cancelButton: 'btn btn-secondary'
        },
       
      })

      swalWithBootstrapButtons.fire({
        title: 'Are you sure?',
        text: "You will be redirected to another page!",
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Yes, redirect me!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
      }).then((result) => {
          
        if (result.isConfirmed) {
            if(website == 'linkedIn')
            {
                window.location = "https://www.linkedin.com/in/bogdan-kostadinov-680919173/"
            }     
            
            else if(website == 'gitHub')
            {
                window.location = "https://github.com/BogdanKostadinov"
            }  
           // $('.link').attr('href', $(this).find('span').attr('href'));
           // $('.imagepreview').attr('src', $(this).find('img').attr('src'));
        } 
        else{

        } 
    
      })
}

// $('#contactMe').click(function(){
//     openEmailForm();
// })

// function openEmailForm(){
//     Swal.fire({
//         width: 800,
//         title: 'Email me',
//         html: `<input type="text" id="name" class="swal2-input" placeholder="Name (Optional)">
//         <input type="email" id="email" class="swal2-input" placeholder="Email (Optional)">
//         <input type="text" id="title" class="swal2-input" placeholder="Title">
//         <textarea class="swal2-input" id="description" placeholder="Description..." style="height: 10em;"></textarea>`,
//         confirmButtonText: 'Send email',
//         cancelButtonText: 'Go back',
//         focusConfirm: false,
//         showCancelButton: true,
//         reverseButtons: true,
//         preConfirm: () => {
//           const name = Swal.getPopup().querySelector('#name').value
//           const email = Swal.getPopup().querySelector('#email').value
//           const title = Swal.getPopup().querySelector('#title').value
//           const description = Swal.getPopup().querySelector('#description').value
//           const re = /\S+@\S+.\S+/;
//           const testEmail = re.test(String(email).toLowerCase());

//           if (!title || !description) {
//             Swal.showValidationMessage(`Please enter title and description`)
//           }
//         //   if(email.length != 0 && !testEmail){
//         //     Swal.showValidationMessage(`Please enter a valid email address`)
//         //   }
//           return {name: name, title: title, description: description, email: email}
//         }
//       }).then((result) => {
//           sendEmail(result.value.name, result.value.email, result.value.title, result.value.description);
//         Swal.fire(`
//           Name: ${result.value.name.length == 0 ? "Not provided": result.value.name}
//           Email: ${result.value.email.length == 0 ? "Not provided": result.value.email}
//           Title: ${result.value.title}
//           Description: ${result.value.description}
//         `.trim())
//       })
// }

// async function sendEmail(name, email, title, description){


// var transporter = nodemailer.createTransport({
//   service: 'gmail',
// });

// var mailOptions = {
//   from: email,
//   to: 'bogdan.kostadinov1@gmail.com',
//   subject: title,
//   text: description
// };

// // var mailOptions = {
// //     from: 'youremail@gmail.com',
// //     to: 'myfriend@yahoo.com',
// //     subject: 'Sending Email using Node.js',
// //     text: 'That was easy!'
// //   };

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });
// }