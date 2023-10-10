if(localStorage.getItem('days') == NaN){
  localStorage.setItem('days', 0)
}else{
  let LocalStorageDays = localStorage.getItem('days')
  updateDays()
  
  document.getElementById('addDayButton').addEventListener('click', function(){
    let daysUpdated = parseInt(LocalStorageDays)
    localStorage.setItem('days', daysUpdated += 1)
    updateDays()
    console.log('A day have been incressed')
  })
  
  document.getElementById('loseDayButton').addEventListener('click', function(){
    let daysUpdated = parseInt(LocalStorageDays)
    if(daysUpdated > 0){
      localStorage.setItem('days', daysUpdated -= 1)
      console.log('A day have been decressed')
    }else{
      alert('Não é possível retirar mais dias. Tente começar hoje!')
    }
    updateDays()
  })
  
  function updateDays(){
    document.getElementById('Days').textContent = localStorage.getItem('days')
    LocalStorageDays = localStorage.getItem('days')
  }
}

