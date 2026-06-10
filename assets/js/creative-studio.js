/*!
=========================================================
* Creative Studio Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/ 

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });

    const focusCopy = {
        cardio: {
            title: 'Cardiometabolic disease',
            copy: 'We develop digital tools to better identify risk, monitor chronic disease trajectories, and support earlier, more precise intervention in cardiometabolic care.'
        },
        resp: {
            title: 'Respiratory and critical care',
            copy: 'Our work links lung physiology, bedside monitoring, and AI-enabled decision support to improve safety and recovery in respiratory and intensive care pathways.'
        },
        neuro: {
            title: 'Neurocognitive health',
            copy: 'We explore brain-health technologies, neurocritical care, and clinically interpretable tools that support diagnosis, recovery, and long-term cognitive outcomes.'
        },
        ai: {
            title: 'Digital biomarkers & AI',
            copy: 'We build explainable analytics and multimodal biomarkers that turn clinical data into trusted insights for researchers, clinicians, and future patients.'
        }
    };

    $('.focus-chip').on('click', function () {
        $('.focus-chip').removeClass('active');
        $(this).addClass('active');

        const key = $(this).data('focus');
        const entry = focusCopy[key] || focusCopy.cardio;

        $('#focus-title').text(entry.title);
        $('#focus-copy').text(entry.copy);
    });
});
