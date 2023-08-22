import { ChartData } from "chart.js"
import { Point } from "chart.js/dist/core/core.controller"

export default interface ILineChart {
  options: object,
  data: ChartData<"line", (number | Point | null)[], unknown>
}