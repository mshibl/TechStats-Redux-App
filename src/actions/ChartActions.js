import { UPDATE_CHART } from '../constants/ActionTypes';
import fetch from 'isomorphic-fetch'

function updateChartData(newData){
  return {
    type: UPDATE_CHART,
    newData
  }
}

function filterLanguages(language){
  return language.name.toLowerCase() == this.toLowerCase()
}

export function loadData(chartData){
  return dispatch => {
    fetch("http://localhost:8080/languages/demand")
      .then(res => res.json())
      .then(json => {
        let newData = chartData.map(function(language){
            return Object.assign({},language,{
              demand: json.find(filterLanguages, language.name).demand
            })
          })
        dispatch(updateChartData(newData))
      })
    }
}




// *****************************************

function StackOverflowFilter(result){
  return result.name.toLowerCase() == this.toLowerCase()
}

// export function loadData(chartData){
//   return dispatch => {
    // let loaders = []
    // chartData.map(columnData => {
      // loaders.push(new Promise(function(res,rej){
        // fetch("https://api.stackexchange.com/2.2/tags?order=desc&sort=popular&inname=java&site=stackoverflow")
          // .then(res => res.json())
          // .then(json => {
            // let matchedData = json.items.filter(StackOverflowFilter, columnData.name)
            // columnData.points = matchedData.count
          // })
          // .then(res())
      // }))
    // })

    // Promise.all(loaders).then(function(){
    //   console.log(chartData)
    //   console.log('all fetch requests done')
    // })
//   }
// }
