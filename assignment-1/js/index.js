
const form = document.querySelector('form');
const albumInput = document.querySelector('#album-title-input');
const albumArtInput = document.querySelector('#albume-art-input');
const albumInputDes = document.querySelector('#album-description-input');
const errorStyle = 'text-red-500 text-xs';
const errorDefaultStyle = 'text-xs text-zinc-700 mr-auto';

function isEmptySpace(str) {
    return !str.trim().length;
  }
albumInput.addEventListener('input', (e) =>
 {
    // Check if the input length is exactly 20 characters
    if (albumInput.value.length >= 1 || albumInput.value.length <=10) {
      console.log("Input is valid.");
      return true;
    } else {
      console.log("Input is invalid.");
      return false;

    }

  });
  
 albumInputDes.addEventListener('input', (e) =>{
    if (albumInputDes.value.length >= 0 || albumInputDes.ariaValueMax.length <= 30) {
        console.log("valid Description Name");
        return true;
      } else {
        console.log("Invalid Description Name");
        return false;
  
      }
 
  });