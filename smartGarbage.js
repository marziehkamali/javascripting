const smartGarbage = function (trash, bins) {
  if(trash === 'recycling') {
    bins.recycling = bins.recycling+1;
  }
  if( trash === 'waste') {
    bins.waste = bins.waste+1;
  }
  if( trash === 'compost') {
    bins.compost = bins.compost+1;
  }
  return bins
}

let result = smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 });
console.log(result);
