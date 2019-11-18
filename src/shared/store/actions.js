import categoryActions from '@/shared/services/categories'
import currencyActions from '@/shared/services/currencies'
import expenseActions from '@/shared/services/expenses'
import placeActions from '@/shared/services/places'
import reportActions from '@/shared/services/reports'
import sourceActions from '@/shared/services/sources'
import taskActions from '@/shared/services/tasks'
import tripActions from '@/shared/services/trips'
import userActions from '@/shared/services/users'

const actions = {
  ...categoryActions,
  ...currencyActions,
  ...expenseActions,
  ...placeActions,
  ...reportActions,
  ...sourceActions,
  ...taskActions,
  ...tripActions,
  ...userActions
}

export default actions
