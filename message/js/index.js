this.$dom = {};
this.$dom.animatedText = document.createElement('div');
this.text = "Kitna Gussa kregi re ! Naak pe itna pressure mata de ! I know m bahot bura hu but kaisa bhi hu tera hu ! i am really very sorry ! please maaf kr de! esa mat kr ! kitna kregi aur gussaaaa pleasee stuart little! chal ab please smile kr ! meko pata h vo hate you pe click krke khush hui tu but thik h !!! ha ha yahi yahi smile chahiye jo abhi ye message padha kr ayi na !!! SORRRY NA STUART little!! STUARRRRTTTTTT MAANJAA NAA!!!!!!!!! Chal ab aage game chalte h aa jaa....... " ;  // MESSAGE AREA , THIS CAN BE CHANGED FROM YOUR MESSAGE :)
this.$dom.container = document.getElementById('container');
this.$dom.container.appendChild(this.$dom.animatedText);
animateText();
function animateText(){
	var arrayOfLetters = this.text.split("");
	var animatedSpan = [];
	arrayOfLetters.forEach(function(item){
		var span = document.createElement('span');
		span.innerHTML = item;
		animatedSpan.push(span);
		span.style.opacity = 0;
		span.style.color = 'white';
		this.$dom.animatedText.appendChild(span);
	});
	TweenMax.staggerTo(animatedSpan, .2,{
		opacity : 1,
		delay : 2
	},0.05);
}
