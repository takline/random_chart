var chart = c3.generate({
data: {
    columns: [ ['revenue', 30, 200, 100, 400, 150, 250, 350, 450, 550] ,['goal', 300, 300, 300, 300, 300, 300, 300, 300, 300] ],
    type:'bar',
    types: {
      goal: 'line'

    }
   }

})