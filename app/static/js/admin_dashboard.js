function makeItem(id, country, city, dance){
	return '<tr class="success"><td class="id">id-goes-here</td><td class="type">dance-goes-here</td><td class="country">country-goes-here, city-goes-here</td><td>Already Approved</td><td><button class="del-bttn btn btn-block btn-danger">Cancel</button></td></tr>'.replace("id-goes-here", id).replace("dance-goes-here", dance).replace("country-goes-here", country).replace("city-goes-here", city);
}

$(document).on('click', '.approve-bttn', function(){
	var elem = $(this).parent().parent()
	$.getJSON('/dance/approve', 
		 {
		 	object_id: $(this).parent().parent().find('.id').text()
		 }, function(data){
		 	if(data.string == "200 OK"){
		 		elem.replaceWith(makeItem(data.object_id, data.country, data.city, data.type))
		 	}
		 });
});

$(document).on('click', '.del-bttn', function(){
	var elem = $(this).parent().parent()
	$.getJSON('/dance/delete', 
		 {
		 	object_id: $(this).parent().parent().find('.id').text()
		 }, function(data){
		 	if(data.string == "200 OK"){
		 		var itemId = $(elem).find('.id').text();
				hackerList.remove('id', itemId); 
		 		elem.remove();
		 	}
		 });
});