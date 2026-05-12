

interface User {
  id: string,
  name: string,
  nickname?: string;
}

function handle(user?: User) {
  if (!user) return;

  user.id.toUpperCase()
  user.name.toUpperCase()

  if (user.nickname) {
    user.nickname.toUpperCase()
  }
}

handle()