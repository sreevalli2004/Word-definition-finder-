const inputField=document.querySelector('#input');
const outputField=document.querySelector('#meaning');
const searchButton=document.querySelector('#search');

searchButton.addEventListener('click',async()=>{
    const word=inputField.value.trim();
    if(word){
        try{
            const apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
            const response=await fetch(apiUrl);
            const data=await response.json();
            const definition=data[0]?.meanings[0]?.definitions[0]?.definition || 'Definition not found.';
            outputField.textContent=definition;
        } 
        catch(error){
            outputField.textContent='An error occurred. Please try again later.';
        }
        outputField.classList.add('fade-in');
        setTimeout(()=>outputField.classList.remove('fade-in'),500);
        inputField.value='';
    } 
    else{
        alert("Please enter a word.");
    }
});
