import { RoleCode, ROLE_DEFAULT_PERMISSIONS } from '../types/rbac';

export interface AuthenticatedUserContext {
  userId: string;
  email: string;
  roles: RoleCode[];
  permissions: string[];
  locale: string;
  currency: string;
  isForeign: boolean;
  stakeholderId?: string;
  clinicId?: string;
  agentId?: string;
}

export class RbacService {
  /**
   * Belirtilen rol kodları için tüm yetkileri birleştirir
   */
  public static getPermissionsForRoles(roles: RoleCode[]): string[] {
    const permissionsSet = new Set<string>();
    for (const role of roles) {
      const perms = ROLE_DEFAULT_PERMISSIONS[role] || [];
      perms.forEach((p) => permissionsSet.add(p));
    }
    return Array.from(permissionsSet);
  }

  /**
   * Kullanıcının istenen yetkiye sahip olup olmadığını kontrol eder
   */
  public static hasPermission(user: AuthenticatedUserContext, permissionCode: string): boolean {
    if (user.roles.includes(RoleCode.SUPER_ADMIN)) {
      return true;
    }
    return user.permissions.includes(permissionCode);
  }

  /**
   * Kullanıcının belirtilen rollerden en az birine sahip olup olmadığını kontrol eder
   */
  public static hasAnyRole(user: AuthenticatedUserContext, allowedRoles: RoleCode[]): boolean {
    if (user.roles.includes(RoleCode.SUPER_ADMIN)) {
      return true;
    }
    return user.roles.some((r) => allowedRoles.includes(r));
  }
}
