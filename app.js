const settings = {
	async: true,
	crossDomain: true,
	url: 'https://corona-virus-world-and-india-data.p.rapidapi.com/api',
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ddcc5cc066msh1d2d66280cd39a2p1ff301jsn70fb869629f2',
		'X-RapidAPI-Host': 'corona-virus-world-and-india-data.p.rapidapi.com'
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);

	for(var i = 0; i< response.countries_stat.length; i++) {
		var tablerow = `<tr> <td>${response.countries_stat[i].country_name}</td> 
						<td>${response.countries_stat[i].cases}</td>
						<td>${response.countries_stat[i].active_cases}</td> 
						<td>${response.countries_stat[i].total_recovered}</td>
						<td>${response.countries_stat[i].deaths}</td> </tr>`
		$('#tbody').append(tablerow);
	}
	$('#covidTable').DataTable();
});