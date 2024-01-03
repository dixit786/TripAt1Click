$(document).ready(function(){

	"use strict";

    $.validator.addMethod('nameLength', function(value, element) {
        return this.optional(element) || value.length >= 3;
    });

    function submitForm() {
        $("#userForm").on('submit',function() {

            if ($(this).valid()) {
                $.ajax({
                  type: "POST",
                  url: "/inquiry",
                  data: $("#userForm").serializeArray().reduce(function (json, { name, value }) {
                        json[name] = value;
                        return json;
                      }, {}),
                  success: function() {
                    alert("Your inquiry submitted successfully")
                  },
                  error: function (error) {
                    alert("Error while submit your inquiry")
                  }
                  });
            }
          return false;
        })
    };

    submitForm();

    function getFormData(form){
        var unindexed_array = form.serializeArray();
        var indexed_array = {};
    
        $.map(unindexed_array, function(n, i){
            indexed_array[n['name']] = n['value'];
        });
    
        return indexed_array;
    }
    
    $('#userForm').validate({
        rules: {
        name: {
            required: true,
            letterswithbasicpunc: true,
            nameLength: true
        },
        mobile: {
            required: true,
        },
        email: {
            required: true,
            email: true
        },
        durations: {
            required: true,
        }
        },
        messages: {
        name: {
            required:'<span class="text-danger align-middle"> Enter a name please!'+
            '</span>',
            letterswithbasicpunc:'<span class="text-danger align-middle"> The name must contain only letters!'+
            '</span>',
            nameLength:'<span class="text-danger align-middle"> The name must be at least 3 chars!'+
            '</span>'
        },
        email: {
            required: '<span class="text-danger align-middle"> Enter an email please!'+
            '</span>',
            email: '<span class="text-danger align-middle"> Enter a valid email please!'+
            '</span>'
        },
        mobile: {
            required: '<span class="text-danger align-middle"> Enter an mobile no please!'+
            '</span>'
        },
        durations: {
            required: '<span class="text-danger align-middle"> Enter an durations please!'+
            '</span>'
        }
        }

    });	

    

        /*==================================

* Author        : "ThemeSine"

* Template Name : Travel HTML Template

* Version       : 1.0

==================================== */


        /*=========== TABLE OF CONTENTS ===========

1. Scroll To Top
2. Range js
3. Countdown timer
4. owl carousel
5. datepicker
6. Smooth Scroll spy
7. Animation support
======================================*/
    

    // 1. Scroll To Top 

		$(window).on('scroll',function () {
            console.log($(this).scrollTop())
            $('.return-to-top').show();
			if ($(this).scrollTop() > 450) {
                $('.return-to-top').hide();
            }else{
                console.log("sdssadsadsadsadassa")
                $('.return-to-top').show();
            }

			// } else {

				// 

			// }

		});

		// $('.return-to-top').on('click',function(){

		// 		$('html, body').animate({

		// 		scrollTop: 0

		// 	}, 1500);

		// 	return false;

		// });

        $('.carousel').carousel({
            interval: 2000
        })

        $('#scrollTop').click(function(){
            console.log("sadsdas")
            $("html, body").animate({ scrollTop: 300  }, 400);
            return false;
        });

        $(".packages-btn").click(() => {
            window.location.href = "https://wa.me/+919103738265"
        })

        $('.carousel-indicators li').click(function(e){
            e.stopPropagation();
            var goTo = $(this).data('slide-to');
            $('.carousel-inner .item').each(function(index){
                if($(this).data('id') == goTo){
                    goTo = index;
                    return false;
                }
            });

            $('#gallery-carousel').carousel(goTo); 
        });

        $('.carousel-control').click(function(e){
            e.stopPropagation();
            var goTo = $(this).data('slide');
            if(goTo=="prev") {
                $('#carousel-id').carousel('prev'); 
            } else {
                $('#carousel-id').carousel('next'); 
            }
        });

    // 2. range js
        
        $( "#slider-range" ).slider({
            range: true,
            min: 0,
            max: 12000,
            values: [ 2677, 9241 ],
            slide: function( event, ui ) {
            $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
            }
        });
        $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
        " - $" + $( "#slider-range" ).slider( "values", 1 ) );
        
        
        // Quantity Buttons Shop
    
        $(".qtyplus").on("click", function(){
        var b = $(this).parents(".quantity-form").find("input.qty"),
                c = parseInt(b.val(), 10) + 1,
                d = parseInt(b.attr("max"), 10);
            d || (d = 9999999999), c <= d && (b.val(c), b.change())
        });
        $(".qtyminus").on("click", function(){
            var b = $(this).parents(".quantity-form").find("input.qty"),
                c = parseInt(b.val(), 10) - 1,
                d = parseInt(b.attr("min"), 10);
            d || (d = 1), c >= d && (b.val(c), b.change())
        });


    // 3.Countdown timer 
        
        function makeTimer() {

                var endTime = new Date("March 7, 2018 12:00:00 PDT");            
                var endTime = (Date.parse(endTime)) / 1000;

                var now = new Date();
                var now = (Date.parse(now) / 1000);

                var timeLeft = endTime - now;

                var days = Math.floor(timeLeft / 86400); 
                var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
                var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
                var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

                if (hours < "10") { hours = "0" + hours; }
                if (minutes < "10") { minutes = "0" + minutes; }
                if (seconds < "10") { seconds = "0" + seconds; }

                $("#days").html(days + '<span class="camp">Days</span>');
                $("#hours").html(hours + '<span class="camp">Hour</span>');
                $("#minutes").html(minutes + '<span class="camp">Minute</span>');
                $("#seconds").html(seconds + '<span class="camp">Second</span>');       

        }
        
        setInterval(function() { makeTimer(); }, 1000);

    // 4. owl carousel
    
        // i. #testimonial-carousel
    
        
        var owl=$('#testemonial-carousel');
        owl.owlCarousel({
            items:3,
            margin:0,
            
            loop:true,
            autoplay:true,
            smartSpeed:1000,
            
            //nav:false,
            //navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
            
            dots:true,
            autoplayHoverPause:true,
        
            responsiveClass:true,
                responsive:{
                    0:{
                        items:1
                    },
                    640:{
                        items:1
                    },
                    767:{
                        items:2
                    },
                    992:{
                        items:3
                    }
                }
            
            
        });

    // 5. datepicker
            $('[data-toggle="datepicker"]').datepicker();

    // 6. Smooth Scroll spy
        
        $('.header-area').sticky({
           topSpacing:0
        });
        
        //=============

        $('li.smooth-menu a').bind("click", function(event) {
            event.preventDefault();
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - -1
            }, 1200,'easeInOutExpo');
        });
        
        $('body').scrollspy({
            target:'.navbar-collapse',
            offset:0
        });

    // 7.animation support

        $(window).load(function(){

            $(".about-us-txt h2").removeClass("animated fadeInUp").css({'opacity':'0'});
            $(".about-us-txt button").removeClass("animated fadeInDown").css({'opacity':'0'});
        });

        $(window).load(function(){

            $(".about-us-txt h2").addClass("animated fadeInUp").css({'opacity':'0'});
            $(".about-us-txt button").addClass("animated fadeInDown").css({'opacity':'0'});

        });
})

	