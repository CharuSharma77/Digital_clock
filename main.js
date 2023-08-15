setInterval(function() {
  let date = new Date();

  let hour = date.getHours()
  let minute = date.getMinutes()
  let second = date.getSeconds()

  // +":"+ minute+":"+second;
  hours.innerHTML = hour
  m.innerHTML = minute
  s.innerHTML = second
  let d = new Date();
  let day1 = d.getDay();



  let year=date.getFullYear();
  let month=date.getMonth() ;
  let date_of_month=date.getDate();
let complete_date=date_of_month +" / " + month +" / " +year
  dateq.innerHTML=complete_date;
  //  Code for AM/ PM

  if (hour > 12) {
    hour = (date.getHours()) - 12
    flag.innerHTML = "PM";
    hours.innerHTML = hour

  }


  // Code for Day
  let z = document.getElementById("dayA")
  if (day1 == 0) {
    day_word = "Sunday"
    z.innerHTML = day_word;
  }
  else if (day1 == 1) {
    day_word = "Monday"
    z.innerHTML = day_word;
  }
  else if (day1 == 2) {
    day_word = "Tuesday"
    z.innerHTML = day_word;
  }
  else if (day1 == 3) {
    day_word = "Wednesday"
    z.innerHTML = day_word;
  }
  else if (day1 == 4) {
    day_word = "thursday"
    z.innerHTML = day_word;
  }
  else if (day1 == 5) {
    day_word = "Friay"
    z.innerHTML = day_word;
  }

  else if (day1 == 6) {
    day_word = "Saturday"
    z.innerHTML = day_word;
  }



}, 1000)
console.log(date);



