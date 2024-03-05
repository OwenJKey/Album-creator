 document.addEventListener("DOMContentLoaded", function() {
            const form = document.getElementById('album-form');
            const titleInput = document.getElementById('album-title-input');
            const descriptionInput = document.getElementById('album-description-input');
            const artInput = document.getElementById('album-art-input');
            
            form.addEventListener('submit', function(event) {
                event.preventDefault();

                if (titleInput.value.length > 20) {
                    titleInput.classList.add('is-invalid');
                    return;
                } else {
                    titleInput.classList.remove('is-invalid');
                }

                if (descriptionInput.value.length > 40 ) {
                    descriptionInput.classList.add('is-invalid');
                    return;
                } else {
                    descriptionInput.classList.remove('is-invalid');
                }

                if (artInput.options === '0') {
                    artInput.classList.add('is-invalid');
                    return;
                } else {
                    artInput.classList.remove('is-invalid');
                }

                alert('Form submitted successfully!');
                form.reset();
            });
          
        });