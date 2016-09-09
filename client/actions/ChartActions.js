import { UPDATE_CHART } from '../constants/ActionTypes';
import fetch from 'isomorphic-fetch'

const isProduction = window.location.hostname != "localhost"
const apiHostName = isProduction? "http://" + window.location.hostname  : "http://" + window.location.hostname + ":" + window.location.port

function updateChartData(newChartData, newGraphsData, newValueAxes){
  return {
    type: UPDATE_CHART,
    newChartData,
    newGraphsData,
    newValueAxes
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
        let newValueAxes = [{"title": ""}]
        if (valueField == "demand") newValueAxes = [{"title": "Number of Jobs on Indeed.com"}]
        if (valueField == "questions") newValueAxes = [{"title": "Number of Questions on StackOverflow"}]
        dispatch(updateChartData(newChartData, newGraphsData, newValueAxes))
      })
    }
}
