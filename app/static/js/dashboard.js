function all_check(){
  var allDays = $('.all-days-one')
  for (var i=0; i<allDays.length; i++){
    allDays[i].checked = true;
  }
  $('.everyday')[0].checked = false;
}

var ballroom_options = '<div class="well well-sm"> \
<div class="checkbox"> <label> <input type="checkbox" name="ballroom" value="atango"> Argentine Tango </label></div> \
<div class="checkbox"> <label> <input type="checkbox" name="ballroom" value="foxtrot"> Foxtrot </label></div> \
<div class="checkbox"> <label> <input type="checkbox" name="ballroom" value="foxy"> Foxy </label></div> \
<div class="checkbox"> <label> <input type="checkbox" name="ballroom" value="tango"> Tango </label></div> \
<div class="checkbox"> <label><input type="checkbox" name="ballroom" value="waltz"> Waltz </label></div> \
</div>'

var country_options = '<div class="well well-sm"> \
<div class="checkbox"> <label> <input type="checkbox" name="country" value="waltz"> Country Waltz </label></div> \
<div class="checkbox"> <label> <input type="checkbox" name="country" value="line"> Line Dancing </label></div> \
<div class="checkbox"> <label> <input type="checkbox" name="country" value="polka"> Polka </label></div> \
<div class="checkbox"> <label> <input type="checkbox" name="country" value="texastwostep"> Texas Two Step </label></div> \
<div class="checkbox"> <label> <input type="checkbox" name="country" value="twostep"> Two Step </label></div> \
</div>'

var swing_options = '<div class="well well-sm"> \
<div class="checkbox"> <label> <input type="checkbox" name="swing" value="east-coast"> East Coast </label></div> \
<div class="checkbox"> <label> <input type="checkbox" name="swing" value="hustle"> Hustle </label></div> \
<div class="checkbox"> <label> <input type="checkbox" name="swing" value="lindy"> Lindy </label></div> \
<div class="checkbox"> <label> <input type="checkbox" name="swing" value="lindyhop"> Lindy Hop </label></div> \
<div class="checkbox"> <label> <input type="checkbox" name="swing" value="west-coast"> West Coast </label></div> \
</div>'

var latin_options = '<div class="well well-sm"> \
<div class="checkbox"> <label> <input type="checkbox" name="latin" value="bachata"> Bachata </label></div> \
<div class="checkbox"><label><input type="checkbox" name="latin" value="chacha">Cha-Cha</label></div> \
<div class="checkbox"> <label> <input type="checkbox" name="latin" value="cumbia"> Cumbia </label></div> \
<div class="checkbox"><label><input type="checkbox" name="latin" value="kizomba">Kizomba</label></div> \
<div class="checkbox"> <label> <input type="checkbox" name="latin" value="merengue"> Merengue </label></div> \
<div class="checkbox"><label><input type="checkbox" name="latin" value="reggaeton">Reggaeton</label></div> \
<div class="checkbox"> <label> <input type="checkbox" name="latin" value="rumba"> Rumba </label></div> \
<div class="checkbox"> <label> <input type="checkbox" name="latin" value="salsa"> Salsa </label></div> \
<div class="checkbox"> <label> <input type="checkbox" name="latin" value="samba"> Samba </label></div> \
<div class="checkbox"><label><input type="checkbox" name="latin" value="zouk">Zouk</label></div> \
</div>'

var club_options = '<div class="well well-sm"><div class="checkbox"> <label> <input type="checkbox" name="club" value="grinding"> Grinding </label></div></div>'

$(document).on('click', '.type-upper h5', function(){
  $('.type-upper h5').removeClass('active-upper');
  $(this).addClass('active-upper');
});

$(document).on('click', '.ballroom-upper', function(){
  $('.type-inner').empty();
  $('.type-inner').append(ballroom_options);
});

$(document).on('click', '.country-upper', function(){
  $('.type-inner').empty();
  $('.type-inner').append(country_options);
});

$(document).on('click', '.swing-upper', function(){
  $('.type-inner').empty();
  $('.type-inner').append(swing_options);
});

$(document).on('click', '.latin-upper', function(){
  $('.type-inner').empty();
  $('.type-inner').append(latin_options);
});

$(document).on('click', '.club-upper', function(){
  $('.type-inner').empty();
  $('.type-inner').append(club_options);
});

var totalMonths = ['', '', '', '', '', '', '', '', '', '', '', '']

var tmpcheck = []

function joinMonths(){
  var outMonths = ""
  for (var i=0; i<totalMonths.length; i++){
    tmpcheck.push("s")
    tmpcheck.push(totalMonths[i])
    if (totalMonths[i] != ''){
      outMonths = outMonths + totalMonths[i] + ", "
    }
  }
  return outMonths.substring(0, outMonths.length - 2)
}

function unCheckAll(){
  var checkboxes = $("input[type='checkbox']")
  for (var i=0; i<checkboxes.length; i++){
    checkboxes[i].checked = false;
  }
}

$(function() {
  unCheckAll()
})

$(function() {
  var monthValues = {'January':0, 'February':1, 'March':2, 'April':3, 'May':4, 'June':5, 'July':6, 'August':7, 'September':8, 'October':9, 'November':10, 'December':11}
  $("input[type='checkbox']").change(function() {
    if (this.checked) {
    var position = 
        totalMonths[monthValues[$(this).val()]] = $(this).val()      
    } else {
      totalMonths[monthValues[$(this).val()]] = ''      
    }
  })
})

function getDays(){
  var outDays = ''
  var allDays = $('.all-days-one')
  for (var i=0; i<allDays.length; i++){
    if (allDays[i].checked == true){
      outDays = outDays + $(allDays[i]).val() + ", "
    }
  }
  return outDays.substring(0, outDays.length - 2)
}

$(document).on('click', '.submit-dance', function(){
  console.log("submitting dance");
  if($('#country-input').val().length != 0 && $('#city-input').val().length != 0 && $('#address-input').val().length != 0 && $('#cost-input').val().length != 0 && $('#dress-input').val().length != 0){
    if($('.upper').hasClass('active-upper')){
      $.getJSON('/dance/add',
		{
		  country: $('#country-input').val(),
		  city: $('#city-input').val(),
		  address: $('#address-input').val(),
		  cost: $('#cost-input').val(),
		  dress: $('#dress-input').val(),
		  dance_type: $('.active-upper').text(),
                  days: getDays(),
		  months: joinMonths(),
		  website: $('#website-input').val(),
		  meetup: $('#meetup-input').val(),
		  twitter: $('#twitter-input').val(),
		  facebook: $('#facebook-input').val(),
		  contact: $('#contact-input').val(),
		  notes: $('#notes-input').val()
		}, function(data){
		     if(data.string == "200 OK"){
		       alert("Dance submitted for review. Thank you!");
                       $('#myModal').modal('toggle');
                       unCheckAll()
		     }
		   });
    } else{
      alert("Select a dance type!")
    }
  } else{
    alert("Fill in the basic details!")
  }
});