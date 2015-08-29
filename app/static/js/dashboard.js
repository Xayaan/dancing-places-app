function all_check(){
  $('.all-days-one').prop('checked', true);
}

var country_options = '<div class="type-inner-item"><input type="checkbox" name="country" value="line"><p>Line Dancing</p></div><div class="type-inner-item"><input type="checkbox" name="country" value="waltz"><p>Country Waltz</p></div><div class="type-inner-item"><input type="checkbox" name="country" value="ttwostep"><p>Texas Two Step</p></div><div class="type-inner-item"><input type="checkbox" name="country" value="twostep"><p>Two Step</p></div><div class="type-inner-item"><input type="checkbox" name="country" value="waltz"><p>Polka</p></div>'
var swing_options = '<div class="type-inner-item"><input type="checkbox" name="swing" value="east-coast"><p>East Coast</p></div><div class="type-inner-item"><input type="checkbox" name="swing" value="west-coast"><p>West Coast</p></div><div class="type-inner-item"><input type="checkbox" name="swing" value="hustle"><p>Hustle</p></div><div class="type-inner-item"><input type="checkbox" name="swing" value="lindyhop"><p>Lindy Hop</p></div><div class="type-inner-item"><input type="checkbox" name="swing" value="lindy"><p>Lindy</p></div>'
var ballroom_options = '<div class="type-inner-item"><input type="checkbox" name="ballroom" value="waltz"><p>Waltz</p></div><div class="type-inner-item"><input type="checkbox" name="ballroom" value="tango"><p>Tango</p></div><div class="type-inner-item"><input type="checkbox" name="ballroom" value="foxtrot"><p>Foxtrot</p></div><div class="type-inner-item"><input type="checkbox" name="ballroom" value="foxy"><p>Foxy</p></div><div class="type-inner-item"><input type="checkbox" name="ballroom" value="atango"><p>Argentine Tango</p></div>'
var latin_options = '<div class="type-inner-item"><input type="checkbox" name="latin" value="salsa"><p>Salsa</p></div><div class="type-inner-item"><input type="checkbox" name="latin" value="bachata"><p>Bachata</p></div><div class="type-inner-item"><input type="checkbox" name="latin" value="merengue"><p>Merengue</p></div><div class="type-inner-item"><input type="checkbox" name="latin" value="cumbia"><p>Cumbia</p></div><div class="type-inner-item"><input type="checkbox" name="latin" value="rumba"><p>Rumba</p></div><div class="type-inner-item"><input type="checkbox" name="latin" value="chacha"><p>Cha-Cha</p></div><div class="type-inner-item"><input type="checkbox" name="latin" value="reggaeton"><p>Reggaeton</p></div><div class="type-inner-item"><input type="checkbox" name="latin" value="kizomba"><p>Kizomba</p></div><div class="type-inner-item"><input type="checkbox" name="latin" value="zouk"><p>Zouk</p></div>'
var club_options = '<div class="type-inner-item"><input type="checkbox" name="club" value="grinding"><p>Grinding</p></div><div class="type-inner-item"><input type="checkbox" name="club" value="other"><p>Other</p></div>'

var days = '<div class="days"><h4>Days</h4><div class="days-item"><input type="checkbox"><p>Everyday</p></div><div class="days-item"><input type="checkbox"><p>Saturday</p></div><div class="days-item"><input type="checkbox"><p>Sunday</p></div><div class="days-item"><input type="checkbox"><p>Monday</p></div><div class="days-item"><input type="checkbox"><p>Tuesday</p></div><div class="days-item"><input type="checkbox"><p>Wednesday</p></div><div class="days-item"><input type="checkbox"><p>Thursday</p></div><div class="days-item"><input type="checkbox"><p>Friday</p></div></div>'

$(document).on('click', '.type-upper h5', function(){
	$('.type-upper h5').removeClass('active-upper');
	$(this).addClass('active-upper');
});

$(document).on('click', '.country-upper', function(){
	$('.type-inner').empty();
	$('.type-inner').append(country_options);
});

$(document).on('click', '.swing-upper', function(){
	$('.type-inner').empty();
	$('.type-inner').append(swing_options);
});

$(document).on('click', '.ballroom-upper', function(){
	$('.type-inner').empty();
	$('.type-inner').append(ballroom_options);
});

$(document).on('click', '.latin-upper', function(){
	$('.type-inner').empty();
	$('.type-inner').append(latin_options);
});

$(document).on('click', '.club-upper', function(){
	$('.type-inner').empty();
	$('.type-inner').append(club_options);
});

$(document).on('click', '.submit', function(){
	
});