
    

	mapboxgl.accessToken = mapToken;
    const map = new mapboxgl.Map({
        container: 'map', // container ID
         style: 'mapbox://styles/mapbox/streets-v12',
        center: listing.geometry.coordinates,
       
        zoom: 8 // starting zoom
    });
    console.log("coordinates:",listing.geometry.coordinates);
  
const marker = new mapboxgl.Marker({ color: 'red' })
    .setLngLat(listing.geometry.coordinates)
    .setPopup(
        new mapboxgl.Popup({ offset: 25 })
            .setHTML(`<h3>${listing.location}</h3><p>Exact location provided after booking</p>`)
    )
    .addTo(map);


