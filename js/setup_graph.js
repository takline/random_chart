var chart = c3.generate({
data: {
    columns: [
            ['Revenue',
            0, 
             0, 
             0, 
             0, 
            0, 
            0, 
             0, 
            0, 
            0, 
            0, 
            0, 
            0, 
            0, 
            0, 
            0, 
            0, 
            0, 
              0,
              0
             ] 
             ,['Goal', 
              0, 
              0, 
              0, 
              0, 
              0, 
              0, 
              0, 
             0, 
             0, 
             0, 
             0, 
             0, 
             0, 
             0, 
             0, 
             0, 
             0, 
             0,
             0
             ]
            ]
   },
    point: {
        show: false
    },
     colors: {
                  Revenue: '#003a6f',
                  Goal: '#a12830',
                  pattern: ['#1f77b4', '#aec7e8', '#ff7f0e', '#ffbb78', '#2ca02c', '#98df8a', '#d62728', '#ff9896', '#9467bd', '#c5b0d5', '#8c564b', '#c49c94', '#e377c2', '#f7b6d2', '#7f7f7f', '#c7c7c7', '#bcbd22', '#dbdb8d', '#17becf', '#9edae5']

                },
     axis: {
        x: {
            type: 'category',
			categories: ['Month -6','Month -5','Month -4','Month -3','Month -2','Month -1','Month 0','Month 1','Month 2','Month 3','Month 4','Month 5' ,'Month 6' ,'Month 7' ,'Month 8' ,'Month 9' ,'Month 10' ,'Month 11' ,'Month 12' ]
 
        } }

})
