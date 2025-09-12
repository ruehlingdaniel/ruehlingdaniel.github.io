{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 const navSlide = () => \{\
    const burger = document.querySelector('.burger');\
    const nav = document.querySelector('.nav-links');\
    const navLinks = document.querySelectorAll('.nav-links li');\
\
    burger.addEventListener('click', () => \{\
        // Toggle Nav\
        nav.classList.toggle('nav-active');\
\
        // Animate Links\
        navLinks.forEach((link, index) => \{\
            if (link.style.animation) \{\
                link.style.animation = '';\
            \} else \{\
                link.style.animation = `navLinkFade 0.5s ease forwards $\{index / 7 + 0.3\}s`;\
            \}\
        \});\
\
        // Burger Animation\
        burger.classList.toggle('toggle');\
    \});\
\}\
\
navSlide();}