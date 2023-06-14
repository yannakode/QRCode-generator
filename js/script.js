const btn=document.getElementById('btn');
const qrImg=document.getElementById('qr-img');
const userInput=document.getElementById('text');

btn.addEventListener('click', function(){
	let googleChartApi='https://chart.googleapis.com/chart?cht=qr&chs=500x500&chld=H&chl=';
	let inputContent= googleChartApi + encodeURIComponent(userInput.value);
	console.log(inputContent);
	qrImg.src=inputContent;
})