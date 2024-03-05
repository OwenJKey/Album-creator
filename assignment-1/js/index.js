 document.addEventListener("DOMContentLoaded", function() {
            const form = document.querySelector('album-form');
            const titleInput = document.querySelector('album-title-input');
            const descriptionInput = document.querySelector('album-description-input');
            const artInput = document.querySelector('album-art-input');
            
            form.addEventListener('submit', function(event) {
                event.preventDefault();

                if (titleInput.value.length > 20 || titleInput.value.length < 1) {
                    titleInput.classList.add('is-invalid');
                    return;
                } else {
                    titleInput.classList.remove('is-invalid');
                }

                if (descriptionInput.value.length > 40 ||descriptionInput.value.length < 1 ) {
                    descriptionInput.classList.add('is-invalid');
                    return;
                } else {
                    descriptionInput.classList.remove('is-invalid');
                }

                alert('Form submitted');
                form.reset();
            });
          
        });