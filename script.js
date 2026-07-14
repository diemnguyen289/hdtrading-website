const navToggle=document.querySelector('.nav-toggle');const siteNav=document.querySelector('.site-nav');if(navToggle&&siteNav){navToggle.addEventListener('click',()=>{const open=siteNav.classList.toggle('open');navToggle.setAttribute('aria-expanded',String(open));navToggle.setAttribute('aria-label',open?'Close navigation':'Open navigation')});siteNav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{siteNav.classList.remove('open');navToggle.setAttribute('aria-expanded','false')}))}document.getElementById('year').textContent=new Date().getFullYear();const items=document.querySelectorAll('.reveal');if('IntersectionObserver'in window&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});items.forEach(item=>observer.observe(item))}else{items.forEach(item=>item.classList.add('visible'))}const form=document.getElementById('supplier-form');if(form){form.addEventListener('submit',event=>{event.preventDefault();const data=new FormData(form);const subject=encodeURIComponent('Supplier Partnership Inquiry - '+(data.get('company')||'Company'));const body=encodeURIComponent(`Company Name: ${data.get('company')||''}
Contact Name: ${data.get('contact')||''}
Email: ${data.get('email')||''}
Phone: ${data.get('phone')||''}
Website: ${data.get('website')||''}
Product Categories: ${data.get('categories')||''}

Message:
${data.get('message')||''}

Please attach your catalog, price list, MOQ, and wholesale terms before sending.`);window.location.href=`mailto:purchasing@hdtradingllc.net?subject=${subject}&body=${body}`})}