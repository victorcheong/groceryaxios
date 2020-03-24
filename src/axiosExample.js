import {Line} from 'vue-chartjs'
import axios from 'axios'

export default{
    extends:Line,
    data: () => ({
        results:[],
        chartdata: {
          //labels:['2020-3-05',4,5,6],
          labels:[],
          datasets: [
            {
              label: 'Covid-19 Cases in USD',
               data:[],
              //backgroundColor:['aqua','lightgreen','red','orange'],
              borderWidth:0.5,
              borderColor:"magenta",
              backgroundColor:'orange',
              fill:false
            }
          ]
          
        },
        options: {
           
          
        }
      }),
    methods:{
    
    fetchData : function(){
        axios.get('http://covid19.soficoop.com/country/us').then(response=>{
        this.results=response.data.snapshots
        for(var i = 0; i < this.results.length; i++){
            this.chartdata.datasets[0].data.push(this.results[i]['deaths'])
            this.chartdata.labels.push(this.results[i]['timestamp']+'')
        }
        this.renderChart(this.chartdata,this.options)
            
    })
    
    }
    
    },
     mounted(){
       // console.log('Do I come here')
        this.fetchData()
        
     }

    
    
    
}