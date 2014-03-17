// devmob JS

// Mail Link

function UnCryptMailto(s, shift)
{
	var n=0;
	var r="";
	for(var i=0;i<s.length;i++)
	{ 
		n=s.charCodeAt(i); 
		if (n>=8364) {n = 128;}
		r += String.fromCharCode(n-(shift)); 
	}
	return r;
}

function linkTo_UnCryptMailto(s, shift)
{
	location.href=UnCryptMailto(s, shift);
}

// Image swapping

var imageIndex = 2;
var arr = ["images/screen1.jpg", "images/screen2.jpg", "images/screen3.jpg", "images/screen4.jpg", "images/screen5.jpg"];

function nextImage()
{
	imageIndex++;
	if( arr.length < imageIndex + 1 )
	{
		imageIndex = 0;
	}
	
	document.images["image"].src = arr[imageIndex];
}

function previousImage()
{
	imageIndex--;
	if( 0 > imageIndex )
	{
		imageIndex = arr.length - 1;
	}
	
	document.images["image"].src = arr[imageIndex];
}