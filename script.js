function output(){
    const currentage = parseInt(document.getElementById('age').value);

    const yearSelect = document.getElementById('year');
    const selectedYear = parseInt(yearSelect.options[yearSelect.selectedIndex].text);

    const currentYear = new Date().getFullYear();

    const yearsDifference = selectedYear - currentYear;
    const futureage = currentage + yearsDifference;

    const resultContainer  = document.getElementById('resultContainer');
    resultContainer.innerHTML = `
    <style>
    .resultbox{
    background-color:  rgb(75, 24, 75);;
    height: 80px;
    width: 400px;
    color: plum;
    font-size: 2rem;
    text-align: center;
    box-shadow: 0 15px 30px rgb(245, 209, 153);
    border-radius: 10px;s
     }
    h2 {
    color: white;
    }
    h1{
    color: plum;
    }
    .btn{
    background-color: purple;
    color: plum;
    height: 70px
    width: 60%;
    padding; 10px;
    color: white;
    box-shadow: 0 10px 20px rgb(245, 209, 153);
    border: none;
    }
    </style>
    <h1>See Results</h1> <hr> <br>
    <h2>In <span style=" font-weight: bolder;">${selectedYear} </span>you will be</h2>
    <div class="resultbox">
    <p>${futureage} years old</p>
    <button onclick="message()" class="btn" >View Message</button>
    </div> <br>  <br>
    <div id="imessage"></div>
    ` ;

     resultContainer.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
     });

    return futureage;
}

function message(){
 
    const imessage = document.getElementById('imessage');
imessage.innerHTML = `
<h2><marquee dir="rtl" >You will be great at this age</marquee></h2>
`

}

 function generatePasswords(length = 12) {
    // Get the VALUES from the input elements, not the elements themselves
    const letters = document.getElementById('letters').value;
    const numbers = document.getElementById('numbers').value;
    const symbols = document.getElementById('symbols').value;

    // Combine all character sets
    const allChars = letters + numbers + symbols;

    // Check if there are any characters to choose from
    if (!allChars.length) {
        alert('Please provide at least one character set!');
        return;
    }

    // Generate 5 passwords
    let passwords = [];
    for (let p = 0; p < 5; p++) {
        let password = '';
        for (let i = 0; i < length; i++) {
            // Correct Math object (capital M) and proper randomization
            const randomIndex = Math.floor(Math.random() * allChars.length);
            password += allChars[randomIndex];
        }
        passwords.push(password);
    }



      const resultContainer  = document.getElementById('resultContainer');
    resultContainer.innerHTML = `
    <style>
    .resultpanel{
    padding: 20px;
    width: 700px;
    
    color: white;
    background-color: rgba(151, 83, 130, 0.2);
    border-radius: 25px;
    box-shadow: 0 8px 13px rgb(219, 136, 194);
    }

    .innerpanel{
    background-color:plum;
    padding: 45px;
    color: purple;
    border-radius: 15px;
    box-shadow: 0 8px 15px purple;
    }
    h1{
    color: plum;
    align-text: center;
    }

    .btn3{
  padding: 8px;
  box-shadow: 0 6px 12px  purple;
  border-radius: 10px;
  cursor: pointer;
  background-color: rgba(125, 23, 125, 0.76);
  color: plum;

}
    </style>

    <div class="resultpanel">
    <h1>Passwords </h1>

    <div class="innerpanel">
    <div style="display: flex; justify-content: space-between;">
    <h2>Generated passwords</h2>
    </div>
    <div class="btn3"> </div>
    <ul>
    <li>${passwords[0]}</li>
    <li>${passwords[1]}</li>
    <li>${passwords[2]}</li>
    <li>${passwords[3]}</li>
    <li>${passwords[4]}</li>
    </ul>
        <div class="btn3"> </div>
    </div>
    </div>
    `;

     resultContainer.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
     });

    return passwords;
    }
    
  function generateNicknames(){
    const firstname = document.getElementById('fname').value.trim();
    const middlename = document.getElementById('mname').value.trim();
    const lastname = document.getElementById('lname').value.trim();

    const fullname = firstname + middlename + lastname;

    if(!firstname || !lastname){
        alert('Please fill in your first or last name');
        return;
    }

    const nicknames = [];
//1
     nicknames.push(`${firstname[0]}${lastname[0]}`.toUpperCase());
     if(middlename){
        nicknames.push(`${firstname[0]}${middlename[0]}${lastname[0]}`. toUpperCase());
     }

     //2

     nicknames.push(`${firstname.slice(0,3)}${lastname.slice(0,2)}`.toLowerCase());

     //3

     nicknames.push(`${firstname} ${lastname[0]}`);
     if(middlename){
        nicknames.push(`${firstname} ${middlename[0]} ${lastname[0]}`);
     }

      //4
     nicknames.push(`Mac${firstname.slice(0,2)} ${lastname[0]}`);

      //5
      nicknames.push(`Sir/Madam ${lastname.slice(-3)} of ${firstname.slice(0,2)}`);


    const suffixes = ['ster', 'inator', 'zilla', 'master', 'dude', 'king', 'queen'];
    const randomSuffix = suffixes[Math.floor(Math.random() * suffixes.length)];
    nicknames.push(`${firstname}${randomSuffix}`); 
    
    
    if (firstname[0].toLowerCase() === lastname[0].toLowerCase()) {
        nicknames.push(`Double-${firstname[0].toUpperCase()}`);
    }
    
    
    if (middlename) {
        nicknames.push(`${firstname[0]}. ${middlename} ${lastname[0]}.`); 
        nicknames.push(`${middlename}-${lastname}`);
    }
    
    
    const nameParts = fullname.split(' ');
    const randomNick = nameParts
        .sort(() => 0.5 - Math.random())
        .slice(0, 2)
        .map(part => part.slice(0, 3))
        .join('');
    nicknames.push(randomNick.toLowerCase());

     const resultContainer  = document.getElementById('resultContainer');
    resultContainer.innerHTML = `
    <style>
    .resultpanel{
    padding: 20px;
    width: 700px;
   color: rgb(219, 136, 194);
    background-color: rgba(151, 83, 130, 0.2);
    border-radius: 50px;
    box-shadow: 0 1px 2px rgb(219, 136, 194);
    }
    h1{
    background-color:rgb(36, 15, 29);
    box-shadow: 0 5px 10px rgb(36, 11, 28);
    border-radius: 15px;
    padding: 20px;
    color: pink;
    }
   
     .innerpanel{
    background-color:  rgba(103, 47, 91, 0.35);
    padding: 45px;
    border-radius: 25px;
    box-shadow: 0 8px 15px pink;
   
    }
    </style>

    <div class=resultpanel>
    <h1>Your  generated Nicknames:</h1>
        
        <h2>COPY</h2><hr>
    <div class=innerpanel>
            <ul style="font-weight=3rem;">
                ${nicknames.map(nicknames => `<li>${nicknames}</li>`).join('')}
            </ul>
            </div>
    </div>
`

    resultContainer.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });

    
    
    return nicknames;


  }
    
function bibbleBooks(){
  const name = document.getElementById('fullname').value.trim();

  const books = ['ZERO','Genesis', 'Exodus', 'Leviticus', 'Deutronomy', 'Numbers', 'Deuteronomy', 'Joshua', 'Judges',
    'Ruth', '1 Samuel', '2 Samuel', '1 Kings', '2 Kings', '1 Chronicles', '2 Chronicles', 'Ezra', 'Nehemiah',
    'Esther', 'Job', 'Psalms', 'Proverbs', 'Ecclesiastes', 'Song of Solomon', 'Isaiah', 'Jeremiah', 'Lamentations',
    'Ezekiel', 'Daniel', 'Hosea', 'Joel', 'Amos', 'Obadiah', 'Jonah', 'Micah', 'Nahum', 'Habakkuk', 'Zephaniah',
    'Haggai', 'Zechariah', 'Malachi', 'Matthew', 'Mark' ,'Luke', 'John', 'Acts', 'Romans', '1 Corinthians', 
    '2 Corinthians', 'Galatians', 'Ephesians', 'Philippians', 'Colossians', '1 Thessalonians', '2 Thessalonians',
    '1 Timothy', '2 Timothy', 'Titus', 'Philemon', 'Hebrews', 'James', '1 Peter', '2 Peter', '1 John', '2 John',
    '3 John', 'Jude', 'Revelations'
  ];

  const bookname = document.getElementById('book').value.trim();

  const  number = books.indexOf(bookname);


const resultContainer  = document.getElementById('resultContainer');
    resultContainer.innerHTML = `
    
    <style>
     .innerpanel{
    background-color: rgba(180, 174, 179, 0.11);
    padding: 20px;
    color: purple;
    border-radius: 15px;
    box-shadow: 0 8px 15px plum;
    
    }
    h1{
    color: plum;
    }

    h2{ color: rgb(241, 216, 238);
     background-color: rgb(75, 24, 75);
     box-shadow: 0 5px 10px rgb(237, 200, 147);
     border-radius: 10px;
     padding: 20px;
}
    </style>
    <div class=innerpanel>
    <h1>The Book Number You Searched</h1>
    
   
      <h3 >Hello ${name} </h3> 
   
      </div> <br> <hr> 
      <h2 style="color: plum;">The book number of ${bookname} in the bible is ${number}</h2>

       
    
    
    `
 
resultContainer.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });


    return number;
    

}
     
 