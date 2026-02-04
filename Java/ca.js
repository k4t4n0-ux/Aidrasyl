        const caInput = document.getElementById('ca');
        const escudoCheckbox = document.getElementById('escudo');

        escudoCheckbox.addEventListener('change', function() {
            if (this.checked) {
                caInput.value = (parseInt(caInput.value) || 0) + 2;
            } else {
                caInput.value = (parseInt(caInput.value) || 0) - 2;
            }
        });
