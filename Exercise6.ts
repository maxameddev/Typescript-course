// 1
enum UserRole {
  SuperAdmin = "superadmin",
  Moderator = "moderator",
  Viewer = "viewer",
}

function canEdit(role: UserRole): boolean {
  return role !== UserRole.Viewer;
}

canEdit(UserRole.SuperAdmin);
canEdit(UserRole.Moderator);
canEdit(UserRole.Viewer);

// 2
const btn = document.querySelector("button") as HTMLButtonElement;
btn.disabled = true;
