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
        // const  head1=document.getElementsByTagName('head');
        // head1.appendChild(meta1);
        // alert('todo');
    }

    function validate(user, pass,callback) {
        if  (user !=='')
        { 
            if (user =='admin' )
            {   
                // alert('true1');
                console.log('true1');
            
                if (pass !==''){
                    if (pass==12345){
                        console.log('true2');
                        callback();}
                    else {
                        alert("Password doesn't match");
                         }
                }
                else {
                    alert('Password cannot be Blank');

                }
            }
            else {
                alert("Username doesn't match");

            }
        }
            else {
                alert('Username cannot be Blank');


                console.log('false1');
              
            }
        }
           
            validate(username,password,todo);

    };