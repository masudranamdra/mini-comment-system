  // fast button
        function changeblack(){
            document.body.style.backgroundColor = 'orange';
        }


        const YellowColor = document.getElementById('tome')
        YellowColor.onclick = function change(){
            document.body.style.backgroundColor = 'lightyellow'
        }


        const skyblue1 = document.getElementById("skyBlue");
        skyblue1.onclick = tobechange;
        function tobechange (){
            document.body.style.backgroundColor = 'skyblue';
        }



        // add evenlessener
         document.getElementById("nextevel").addEventListener("click",
            function nextt (){
               document.body.style.backgroundColor = 'lightblue';
            }
        )

        document.getElementById("nextevel1").addEventListener('click',
        function (){
            document.body.style.backgroundColor = 'lightgreen'
        }
      )

      document.getElementById('nextgold').addEventListener('click',
        function (){
            document.body.style.color = 'green';
        }
      )


    //   add eventhandler 
    document.getElementById('changetitle').addEventListener('click',
        function changelit (){
            const update = document.getElementById('haddingH');
            update.innerText = 'No Change Your Color'
        }
       )


       document.getElementById('changetitle').addEventListener('click',
        function changelit (){
            const update = document.getElementById('haddingH');
            update.style.color = 'blue'
        }
       )


     document.getElementById("divabutton").addEventListener('click',
        function(){
            const nameinput = document.getElementById('divainput')
            // console.log(nameinput)
            const name = nameinput.value;

            const changeName = document.getElementById('divaname');
            changeName.innerText = name;
        }
       )



    //    next
    const secound = document.getElementById('divbbutton').addEventListener('click',
            function (){
                const changbuttons = document.getElementById('divbinput')
                // console.log(changbuttons);
                const nextl = changbuttons.value;

                // console.log(nextl);
                const comebaby = document.getElementById('divbhading');
                console.log(comebaby);
                comebaby.innerText = nextl;
            }
        )