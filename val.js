var mybutton =document.getElementById('load');
mybutton.onclick =()=>{

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    function todo(){
        var form = document.getElementById('form');
        console.log('todo');
        // form.setAttribute("target","_blank");
        form.setAttribute("action","./todo.html");
        // location.replace("./todo.html");
        // console.log(form.getAttribute("action"));
        alert('Welcome Admin!');
        // var meta1 = document.createElement("meta");
        // // console.log(
        // const  head1=document.getElementsByTagName('head');
        // head1.appendChild(meta1);
        // alert('todo');
    }

    function validate(user, pass,callback) {
        if  (user !=='')
        { 
            // &&(pass !=='')
            if (user =='admin' )
            {   
                // alert('true1');
                console.log('true1');
                // setSuccessFor(username,'Valid');
                // setSuccessFor(password,'Valid');
                if (pass !==''){
                    if (pass==12345){
                        console.log('true2');
                        callback();}
                    else {
                        alert("Password doesn't match");
                        // setErrorFor(password, "Password doesn't match");
                         }
                }
                else {
                    alert('Password cannot be Blank');
                    // setErrorFor(password, "Password cannot be Blank");

                }
            }
            else {
                alert("Username doesn't match");
                // setErrorFor(username, "Username doesn't match");

            }
        }
            else {
                alert('Username cannot be Blank');
                // setErrorFor(username, "Username cannot be Blank");


                console.log('false1');
              
                // setErrorFor(password,'Values dont match');
            }
        }
            // else {
            //     alert('false2');
            //     console.log('false2');
                // setErrorFor(username, 'Invalid');
                // setErrorFor(password,'Invalid');
            // }
            validate(username,password,todo);

    };


    // function setErrorFor(input, message) {
    //     const formControl = input.parentElement;
    //     const small = formControl.querySelector('small');
    //     formControl.className = 'form-control error';
    //     small.innerText = message;
    // }
    
    // function setSuccessFor(input,message) {
    //     const formControl = input.parentElement;
    //     const small = formControl.querySelector('small');
    //     formControl.className = 'form-control success';
    //     small.innerText = message;

    // }
// }