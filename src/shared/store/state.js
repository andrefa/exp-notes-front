const state = {
  authToken: null,
  categories: [],
  currencies: [],
  expenses: [],
  loading: false,
  places: [],
  sources: [],
  trips: [],
  tasks: [],
  taskForm: { id: null, description: null },
  spentPerSource: [],
  spentPerCategory: [],
  spentPerDayAndCategory: [],
  remainingDays: 0,
  remainingAmountPerSource: [],
  remainingAmountPerDay: 0
}

export default state
