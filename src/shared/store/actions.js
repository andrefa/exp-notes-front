import placeActions from '@/shared/services/places'
import taskActions from '@/shared/services/tasks'
import tripActions from '@/shared/services/trips'
import userActions from '@/shared/services/users'

const actions = {
  ...placeActions,
  ...taskActions,
  ...tripActions,
  ...userActions
}

export default actions
