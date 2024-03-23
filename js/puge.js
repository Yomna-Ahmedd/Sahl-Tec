    $(function () {
        'use strict';

        var winH = $(window).height(),
                navH = $('.navbar').innerHeight(),
                placeAttr = $(this).attr('placeholder');

        $('.lay-slider').height(winH - navH);

        $(document).ready(function () {

            $(".carousel").carousel({
                interval: 3000
            });

        });

        $('[placeholder]').focus(function () {

            var placeAttr = $(this).attr('placeholder');

            $(this).attr('placeholder', '');

        }).blur(function () {

            $(this).attr('placeholder', 'placeAttr');

        });

        //start navbar

        $('body').css('paddingTop', $('.navbar').innerHeight() + 11);

        $('.navbar li a').click(function () {

            $('html, body').animate({

                scrollTop: $('#' + $(this).data('scroll')).offset().top - 50

            }, 1000);

        });

        $('.navbar ul li').on('click', function () {

            $(this).addClass('active').siblings().removeClass('active');

        });

        $(window).scroll(function () {

            $('.block').each(function () {

                var blockID = $(this).attr('id');

                $('.navbar a').removeClass('active');

                $('navbar li a[data-scroll="' + blockID + '"]').addClass('active');

            });

        });
        $(document).ready(function () {

            var scrollButton = $('#scroll-top');

            $(window).on('scroll', function () {

                if ($(this).scrollTop() >= 700) {

                    scrollButton.fadeIn(1000);

                } else {

                    scrollButton.fadeOut(1000);

                }

            });

            scrollButton.on('click', function () {

                $('html, body').animate({scrollTop: 0}, 700);

            });

        });

    });











