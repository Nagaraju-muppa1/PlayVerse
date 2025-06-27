const gameContainer = document.querySelector(".container");
 let userResult = document.querySelector(".user_result img");
let cpuResult = document.querySelector(".cpu_result img");
let result = document.querySelector(".resultText");
let options=document.querySelectorAll(".option_img");
// console.log(userResult);
options.forEach((image,index)=>{
    image.addEventListener("click",(e)=>{
        image.classList.add("active");

         userResult.src = cpuResult.src = "images/rock.png";
         result.textContent = "Wait..!"
        options.forEach((image2,index2)=>{
         
          index !== index2 && image2.classList.remove("active");
        })
        gameContainer.classList.add("start");

        let time = setTimeout(()=>{
           gameContainer.classList.remove("start");
        let imageSrc = e.target.querySelector("img").src
        userResult.src = imageSrc;     
        let ind = Math.floor(Math.random() * 3);
        let cpu = ["images/rock.png","images/paper.png","images/scissors.png"];
        cpuResult.src = cpu[ind];
        cpures =["R","P","S"][ind];
        users =["R","P","S"][index];
        outcomes ={
            RR:"Match Drawn",
            RP:"User Won!!",
            RS:"CPU Won!!",
            PP:"Match Drawn",
            PR:"CPU Won!!",
            PS:"User Won!!",
            SR:"User Won!!",
            SP:"CPU Won!!",
            SS:"Match Drawn"
        }
        let out = outcomes[cpures+users]
        
         result.textContent = cpures === users ? "Match Drawn" : `${out}`;
        },2500)

       });
      
})

