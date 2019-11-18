<script>
import { Pie } from 'vue-chartjs'

export default {
  extends: Pie,
  name: 'PieChart',
  props: ['chartdata', 'options'],
  mounted() {
    this.renderChart(this.chartdata, this.options)
  }
}
</script>
