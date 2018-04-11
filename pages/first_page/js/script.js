var headerForm = document.querySelector('#insideForm');
var linkForm = document.querySelector('#logIn');
var switchForm = 0;
var close =  document.querySelector('#headerCloser');

function ShowHideForm(linkButton, hiddenForm, switcher, closer){ 
	linkButton.onclick = function onOff(event){ 
		event.preventDefault(); 
		if(switcher==0){ 
			hiddenForm.style.display = 'block';
			hiddenForm.style.opacity = 1;
			
			switcher = 1; 
		}else{ 
			hiddenForm.style.opacity = 0;
			hiddenForm.style.display = 'none';

			switcher = 0; 
		}; 
	}; 
	closer.onclick = function onOff(event){ 
		event.preventDefault(); 
		if(switcher==0){ 
			hiddenForm.style.display = 'block'; 
			switcher = 1; 
		}else{ 
			hiddenForm.style.display = 'none'; 
			switcher = 0; 
		}; 
	}; 
}; 
var headerForm = new ShowHideForm(linkForm , headerForm, switchForm, close);

var nameText = document.querySelector('#nameInText');
var passText = document.querySelector('#password');
var secondText = document.querySelector('#secondText');

function focusBlur(elem, textIfFocus, textIfBlur){ 
	elem.onfocus = function () { 
		if(this.value == textIfBlur){ 
			this.value = textIfFocus; 
		};
	};
	elem.onblur = function () { 
		if(this.value == ''){ 
			this.value = textIfBlur; 
		};
	};
};

var verName = new focusBlur(nameText, '', 'Your name');
var verPass = new focusBlur(passText, '', 'xxxxxxxxxx');
var bottText = new focusBlur(secondText, '', 'Phasellus dolor tellus');

