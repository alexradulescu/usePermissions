enum ROLES {
  USER,
  ADMIN
}

const PERMISSIONS = {
  [ROLES.USER]: ['post:view', 'comment:add'],
  [ROLES.ADMIN]: [
    'post:view',
    'author:update',
    'comment:add',
    'access:adminPage'
  ]
}

const CURRENT_USER = {
  username: 'Maria',
  role: ROLES.ADMIN
}

export const usePermission = () => {
  const currentUser = CURRENT_USER

  const getPermissions = () => {
    /**
     * Get permissions on page load (high up the tree)
     * and save them to the store
     */
  }

  const isPermitted = (permission: string) => {
    return PERMISSIONS[currentUser.role].includes(permission)
  }

  return { getPermissions, isPermitted }
}
