// Interactive portfolio features: greeting, mobile menu, theme, modal and validation.
'use strict';
const $ = (selector) => document.querySelector(selector);
const hour = new Date().getHours();
$('#greeting').textContent = hour < 12 ? 'Good morning! ☀️' : hour < 17 ? 'Good afternoon! 🌤️' : 'Good evening! 🌙';
$('#year').textContent = new Date().getFullYear();
const menu = $('#menuBtn'), links = $('#navLinks');
menu.addEventListener('click', () => {const open = links.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});
links.querySelectorAll('a').forEach(a => a.addEventListener('click',()=>{links.classList.remove('open');menu.setAttribute('aria-expanded','false');}));
const theme = $('#themeBtn');
theme.addEventListener('click',()=>{const dark=document.body.classList.toggle('dark');theme.textContent=dark?'🌙':'☀️';theme.setAttribute('aria-label',dark?'Switch to light theme':'Switch to dark theme');});
const projects = [
 {title:'SmartStock — Restaurant Inventory System',text:'My academic project in development investigates restaurant inventory tracking and automated ordering using web technologies and a database.',note:'Status: In development. Repository/demo link not yet supplied.'},
 {title:'Responsive Portfolio Design',text:'A learning concept to demonstrate mobile-friendly page layouts, accessible navigation, semantic HTML and modern CSS.',note:'Status: Learning concept. No separate live demo is claimed.'},
 {title:'Task Planner',text:'A proposed practice project to explore JavaScript event handling, form inputs and task organization.',note:'Status: Proposed concept, not a completed application.'}
];
const dialog=$('#projectDialog');
document.querySelectorAll('[data-project]').forEach(btn=>btn.addEventListener('click',()=>{const item=projects[Number(btn.dataset.project)];$('#dialogTitle').textContent=item.title;$('#dialogText').textContent=item.text;$('#dialogNote').textContent=item.note;dialog.showModal();}));
$('#closeDialog').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close();});
$('#contactForm').addEventListener('submit',event=>{event.preventDefault();const name=$('#name').value.trim(),email=$('#email').value.trim(),message=$('#message').value.trim(),status=$('#formStatus');const validEmail=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);if(name.length<2){status.textContent='Please enter your name (at least 2 characters).';$('#name').focus();return;}if(!validEmail){status.textContent='Please enter a valid email address.';$('#email').focus();return;}if(message.length<10){status.textContent='Please enter a message of at least 10 characters.';$('#message').focus();return;}status.textContent='Validation successful. Your email application will open to send the message.';const subject=encodeURIComponent('Portfolio enquiry from '+name),body=encodeURIComponent('From: '+name+' ('+email+')\n\n'+message);window.location.href='mailto:rijvemdgolamhassan@gmail.com?subject='+subject+'&body='+body;});
