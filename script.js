```javascript
drawRadar(false);


animateBtn?.addEventListener('click', ()=>{
// small animation: shuffle values slightly and redraw
skills.forEach(s=> s.val = Math.max(30, Math.min(95, s.val + (Math.random()*10-5))));
renderLegend();
drawRadar(true);
});


// showPercent toggling
const showPercentCheckbox = document.getElementById('showPercent');
showPercentCheckbox?.addEventListener('change', ()=> renderLegend());


// theme toggle
themeToggle?.addEventListener('click', ()=>{
document.documentElement.classList.toggle('light');
document.body.classList.toggle('light');
themeToggle.textContent = document.body.classList.contains('light') ? '🌞' : '🌙';
});


// vCard generator
downloadVcard?.addEventListener('click', ()=>{
const vcard = [
'BEGIN:VCARD',
'VERSION:3.0',
'FN:Trishit',
'EMAIL;TYPE=INTERNET:your.email@example.com',
'TEL;TYPE=CELL:+91-00000-00000',
'ORG:Techno India University',
'TITLE:Student',
'ADR:;;Kolkata;;',
'END:VCARD'
].join('
');
const blob = new Blob([vcard], {type:'text/vcard'});
const url = URL.createObjectURL(blob);
const a = document.createElement('a');
a.href = url; a.download = 'Trishit.vcf'; document.body.appendChild(a); a.click(); a.remove();
URL.revokeObjectURL(url);
});


// print helper
printBtn?.addEventListener('click', ()=> window.print());


// small accessibility: keyboard focus for buttons
[animateBtn, themeToggle, downloadVcard, printBtn].forEach(el=>{ if(el) el.tabIndex = 0 });
