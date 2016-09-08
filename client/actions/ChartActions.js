import { UPDATE_CHART } from '../constants/ActionTypes';
import fetch from 'isomorphic-fetch'

const isProduction = window.location.hostname != "localhost"
const apiHostName = isProduction? "http://" + window.location.hostname  : "http://" + window.location.hostname + ":" + window.location.port

function updateChartData(newChartData, newGraphsData){
  console.log(newGraphsData)
  return {
    type: UPDATE_CHART,
    newChartData,
    newGraphsData
  }
}

export function loadData(valueField){
  return (dispatch, getState) => {
    let graphs = getState().chart.graphs[0]

    fetch(apiHostName + "/languages/"+valueField)
      .then(res => res.json())
      .then(data => {
        let newChartData = data.sort(function sortData(a, b) {
          return a[valueField] > b[valueField] ? -1 : 1
        })
        let newGraphsData = [Object.assign({},graphs,{
          valueField: valueField
        })]
        dispatch(updateChartData(newChartData, newGraphsData))
      })
    }
}
