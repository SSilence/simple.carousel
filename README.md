simple.carousel
===============

Copyright (c) 2015 Tobias Zeising, http://www.aditu.de<br />
Licensed under the MIT license<br />
Version 0.3

This is a simple jQuery plugin for creating sliding carousels.


Demo/Examples
-------------

[simple demo](http://public.aditu.de/simple.carousel/example.html)<br />
[aditu.de (image will change using a fade in/fade out effect)](http://www.aditu.de/)<br />
[rsslounge (presentation of the features by an slideshow)](http://rsslounge.aditu.de/)<br />


Usage
-----

Insert following in the head part of your html page:

<pre>
&lt;script type="text/javascript" src="javascript/jquery-1.8.3.min.js"&gt;&lt;/script&gt; 
&lt;script type="text/javascript" src="javascript/simple.carousel.0.3.js"&gt;&lt;/script&gt; 
&lt;script type="text/javascript"&gt; 
jQuery(document).ready(function() {
	// initialize carousel
	$("#carousel").simplecarousel({
		next: $('.next'),
		prev: $('.prev'),
		slidespeed: 700,
		auto: 5000,
		width: 480,
		height: 280
	});
});
&lt;/script&gt; 
</pre>

This will change following html structure

<pre>
	&lt;ul id="carousel"&gt;
	 &lt;li&gt;first frame (e.g. an image)&lt;/li&gt;
	 &lt;li&gt;second frame (e.g. an image)&lt;/li&gt;
	 &lt;li&gt;third frame (e.g. an image)&lt;/li&gt;
	 ...
	&lt;/ul&gt;
</pre>

into a slider

![simple carousel slider](http://public.aditu.de/simple.carousel_google_code.jpg)


Parameters
----------

<table>
  <tr>
    <th>parameter</th><th>type</th><th>outcome</th>
  </tr>
  <tr>
    <td>width</td><td>int</td><td>width of the single frames</td>
  </tr>
  <tr>
    <td>height</td><td>int</td><td>height of the frames</td>
  </tr>
  <tr>
    <td>next</td><td>jQuery Objekt/Selector</td><td>clicking on this object will show the next frame (for next button)</td>
  </tr>
  <tr>
    <td>prev</td><td>jQuery Objekt/Selector</td><td>clicking on this object will show the previous frame (for prev button)</td>
  </tr>
  <tr>
    <td>vertical</td><td>boolean</td><td>vertical sliding; false = horizontal sliding</td>
  </tr>
  <tr>
    <td>auto</td><td>int/boolean</td><td>false = no automatic sliding; Value in milliseconds = time between two frames</td>
  </tr>
  <tr>
    <td>slidespeed</td><td>int</td><td>speed of the sliding effect in milliseconds</td>
  </tr>
  <tr>
    <td>visible</td><td>int</td><td>amount of frames which are visible</td>
  </tr>
  <tr>
    <td>fade</td><td>int</td><td>use a fade out/fade in effect instead of the sliding effect. false = use sliding effect; time in milliseconds will activate the fadein/fadeout and set the speed of this effect</td>
  </tr>
  <tr>
    <td>pagination</td><td>int</td><td>set true for this value and a pagination element will be included</td>
  </tr>
  <tr>
    <td>pauseOnclick</td><td>int</td><td>A boolean that when true pauses the automatic sliding when user clicks in the current visible content. The default value is false.</td>
  </tr>
  <tr>
    <td>paginationItem</td><td>int</td><td>A function which takes the item index as paramter and returns a string which will fill the button element. The default value is function( i ) { return ''; }</td>
  </tr>
</table>


Example
-------

<pre>
$("#carousel").simplecarousel({
    next: $('.next'),
    prev: $('.prev'),
    auto: 4000,
    fade: 400
});
</pre>

Will create a carousel with fadein/fadeout effect. The pause between two frames will be 4 seconds, the speed of the fade effect will be 400 ms, the element with the class 'next' will be the next button (the same with 'prev' for back button). See download for further examples.
