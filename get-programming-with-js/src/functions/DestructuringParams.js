function coordinates({lat, lon, lgn=lon}){
    console.log(`Lat: ${lat}, Lon: ${lgn}`);
}

coordinates({lat:12,lgn:5});
coordinates({lat:12,lon:6});

function destructuringArr([one, two]){
    console.log(one);
    console.log(two);
}

destructuringArr([1,2]);
destructuringArr([1,2,3]);